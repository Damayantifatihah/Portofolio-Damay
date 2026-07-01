import React from "react";
import cert1 from "../assets/KLS10.jpeg";
import cert2 from "../assets/KLS11.jpeg";
import cert3 from "../assets/PT.jpeg";
import cert4 from "../assets/dicoding.jpeg";

interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Simple E-commerce Website Competency Test",
    date: "2025",
    description:
      "Certificate of completion for a simple e-commerce website competency test, covering product catalog structure through the basic checkout flow.",
    image: cert1,
  },
  {
    id: 2,
    title: "Multi-Platform Application Development Competency Test",
    date: "2025",
    description:
      "Competency test certificate for multi-platform application development, assessing the ability to design interfaces and application logic across devices.",
    image: cert2,
  },
  {
    id: 3,
    title: "Industrial Visit to PT. Inti Persero and Institut Teknologi Bandung",
    date: "2024",
    description:
      "Documentation of an industrial visit as part of workplace exposure and technology research in the telecommunications field.",
    image: cert3,
  },
  {
    id: 4,
    title: "Certificate in Web Programming Fundamentals",
    date: "2024",
    description:
      "Certificate in Web Programming Fundamentals.",
    image: cert4,
  },
];

const Achievements: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<Achievement | null>(null);

  return (
    <section
      id="Archievements"
      style={{ padding: "100px 8%", backgroundColor: "#FFF8F6" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .ach-grid {
          column-count: 3;
          column-gap: 26px;
          max-width: 980px;
          margin: 0 auto;
        }
        @media (max-width: 760px) {
          .ach-grid { column-count: 2; }
        }
        @media (max-width: 500px) {
          .ach-grid { column-count: 1; }
        }
        .ach-card {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
          margin-bottom: 26px;
          background: #FFFBF3;
          border-radius: 20px;
          border: 1px solid #F6E4DE;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 14px rgba(243,128,129,0.08);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ach-card:hover {
          transform: translateY(-5px);
          border-color: #F3B8B8;
          box-shadow: 0 12px 28px rgba(243,128,129,0.18);
        }
        .ach-card:hover .ach-overlay {
          opacity: 1;
        }
        .ach-image-wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(160deg, #FDEAEA 0%, #FBF3DC 100%);
          line-height: 0;
        }
        .ach-image-wrap img {
          width: 100%;
          height: auto;
          display: block;
        }
        .ach-overlay {
          position: absolute;
          inset: 0;
          background: rgba(92, 61, 61, 0.45);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
        }
        .ach-card-body {
          padding: 18px 20px 20px;
          text-align: center;
        }
        .ach-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 400;
          color: #5C3D3D;
          margin: 0 0 14px;
          line-height: 1.5;
        }
        .ach-badge {
          font-size: 11px;
          font-weight: 500;
          color: #C05656;
          background: #FDEAEA;
          border-radius: 20px;
          padding: 4px 12px;
          letter-spacing: 0.5px;
          display: inline-block;
          align-self: center;
        }
        .ach-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(40, 25, 20, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          cursor: zoom-out;
          padding: 20px;
        }
        .ach-modal {
          animation: achModalPop 0.28s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
        }
        @keyframes achModalPop {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "36px",
          fontWeight: 400,
          color: "#5C3D3D",
          margin: "0 0 14px",
        }}>
          Achievements
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <div style={{ width: "48px", height: "1px", background: "#F3B8B8" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F38081" }} />
          <div style={{ width: "48px", height: "1px", background: "#F3B8B8" }} />
        </div>
      </div>

      <div className="ach-grid">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="ach-card"
            onClick={() => setActiveItem(item)}
          >
            <div className="ach-image-wrap">
              <img src={item.image} alt={item.title} />
              <div className="ach-overlay">VIEW DETAILS</div>
            </div>

            <div className="ach-card-body">
              <p className="ach-card-title">{item.title}</p>
              <span className="ach-badge">certificate</span>
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="ach-lightbox" onClick={() => setActiveItem(null)}>
          <div
            className="ach-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFF8F6",
              borderRadius: "20px",
              overflow: "hidden",
              maxWidth: "560px",
              width: "100%",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{
              position: "relative",
              background: "linear-gradient(160deg, #FDEAEA 0%, #FBF3DC 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                style={{
                  width: "100%",
                  maxHeight: "460px",
                  objectFit: "contain",
                  display: "block",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              />
              <button
                onClick={() => setActiveItem(null)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(92,61,61,0.55)",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: "24px 26px 28px", overflowY: "auto" }}>
              <span style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#C05656",
                background: "#FDEAEA",
                borderRadius: "20px",
                padding: "4px 12px",
                letterSpacing: "0.5px",
              }}>
                {activeItem.date}
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "19px",
                fontWeight: 400,
                color: "#5C3D3D",
                margin: "12px 0 10px",
              }}>
                {activeItem.title}
              </h3>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#8A7C74", lineHeight: 1.8 }}>
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;