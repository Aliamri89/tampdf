import { deflate } from "@/lib/zlib";

/**
 * Lossy PNG compression the way TinyPNG/pngquant do it: reduce the image to
 * an optimised palette of at most `maxColors` RGBA colours (median cut over a
 * colour histogram, refined with k-means), dither to hide banding, then write
 * an 8-bit indexed PNG. Keeps the PNG format and full transparency while
 * typically cutting 50-80% off screenshots, graphics and UI images.
 */
export async function quantizeToPng(imageData: ImageData, maxColors: number): Promise<Blob> {
  const { width, height, data } = imageData;
  const palette = buildPalette(data, maxColors);
  const indices = mapPixels(data, width, height, palette);
  return encodeIndexedPng(width, height, palette, indices);
}

type Color = [number, number, number, number];

interface Bucket {
  r: number;
  g: number;
  b: number;
  a: number;
  count: number;
}

const keyOf = (r: number, g: number, b: number, a: number) =>
  ((r >> 3) << 15) | ((g >> 3) << 10) | ((b >> 3) << 5) | (a >> 3);

function buildPalette(data: Uint8ClampedArray, maxColors: number): Color[] {
  const size = 1 << 20;
  const counts = new Uint32Array(size);
  const sums = new Float64Array(size * 4);
  let transparent = 0;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a < 8) {
      transparent++;
      continue;
    }
    const k = keyOf(data[i], data[i + 1], data[i + 2], a);
    counts[k]++;
    sums[k * 4] += data[i];
    sums[k * 4 + 1] += data[i + 1];
    sums[k * 4 + 2] += data[i + 2];
    sums[k * 4 + 3] += a;
  }

  const buckets: Bucket[] = [];
  for (let k = 0; k < size; k++) {
    const c = counts[k];
    if (c === 0) continue;
    buckets.push({ r: sums[k * 4] / c, g: sums[k * 4 + 1] / c, b: sums[k * 4 + 2] / c, a: sums[k * 4 + 3] / c, count: c });
  }

  const colorBudget = maxColors - (transparent > 0 ? 1 : 0);
  let palette: Color[];
  if (buckets.length <= colorBudget) {
    palette = buckets.map((b) => [Math.round(b.r), Math.round(b.g), Math.round(b.b), Math.round(b.a)]);
  } else {
    palette = medianCut(buckets, colorBudget);
    palette = refine(buckets, palette, 2);
  }
  if (transparent > 0) palette.unshift([0, 0, 0, 0]);
  // tRNS only has to list entries up to the last translucent one, so put those first.
  palette.sort((x, y) => (x[3] === 255 ? 1 : 0) - (y[3] === 255 ? 1 : 0));
  return palette;
}

const CHANNELS = ["r", "g", "b", "a"] as const;
type Channel = (typeof CHANNELS)[number];

interface Box {
  items: Bucket[];
  weight: number;
  channel: Channel;
  score: number;
}

function makeBox(items: Bucket[]): Box {
  let weight = 0;
  let channel: Channel = "r";
  let range = -1;
  for (const ch of CHANNELS) {
    let min = 255;
    let max = 0;
    for (const b of items) {
      if (b[ch] < min) min = b[ch];
      if (b[ch] > max) max = b[ch];
    }
    if (max - min > range) {
      range = max - min;
      channel = ch;
    }
  }
  for (const b of items) weight += b.count;
  return { items, weight, channel, score: items.length < 2 ? 0 : range * Math.sqrt(weight) };
}

function medianCut(buckets: Bucket[], target: number): Color[] {
  const boxes: Box[] = [makeBox(buckets)];
  while (boxes.length < target) {
    let pick = -1;
    let pickScore = 0;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].score > pickScore) {
        pickScore = boxes[i].score;
        pick = i;
      }
    }
    if (pick === -1) break;
    const { items, channel, weight } = boxes[pick];
    items.sort((x, y) => x[channel] - y[channel]);
    const half = weight / 2;
    let acc = 0;
    let cut = 1;
    for (; cut < items.length - 1; cut++) {
      acc += items[cut - 1].count;
      if (acc >= half) break;
    }
    boxes.splice(pick, 1, makeBox(items.slice(0, cut)), makeBox(items.slice(cut)));
  }
  return boxes.map((box) => average(box.items));
}

function average(box: Bucket[]): Color {
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 0;
  let n = 0;
  for (const x of box) {
    r += x.r * x.count;
    g += x.g * x.count;
    b += x.b * x.count;
    a += x.a * x.count;
    n += x.count;
  }
  return [Math.round(r / n), Math.round(g / n), Math.round(b / n), Math.round(a / n)];
}

