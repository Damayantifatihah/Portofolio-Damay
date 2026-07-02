import { useEffect, useState } from "react";

const introStyles = `
  @keyframes spineGrow {
    0% { transform: scaleY(0); opacity: 0; }
    60% { transform: scaleY(1.08); opacity: 1; }
    100% { transform: scaleY(1); opacity: 1; }
  }

  @keyframes armGrow {
    0% { transform: scaleX(0); opacity: 0; }
    60% { transform: scaleX(1.1); opacity: 1; }
    100% { transform: scaleX(1); opacity: 1; }
  }

  @keyframes bowlGrow {
    0% { transform: scale(0); opacity: 0; }
    55% { transform: scale(1.12); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes badgeIn {
    0% { transform: scale(0) rotate(-15deg); opacity: 0; }
    60% { transform: scale(1.12) rotate(4deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes ringPulse {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  @keyframes blobFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(20px, -15px) scale(1.15); }
  }

  @keyframes textReveal {
    0% {
      opacity: 0;
      transform: translateY(14px);
      letter-spacing: 6px;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      letter-spacing: 1px;
    }
  }

  @keyframes petalFloat {
    0% {
      transform: translateY(110vh) rotate(0deg);
      opacity: 0;
    }

    10% {
      opacity: .9;
    }

    90% {
      opacity: .7;
    }

    100% {
      transform: translateY(-10vh) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes introExit {
    0% {
      transform: translateY(0);
      opacity:1;
    }

    100% {
      transform: translateY(-100%);
      opacity:1;
    }
  }

  .intro-gradient-text {
    background: linear-gradient(90deg, #4A7BAC, #F38081, #EFD780);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes handWave {
    0%, 100% { transform: rotate(0deg); }
    15% { transform: rotate(18deg); }
    30% { transform: rotate(-10deg); }
    45% { transform: rotate(18deg); }
    60% { transform: rotate(-6deg); }
    75% { transform: rotate(10deg); }
  }

  .wave-emoji {
    display: inline-block;
    transform-origin: 70% 70%;
    animation: handWave 1.8s ease-in-out 1.4s infinite;
  }
`;

interface IntroAnimationProps {
  onFinish: () => void;
}

const petals = [
  { left: "6%", size: 12, delay: "0s", duration: "5.5s", shape: "circle" },
  { left: "18%", size: 8, delay: "0.8s", duration: "4.8s", shape: "petal" },
  { left: "32%", size: 14, delay: "0.3s", duration: "6.2s", shape: "circle" },
  { left: "46%", size: 9, delay: "1.4s", duration: "5s", shape: "petal" },
  { left: "60%", size: 11, delay: "0.6s", duration: "5.8s", shape: "circle" },
  { left: "74%", size: 8, delay: "1s", duration: "4.5s", shape: "petal" },
  { left: "86%", size: 13, delay: "0.2s", duration: "6s", shape: "circle" },
  { left: "94%", size: 7, delay: "1.7s", duration: "5.2s", shape: "petal" },
];

// Warna diselaraskan dengan navbar: biru #4A7BAC, coral #F38081, salmon #F79977, lemon #EFD780
const petalColors = [
  "#4A7BAC", // Navbar Blue
  "#EFD780", // Meyer Lemon
  "#F38081", // Coral Reef
  "#C8CE72", // Squeeze of Lime
  "#4A7BAC", // Navbar Blue
  "#F38081", // Coral Reef
  "#EFD780", // Meyer Lemon
  "#F79977", // Salmon Pink
];

function IntroAnimation({ onFinish }: IntroAnimationProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2100);
    const removeTimer = setTimeout(() => onFinish(), 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(160deg, #FFFDF6 0%, #FBF3E8 40%, #F9E7EC 70%, #EAF4FC 100%)",
        animation: exiting
          ? "introExit 0.7s cubic-bezier(0.6,0,0.4,1) forwards"
          : undefined,
        overflow: "hidden",
      }}
    >
      <style>{introStyles}</style>

      {/* Glow blobs di background */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "8%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "#F38081",
          opacity: 0.28,
          filter: "blur(60px)",
          animation: "blobFloat 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "#4A7BAC",
          opacity: 0.25,
          filter: "blur(70px)",
          animation: "blobFloat 7s ease-in-out infinite 1s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "#EFD780",
          opacity: 0.25,
          filter: "blur(55px)",
          animation: "blobFloat 5.5s ease-in-out infinite 0.5s",
        }}
      />

      {petals.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: 0,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.shape === "circle" ? "50%" : "60% 0 60% 0",
            background: petalColors[i],
            boxShadow: `0 0 14px ${petalColors[i]}88`,
            animation: `petalFloat ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "96px",
          height: "96px",
          animation: "badgeIn 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {/* Pulsing ring di belakang monogram, warna navbar */}
        <div
          style={{
            position: "absolute",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "2px solid #4A7BAC",
            animation: "ringPulse 2.2s ease-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "2px solid #F38081",
            animation: "ringPulse 2.2s ease-out infinite 1.1s",
          }}
        />

        {/* Badge bulat solid di belakang huruf */}
        <div
          style={{
            position: "absolute",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFFDF6, #FBF3E8)",
            boxShadow:
              "0 6px 20px rgba(74,123,172,.25), 0 2px 8px rgba(243,128,129,.25)",
          }}
        />

        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          style={{ position: "relative", filter: "drop-shadow(0 2px 6px rgba(74,123,172,.3))" }}
        >
          <defs>
            <linearGradient id="dfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A7BAC" />
              <stop offset="100%" stopColor="#F38081" />
            </linearGradient>
          </defs>

          {/* Garis tengah (spine) yang dipakai bersama oleh D dan F */}
          <rect
            x="25"
            y="10"
            width="7"
            height="52"
            rx="3.5"
            fill="url(#dfGrad)"
            style={{
              transformOrigin: "28.5px 36px",
              animation: "spineGrow 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both",
            }}
          />

          {/* Lengan atas F, menempel di spine */}
          <rect
            x="25"
            y="10"
            width="27"
            height="7"
            rx="3.2"
            fill="url(#dfGrad)"
            style={{
              transformOrigin: "25px 13.5px",
              animation: "armGrow 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.35s both",
            }}
          />

          {/* Lengan tengah F, menempel di spine */}
          <rect
            x="25"
            y="27"
            width="21"
            height="7"
            rx="3.2"
            fill="url(#dfGrad)"
            style={{
              transformOrigin: "25px 30.5px",
              animation: "armGrow 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.5s both",
            }}
          />

          {/* Perut D, menempel di spine bagian bawah */}
          <path
            d="M32,35 C55,35 58,44 58,48 C58,52 55,61 32,61 Z"
            fill="url(#dfGrad)"
            style={{
              transformOrigin: "32px 48px",
              animation: "bowlGrow 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.6s both",
            }}
          />
        </svg>
      </div>

      <p
        style={{
          marginTop: "18px",
          fontFamily: "Georgia, serif",
          fontSize: "1.8rem",
          fontWeight: 400,
          color: "#374151",
          opacity: 0,
          animation: "textReveal 0.8s ease 0.6s forwards",
          textShadow: "0 2px 8px rgba(255,255,255,.4)",
        }}
      >
        Welcome,{" "}
        <span className="intro-gradient-text" style={{ fontWeight: 600 }}>
          glad you're here
        </span>{" "}
        <span
          className="wave-emoji"
          style={{
            color: "#F38081",
            fontStyle: "italic",
          }}
        >
          👋
        </span>
      </p>
    </div>
  );
}

export default IntroAnimation;