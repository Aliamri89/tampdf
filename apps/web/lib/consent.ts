"use client";

import { useSyncExternalStore } from "react";
import { ADSENSE_CLIENT } from "@/lib/ads";
import {
  CONSENT_REQUIRED_COUNTRIES_SOURCE,
  CONSENT_REQUIRED_ZONES_SOURCE,
  CONSENT_STORAGE_KEY,
} from "@/lib/consent-region";

/**
 * Consent for analytics/tracking (Google Analytics 4 and Microsoft Clarity)
 * and the Google Consent Mode signals, in one place.
 *
 * Who decides depends on whether Google's own consent message (AdSense ▸
 * Privacy & messaging, a Google-certified IAB TCF CMP) is available:
 *
 *  - "regulated": Google's CMP is present and says GDPR applies to this
 *    visitor (Google decides the region). The CMP is the ONLY consent UI: our
 *    banner never shows, analytics run only if Google's consent-mode data says
 *    analytics_storage is granted, and the footer link reopens Google's message.
 *    Ad signals (ad_storage, ad_user_data, ad_personalization) belong to the CMP.
 *  - "open": the CMP is present and GDPR does not apply. Analytics run unless
 *    the visitor switched them off through the footer "Cookie settings".
 *  - "none": no CMP (AdSense not set up, blocked, or it did not answer in
 *    time). Fallback: region is guessed from the time zone and the browser's
 *    language regions, and where consent is required our own analytics-only
 *    banner is used.
 *  - "pending": waiting for the CMP; nothing runs yet.
 *
 * Our own choice lives in this browser's localStorage only.
 */
const STORAGE_KEY = CONSENT_STORAGE_KEY;
type Stored = "granted" | "denied" | null;

/** How long to wait for Google's CMP before using the fallback. */
const CMP_TIMEOUT_MS = 3000;

export type CmpState = "pending" | "regulated" | "open" | "none";

/** googlefc.ConsentModePurposeStatusEnum.GRANTED */
const PURPOSE_GRANTED = 1;

const REQUIRED_ZONES = new RegExp(CONSENT_REQUIRED_ZONES_SOURCE);
const REQUIRED_COUNTRIES = new RegExp(CONSENT_REQUIRED_COUNTRIES_SOURCE);

/** Region subtags of the browser's languages, upper-cased ("de-DE" → "DE"). */
function languageRegions(): string[] {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  const regions: string[] = [];
  for (const tag of tags) {
    for (const part of String(tag).split(/[-_]/).slice(1)) {
      if (/^[A-Za-z]{2}$/.test(part)) regions.push(part.toUpperCase());
    }
  }
  return regions;
}

/** Fallback only (no CMP): is consent required here? Errs on the side of "yes". */
export function consentRequired(): boolean {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!zone || zone === "UTC" || zone === "Etc/UTC" || REQUIRED_ZONES.test(zone)) return true;
    return languageRegions().some((region) => REQUIRED_COUNTRIES.test(region));
  } catch {
    return true;
  }
}

