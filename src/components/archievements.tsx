import React from "react";
import cert1 from "../assets/KLS10.jpeg";
import cert2 from "../assets/KLS11.jpeg";
import cert3 from "../assets/PT.jpeg";

interface Achievement {
  id: number;
  title: string;
  image: string;
}

const achievements: Achievement[] = [
  { id: 1, title: "Uji Level Web E-commerce Sederhana", image: cert1 },
  { id: 2, title: "Uji Level Aplikasi Pengembangan Multi-Platform", image: cert2 },
  { id: 3, title: "Kunjungan Industri PT. Inti Persero dan Institut Teknologi Bandung", image: cert3 },
];

const Achievements: React.FC = () => {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  return (
    <section
      id="achievements"
      style={{ padding: "100px 8%", backgroundColor: "#FDF8F9" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .ach-card {
          background: #FFF6F8;
          border-radius: 20px;
          border: 1px solid #F0D5DE;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .ach-card:hover {
          transform: translateY(-5px);
          border-color: #D4A5B5;
        }
        .ach-card:hover .ach-overlay {
          opacity: 1;
        }
        .ach-overlay {
          position: absolute;
          inset: 0;
          background: rgba(92, 61, 78, 0.45);
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
        .ach-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(30, 15, 22, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          cursor: zoom-out;
          padding: 20px;
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "36px",
          fontWeight: 400,
          color: "#5C3D4E",
          margin: "0 0 14px",
        }}>
          Achievements
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <div style={{ width: "48px", height: "1px", background: "#D4A5B5" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4A5B5" }} />
          <div style={{ width: "48px", height: "1px", background: "#D4A5B5" }} />
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px",
        maxWidth: "860px",
        margin: "0 auto",
      }}>
        {achievements.map((item) => (
          <div
            key={item.id}
            className="ach-card"
            onClick={() => setActiveImage(item.image)}
          >
            <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
              />
              <div className="ach-overlay">LIHAT</div>
            </div>

            <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "15px",
                fontWeight: 400,
                color: "#5C3D4E",
                margin: "0 0 12px",
                lineHeight: 1.5,
              }}>
                {item.title}
              </p>
              <span style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#B06080",
                background: "#FDEAF0",
                borderRadius: "20px",
                padding: "4px 12px",
                letterSpacing: "0.5px",
              }}>
                certificate
              </span>
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="ach-lightbox" onClick={() => setActiveImage(null)}>
          <img
            src={activeImage}
            alt="Preview sertifikat"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "16px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Achievements;