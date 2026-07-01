import { useEffect, useState } from "react";

const introStyles = `
  @keyframes sparkleIn {
    0% { transform: scale(0) rotate(-45deg); opacity: 0; }
    60% { transform: scale(1.15) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes sparkleSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
    background: linear-gradient(90deg, #F38081, #F79977, #EFD780);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
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

const petalColors = [
  "#F38081", // Coral Reef
  "#EFD780", // Meyer Lemon
  "#BDD8F1", // Soft Baby Blue
  "#C8CE72", // Squeeze of Lime
  "#F79977", // Salmon Pink
  "#F38081", // Coral Reef
  "#EFD780", // Meyer Lemon
  "#C8CE72", // Squeeze of Lime
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
          background: "#BDD8F1",
          opacity: 0.3,
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
          animation:
            "sparkleIn 0.9s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {/* Pulsing ring di belakang sparkle */}
        <div
          style={{
            position: "absolute",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "2px solid #F79977",
            animation: "ringPulse 2.2s ease-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "2px solid #EFD780",
            animation: "ringPulse 2.2s ease-out infinite 1.1s",
          }}
        />

        <svg
          width="56"
          height="56"
          viewBox="0 0 18 18"
          fill="none"
          style={{
            animation: "sparkleSpin 3.5s linear infinite",
            filter: "drop-shadow(0 0 10px rgba(243,128,129,.7))",
          }}
        >
          <defs>
            <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFD780" />
              <stop offset="100%" stopColor="#F38081" />
            </linearGradient>
          </defs>
          <path
            d="M9 1 L10.8 6.6 L17 6.6 L12 10.2 L13.8 15.8 L9 12.2 L4.2 15.8 L6 10.2 L1 6.6 L7.2 6.6 Z"
            fill="url(#sparkleGrad)"
            stroke="url(#sparkleGrad)"
            strokeWidth="0.5"
            strokeLinejoin="round"
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
        Hai,{" "}
        <span className="intro-gradient-text" style={{ fontWeight: 600 }}>
          selamat datang
        </span>{" "}
        <span
          style={{
            color: "#F38081",
            fontStyle: "italic",
          }}
        >
          🌸
        </span>
      </p>
    </div>
  );
}

export default IntroAnimation;