function nearest(palette: Color[], r: number, g: number, b: number, a: number): number {
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < palette.length; i++) {
    const p = palette[i];
    const dr = p[0] - r;
    const dg = p[1] - g;
    const db = p[2] - b;
    const da = p[3] - a;
    // Luma-weighted distance: the eye is most sensitive to green, least to blue.
    const dist = dr * dr * 3 + dg * dg * 4 + db * db * 2 + da * da * 3;
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  }
  return best;
}

function refine(buckets: Bucket[], palette: Color[], iterations: number): Color[] {
  let current = palette;
  for (let it = 0; it < iterations; it++) {
    const acc = current.map(() => [0, 0, 0, 0, 0]);
    for (const b of buckets) {
      const i = nearest(current, b.r, b.g, b.b, b.a);
      const s = acc[i];
      s[0] += b.r * b.count;
      s[1] += b.g * b.count;
      s[2] += b.b * b.count;
      s[3] += b.a * b.count;
      s[4] += b.count;
    }
    current = acc.map((s, i) =>
      s[4] === 0
        ? current[i]
        : [Math.round(s[0] / s[4]), Math.round(s[1] / s[4]), Math.round(s[2] / s[4]), Math.round(s[3] / s[4])],
    );
  }
  return current;
}

/** Floyd–Steinberg at reduced strength: hides banding without much noise (which would cost bytes). */
function mapPixels(data: Uint8ClampedArray, width: number, height: number, palette: Color[]): Uint8Array {
  const out = new Uint8Array(width * height);
  const cache = new Int16Array(1 << 20).fill(-1);
  const strength = 0.75;
  let errCur = new Float32Array((width + 2) * 3);
  let errNext = new Float32Array((width + 2) * 3);
  const transparentIndex = palette.findIndex((p) => p[3] === 0);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const a = data[i + 3];
      if (a < 8 && transparentIndex !== -1) {
        out[y * width + x] = transparentIndex;
        continue;
      }
      const e = (x + 1) * 3;
      const r = clamp(data[i] + errCur[e]);
      const g = clamp(data[i + 1] + errCur[e + 1]);
      const b = clamp(data[i + 2] + errCur[e + 2]);
      const k = keyOf(r, g, b, a);
      let idx = cache[k];
      if (idx === -1) {
        idx = nearest(palette, r, g, b, a);
        cache[k] = idx;
      }
      out[y * width + x] = idx;
      const p = palette[idx];
      const er = (r - p[0]) * strength;
      const eg = (g - p[1]) * strength;
      const eb = (b - p[2]) * strength;
      errCur[e + 3] += (er * 7) / 16;
      errCur[e + 4] += (eg * 7) / 16;
      errCur[e + 5] += (eb * 7) / 16;
      errNext[e - 3] += (er * 3) / 16;
      errNext[e - 2] += (eg * 3) / 16;
      errNext[e - 1] += (eb * 3) / 16;
      errNext[e] += (er * 5) / 16;
      errNext[e + 1] += (eg * 5) / 16;
      errNext[e + 2] += (eb * 5) / 16;
      errNext[e + 3] += er / 16;
      errNext[e + 4] += eg / 16;
      errNext[e + 5] += eb / 16;
    }
    [errCur, errNext] = [errNext, errCur];
    errNext.fill(0);
  }
  return out;
}

const clamp = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : Math.round(v));

// ---------------------------------------------------------------------------
// PNG writer

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, payload: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + payload.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, payload.length);
  for (let i = 0; i < 4; i++) out[4 + i] = type.charCodeAt(i);
  out.set(payload, 8);
  view.setUint32(8 + payload.length, crc32(out.subarray(4, 8 + payload.length)));
  return out;
}

async function encodeIndexedPng(width: number, height: number, palette: Color[], indices: Uint8Array): Promise<Blob> {
  const ihdr = new Uint8Array(13);
  const view = new DataView(ihdr.buffer);
  view.setUint32(0, width);
  view.setUint32(4, height);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 3; // colour type: indexed
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const plte = new Uint8Array(palette.length * 3);
  palette.forEach((p, i) => plte.set([p[0], p[1], p[2]], i * 3));

  const lastTranslucent = palette.reduce((last, p, i) => (p[3] < 255 ? i : last), -1);
  const trns = new Uint8Array(lastTranslucent + 1);
  for (let i = 0; i <= lastTranslucent; i++) trns[i] = palette[i][3];

  // Filter type 0 per row: prediction rarely helps palette indices and costs time.
  const raw = new Uint8Array((width + 1) * height);
  for (let y = 0; y < height; y++) raw.set(indices.subarray(y * width, (y + 1) * width), y * (width + 1) + 1);
  const idat = await deflate(raw);

  const parts: Uint8Array[] = [
    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("PLTE", plte),
  ];
  if (trns.length > 0) parts.push(chunk("tRNS", trns));
  parts.push(chunk("IDAT", idat), chunk("IEND", new Uint8Array(0)));
  return new Blob(parts as BlobPart[], { type: "image/png" });
}
