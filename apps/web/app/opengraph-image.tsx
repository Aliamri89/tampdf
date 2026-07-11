import { ImageResponse } from "next/og";
import { siteConfig } from "@fileati/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f3f1fe 0%, #ffffff 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "linear-gradient(135deg, #6C5CE7, #FF8A5B)",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 700, color: "white" }}>F</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#17152b" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, color: "#6b6580", marginTop: 16 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
