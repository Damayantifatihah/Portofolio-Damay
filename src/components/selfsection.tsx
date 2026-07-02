import { useState } from "react";
import { FaDownload } from "react-icons/fa";
// Ganti path di bawah ini sesuai lokasi & nama file foto kamu di folder assets
import profilePhoto from "../assets/damaycantik.jpeg";

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

  .self-section {
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 80px;
    background-color: #FFFBF3;
    gap: 40px;
    box-sizing: border-box;
  }

  .self-text-wrap {
    max-width: 460px;
  }

  .self-photo-wrap {
    position: relative;
    width: 380px;
    height: 420px;
    flex-shrink: 0;
  }

  .self-photo-frame {
    position: relative;
    width: 100%;
    height: 100%;
    animation: floatUp 6s ease-in-out infinite;
    z-index: 1;
  }

  .self-photo-rim {
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg, #BDD8F1 0%, #F38081 100%);
    animation: blobMove 8s ease-in-out infinite;
    box-shadow: 0 20px 50px rgba(243, 128, 129, 0.25);
    padding: 9px;
    box-sizing: border-box;
  }

  .self-photo-mask {
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: blobMove 8s ease-in-out infinite;
    background: #FFFBF3;
  }

  .self-photo-mask img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1024px) {
    .self-section {
      padding: 56px 40px;
      gap: 32px;
    }

    .self-photo-wrap {
      width: 320px;
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    .self-section {
      flex-direction: column-reverse;
      min-height: auto;
      padding: 48px 24px 56px;
      text-align: center;
      gap: 36px;
    }

    .self-text-wrap {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .self-text-divider {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .self-photo-wrap {
      width: 260px;
      height: 300px;
    }
  }

  @media (max-width: 400px) {
    .self-section {
      padding: 40px 16px 48px;
    }

    .self-photo-wrap {
      width: 220px;
      height: 250px;
    }
  }
`;

const SelfSection: React.FC = () => {
  const [dlHovered, setDlHovered] = useState(false);

  return (
    <section id="About" className="self-section">
      <style>{blobKeyframes}</style>

      {/* TEXT */}
      <div className="self-text-wrap">
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
          className="self-text-divider"
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
      <div className="self-photo-wrap">
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

        <div className="self-photo-frame">
          {/* Bingkai gradient tipis di sekeliling foto */}
          <div className="self-photo-rim">
            {/* Foto asli, dipotong mengikuti bentuk blob */}
            <div className="self-photo-mask">
              <img src={profilePhoto} alt="Damayanti" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfSection;