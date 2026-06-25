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
        backgroundColor: "#FFF8F6",
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
            color: "#D4A0A8",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontWeight: 500,
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
          <span style={{ color: "#D97B8A", fontStyle: "italic" }}>
            Damayanti
          </span>
        </h1>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#F2C4C8",
            borderRadius: "2px",
            margin: "16px 0 18px",
          }}
        />

        <p
          style={{
            margin: "0 0 28px",
            fontSize: "14px",
            color: "#B08880",
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
            background: dlHovered ? "#D97B8A" : "#FFF8F6",
            color: dlHovered ? "#FFF8F6" : "#C07878",
            border: `1.5px solid ${dlHovered ? "#D97B8A" : "#E8C0C0"}`,
            padding: "12px 24px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            letterSpacing: "0.3px",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
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
          animation: "floatUp 6s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#F9D8DF",
            animation: "blobMove 8s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
};

export default SelfSection;