function readStored(): Stored {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

// ---- Google CMP (Funding Choices) bridge --------------------------------
interface GoogleFc {
  callbackQueue?: unknown[];
  showRevocationMessage?: () => void;
  getGoogleConsentModeValues?: () => { analyticsStoragePurposeConsentStatus?: number } | undefined;
}
interface ConsentWindow {
  googlefc?: GoogleFc;
  __tcfapi?: (
    command: string,
    version: number,
    callback: (data: { gdprApplies?: boolean; cmpStatus?: string } | null, success: boolean) => void,
  ) => void;
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  __tampdfGaIds?: string[];
  [key: `ga-disable-${string}`]: boolean;
}
const w = (): ConsentWindow => window as unknown as ConsentWindow;

let cmp: CmpState = ADSENSE_CLIENT ? "pending" : "none";
/** Google's consent-mode value for analytics_storage (0 unknown … 4 not configured). */
let googleAnalytics = 0;
let started = false;
let listeningTcf = false;

function readModeValues() {
  const status = w().googlefc?.getGoogleConsentModeValues?.()?.analyticsStoragePurposeConsentStatus ?? 0;
  if (status !== googleAnalytics) {
    googleAnalytics = status;
    return true;
  }
  return false;
}

function listenTcf() {
  const api = w().__tcfapi;
  if (listeningTcf || typeof api !== "function") return;
  listeningTcf = true;
  // Fires now and on every later change the visitor makes in Google's message.
  api("addEventListener", 0, (data, success) => {
    // Before the CMP has loaded, a stub answers gdprApplies=false; only trust a loaded CMP.
    if (!success || !data || data.cmpStatus !== "loaded") return;
    readModeValues();
    cmp = data.gdprApplies ? "regulated" : "open";
    emit();
    // Google may publish the new consent-mode values just after the TCF event.
    window.setTimeout(() => {
      if (readModeValues()) emit();
    }, 500);
  });
}

function startCmpWatch() {
  if (started || typeof window === "undefined") return;
  started = true;
  if (cmp !== "pending") return;
  // The queue is created before Google's script by ConsentModeDefaults.
  const fc = (w().googlefc = w().googlefc ?? {});
  fc.callbackQueue = fc.callbackQueue ?? [];
  fc.callbackQueue.push({
    CONSENT_API_READY: listenTcf,
    CONSENT_MODE_DATA_READY: () => {
      if (readModeValues()) emit();
    },
  });
  listenTcf(); // the CMP may already be there
  window.setTimeout(() => {
    if (cmp === "pending") {
      cmp = "none";
      emit();
    }
  }, CMP_TIMEOUT_MS);
}

// ---- tiny external store (so every component re-renders on a change) ----
let settingsOpen = false;
const listeners = new Set<() => void>();
let version = 0;

function emit() {
  version += 1;
  applySignals();
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  startCmpWatch();
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export interface ConsentView {
  /** False until the browser has hydrated (server render never loads trackers). */
  ready: boolean;
  /** Who is handling consent right now (see the file comment). */
  cmp: CmpState;
  /** Analytics scripts may run. */
  analyticsAllowed: boolean;
  /** Ad requests may be made (the consent state has been settled). */
  adsReady: boolean;
  /** Our own banner should be on screen (never while Google's message is in charge). */
  bannerVisible: boolean;
  /** The visitor has made an explicit choice in our banner before. */
  decided: boolean;
  /** The banner was opened on purpose (footer "Cookie settings"), so it can be closed again. */
  fromSettings: boolean;
}

const SERVER_VIEW: ConsentView = {
  ready: false,
  cmp: "pending",
  analyticsAllowed: false,
  adsReady: false,
  bannerVisible: false,
  decided: false,
  fromSettings: false,
};

let cachedKey = "";
let cachedView: ConsentView = SERVER_VIEW;

function getSnapshot(): ConsentView {
  const stored = readStored();
  const required = cmp === "none" ? consentRequired() : false;
  const key = `${stored}|${required}|${cmp}|${googleAnalytics}|${settingsOpen}|${version}`;
  if (key !== cachedKey) {
    cachedKey = key;
    let analyticsAllowed: boolean;
    switch (cmp) {
      case "pending":
        analyticsAllowed = false;
        break;
      case "regulated":
        // Only what the visitor granted in Google's message counts.
        analyticsAllowed = googleAnalytics === PURPOSE_GRANTED;
        break;
      case "open":
        analyticsAllowed = stored !== "denied";
        break;
      default:
        analyticsAllowed = stored === "granted" || (stored === null && !required);
    }
    cachedView = {
      ready: true,
      cmp,
      analyticsAllowed,
      adsReady: cmp !== "pending",
      bannerVisible: cmp !== "pending" && cmp !== "regulated" && (settingsOpen || (cmp === "none" && required && stored === null)),
      decided: stored !== null,
      fromSettings: settingsOpen,
    };
  }
  return cachedView;
}

export function useConsent(): ConsentView {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER_VIEW);
}

// ---- Google Consent Mode + tracker control ------------------------------
let lastSent = "";
let lastAllowed: boolean | null = null;

function sendConsentUpdate(signals: Record<string, string>) {
  w().gtag?.("consent", "update", signals);
}

/** Keep Google Consent Mode and the tracker libraries in step with the current decision. */
function applySignals() {
  if (typeof window === "undefined" || cmp === "pending") return;
  const view = getSnapshot();
  const signals: Record<string, string> = {
    analytics_storage: view.analyticsAllowed ? "granted" : "denied",
  };
  // Ad signals: ours to grant only where nobody needs to be asked. Where Google's
  // CMP regulates (or our fallback requires consent) they stay as the defaults
  // and Google's message is the only thing that may change them.
  if (cmp === "open" || (cmp === "none" && !consentRequired())) {
    signals.ad_storage = "granted";
    signals.ad_user_data = "granted";
    signals.ad_personalization = "granted";
  }
  const key = JSON.stringify(signals);
  if (key !== lastSent) {
    lastSent = key;
    sendConsentUpdate(signals);
  }
  // GA's documented opt-out switch, so an already loaded tag stops sending.
  for (const id of w().__tampdfGaIds ?? []) w()[`ga-disable-${id}`] = !view.analyticsAllowed;
  if (lastAllowed === true && !view.analyticsAllowed && cmp === "regulated") stopTrackers();
  lastAllowed = view.analyticsAllowed;
}

/** Cookies set by the analytics providers, removed when consent is withdrawn. */
const TRACKING_COOKIE = /^(_ga|_gid|_gat|_gcl_|_clck|_clsk|CLID|ANONCHK|SM|MR|SRM_B)/;

function clearTrackingCookies() {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = new Set<string>([host, `.${host}`]);
  for (let i = 1; i < parts.length - 1; i++) domains.add(`.${parts.slice(i).join(".")}`);
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!TRACKING_COOKIE.test(name)) return;
    const expire = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expire;
    domains.forEach((domain) => {
      document.cookie = `${expire}; domain=${domain}`;
    });
  });
}

/**
 * Consent was withdrawn in Google's message while trackers are loaded. No page
 * reload here (it would close the message the visitor is using): tell Clarity,
 * remove the cookies; GA is switched off by its opt-out flag in applySignals.
 */
function stopTrackers() {
  w().clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
  clearTrackingCookies();
}

// ---- actions -------------------------------------------------------------
/** Our own banner's choice (fallback / non-regulated visitors). */
export function setConsent(granted: boolean) {
  if (cmp === "regulated") return; // Google's message is in charge
  const wasRunning = getSnapshot().analyticsAllowed;
  try {
    window.localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
  } catch {
    // Storage blocked: the choice only lasts for this page view.
  }
  settingsOpen = false;
  if (!granted && wasRunning) {
    // The scripts are already running in this page: tell Google, remove their
    // cookies and reload so they are not loaded again.
    sendConsentUpdate({ analytics_storage: "denied" });
    clearTrackingCookies();
    window.location.reload();
    return;
  }
  emit();
}

/** Footer "Cookie settings": reopen Google's message where it is in charge, else ours. */
export function openConsentSettings() {
  if (cmp === "regulated") {
    w().googlefc?.showRevocationMessage?.();
    return;
  }
  settingsOpen = true;
  emit();
}

export function closeConsentSettings() {
  settingsOpen = false;
  emit();
}
