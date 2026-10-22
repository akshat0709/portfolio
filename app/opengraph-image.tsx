import { ImageResponse } from "next/og";

export const alt = "Akshat Gupta | Full-Stack Developer & CS Undergrad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF6E5",
          padding: "48px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Main Card with 4px ink border and hard shadow */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            border: "4px solid #1A1A1A",
            boxShadow: "16px 16px 0px #1A1A1A",
            padding: "56px 64px",
            position: "relative",
          }}
        >
          {/* Top Status Tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FFD13B",
                color: "#1A1A1A",
                border: "3px solid #1A1A1A",
                padding: "8px 18px",
                fontSize: "18px",
                fontWeight: "800",
                fontFamily: "monospace",
                boxShadow: "4px 4px 0px #1A1A1A",
                transform: "rotate(-1deg)",
              }}
            >
              BMSCE &apos;28 · BENGALURU
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#179A94",
                color: "#FFFFFF",
                border: "3px solid #1A1A1A",
                padding: "8px 18px",
                fontSize: "18px",
                fontWeight: "800",
                fontFamily: "monospace",
                boxShadow: "4px 4px 0px #1A1A1A",
                transform: "rotate(1deg)",
              }}
            >
              CGPA 8.97
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#FF4336",
                color: "#FFFFFF",
                border: "3px solid #1A1A1A",
                padding: "8px 18px",
                fontSize: "18px",
                fontWeight: "800",
                fontFamily: "monospace",
                boxShadow: "4px 4px 0px #1A1A1A",
                marginLeft: "auto",
              }}
            >
              PORTFOLIO
            </div>
          </div>

          {/* Central Title & Tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "76px",
                fontWeight: "900",
                letterSpacing: "-2px",
                color: "#1A1A1A",
                lineHeight: "1",
              }}
            >
              Akshat Gupta
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: "700",
                color: "#1A1A1A",
                lineHeight: "1.3",
              }}
            >
              <span>Full-stack developer.</span>
              <span
                style={{
                  backgroundColor: "#FFD13B",
                  border: "2px solid #1A1A1A",
                  padding: "2px 10px",
                  marginLeft: "10px",
                  boxShadow: "3px 3px 0px #1A1A1A",
                }}
              >
                Builds real systems.
              </span>
            </div>
          </div>

          {/* Bottom Footer Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "3px solid #1A1A1A",
              paddingTop: "24px",
              fontFamily: "monospace",
              fontSize: "18px",
              fontWeight: "700",
              color: "#1A1A1A",
            }}
          >
            <div>ORANGE TAXI PWA · RESCUE ROBOT · RAILWAY ML</div>
            <div style={{ color: "#FF4336" }}>akshat070906@gmail.com</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
