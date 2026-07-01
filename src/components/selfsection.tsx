import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const blobKeyframes = `
  @keyframes blobMove {
    0%   { border-radius: 58% 42% 65% 35% / 55% 48% 52% 45%; }
    25%  { border-radius: 45% 55% 50% 50% / 60% 40% 60% 40%; }
    50%  { border-radius: 65% 35% 40% 60% / 45% 55% 45% 55%; }
    75%  { border-radius: 50% 50% 55% 45% / 50% 60% 40% 50%; }
    100% { border-radius: 58% 42% 65% 35% / 55% 48% 52% 45%; }
  }
  @keyframes floatUp {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes glowPulse {
    0%, 100% { opacity: 0.35; transform: scale(1); }
    50%      { opacity: 0.55; transform: scale(1.08); }
  }
`;

const SelfSection: React.FC = () => {
  const [dlHovered, setDlHovered] = useState(false);

  return (
    <section id="About"
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 80px 60px 80px",
        backgroundColor: "#FFFBF3",
        gap: "40px",
      }}
    >
      <style>{blobKeyframes}</style>

      {/* TEXT */}
      <div style={{ maxWidth: "460px" }}>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: "11px",
            color: "#4A7BAC",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Software Engineer Student
        </p>

        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "3rem",
            fontWeight: 400,
            color: "#5C3D3D",
            lineHeight: 1.2,
            fontFamily: "Georgia, serif",
          }}
        >
          Hai, I'm{" "}
          <span style={{ color: "#F38081", fontStyle: "italic" }}>
            Damayanti
          </span>
        </h1>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#EFD780",
            borderRadius: "2px",
            margin: "16px 0 18px",
          }}
        />

        <p
          style={{
            margin: "0 0 28px",
            fontSize: "14px",
            color: "#8A7C74",
            lineHeight: 1.85,
          }}
        >
          Building digital experiences that bridge the gap between technical
          complexity and human intuition. Focused on crafting clean, scalable
          frontend solutions with a touch of soft minimalism.
        </p>

        <button
          onMouseEnter={() => setDlHovered(true)}
          onMouseLeave={() => setDlHovered(false)}
          style={{
            background: dlHovered
              ? "linear-gradient(135deg, #F38081, #F79977)"
              : "#FFFBF3",
            color: dlHovered ? "#FFFFFF" : "#F38081",
            border: `1.5px solid ${dlHovered ? "transparent" : "#F3B8B8"}`,
            padding: "12px 24px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            letterSpacing: "0.3px",
            boxShadow: dlHovered ? "0 6px 18px rgba(243,128,129,0.35)" : "none",
            transition: "background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s",
          }}
        >
          <FaDownload style={{ fontSize: "13px" }} />
          Download CV
        </button>
      </div>

      {/* FOTO / BLOB */}
      <div
        style={{
          position: "relative",
          width: "380px",
          height: "420px",
          flexShrink: 0,
        }}
      >
        {/* Glow belakang blob */}
        <div
          style={{
            position: "absolute",
            inset: "-20px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #EFD780 0%, transparent 70%)",
            animation: "glowPulse 5s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            animation: "floatUp 6s ease-in-out infinite",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, #BDD8F1 0%, #F38081 100%)",
              animation: "blobMove 8s ease-in-out infinite",
              boxShadow: "0 20px 50px rgba(243,128,129,0.25)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SelfSection;