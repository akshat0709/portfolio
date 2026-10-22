import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFD13B",
          border: "8px solid #1A1A1A",
          borderRadius: "36px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "136px",
            height: "136px",
            backgroundColor: "#FFF6E5",
            border: "5px solid #1A1A1A",
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: "64px",
            fontWeight: "900",
            color: "#1A1A1A",
          }}
        >
          AG
        </div>
      </div>
    ),
    { ...size }
  );
}
