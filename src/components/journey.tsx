interface TimelineItem {
  year: string;
  description: string;
  side: "left" | "right";
  tags: string[];
  icon: string;
  accent: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 — 2024",
    description:
      "Mulai menjelajahi dunia web development dengan mempelajari dasar-dasar HTML dan CSS. Membuat beberapa proyek sederhana menggunakan HTML, native CSS, dan sedikit JavaScript untuk memahami struktur website dan interaktivitas halaman.",
    side: "right",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "🌱",
    accent: "#F38081",
  },
  {
    year: "2025",
    description:
      "Mulai belajar menggunakan React Vite dan memahami konsep penting seperti components, props dan state. Mulai menggunakan MySQL sebagai database pada saat test uji level.",
    side: "left",
    tags: ["React", "Vite"],
    icon: "⚡",
    accent: "#EFD780",
  },
  {
    year: "2026",
    description:
      "Mulai menggunakan TypeScript untuk menulis kode yang lebih terstruktur dan aman. Mempelajari Express.js untuk membangun backend, serta mencoba database seperti PostgreSQL dan MySQL dalam beberapa proyek.",
    side: "right",
    tags: ["TypeScript", "Express", "PostgreSQL", "MySQL"],
    icon: "🚀",
    accent: "#BDD8F1",
  },
];

const tagColorMap: Record<string, { bg: string; color: string }> = {
  "HTML":       { bg: "#FDEAEA", color: "#C05656" },
  "CSS":        { bg: "#FDEAEA", color: "#C05656" },
  "JavaScript": { bg: "#FBF3DC", color: "#A98A2E" },
  "React":      { bg: "#FDEAEA", color: "#C05656" },
  "Vite":       { bg: "#FBF3DC", color: "#A98A2E" },
  "MySQL":      { bg: "#E9F2FC", color: "#4A7BAC" },
  "Components": { bg: "#FDEAEA", color: "#C05656" },
  "State":      { bg: "#FDEAEA", color: "#C05656" },
  "TypeScript": { bg: "#F1F4DC", color: "#7C8A3A" },
  "Express":    { bg: "#F1F4DC", color: "#7C8A3A" },
  "PostgreSQL": { bg: "#E9F2FC", color: "#4A7BAC" },
};

const journeyStyles = `
  @keyframes nodePulse {
    0%   { box-shadow: 0 0 0 0 rgba(243, 128, 129, 0.35); }
    70%  { box-shadow: 0 0 0 10px rgba(243, 128, 129, 0); }
    100% { box-shadow: 0 0 0 0 rgba(243, 128, 129, 0); }
  }

  .journey-card {
    position: relative;
    background: white;
    border: 1px solid #F6E4DE;
    border-radius: 16px;
    padding: 22px 24px;
    box-shadow: 0 4px 20px rgba(243,128,129,0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    overflow: hidden;
  }

  .journey-card::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--accent);
    opacity: 0.7;
  }

  .journey-card.side-right::before { left: 0; }
  .journey-card.side-left::before  { right: 0; }

  .journey-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(243,128,129,0.16);
    border-color: var(--accent);
  }

  .journey-node {
    position: relative;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    z-index: 1;
    animation: nodePulse 2.6s ease-out infinite;
    transition: transform 0.25s ease;
  }

  .journey-node:hover {
    transform: scale(1.12) rotate(8deg);
  }

  .journey-year-badge {
    display: inline-block;
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 50px;
    margin-bottom: 10px;
  }

  .journey-tag {
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 50px;
    font-weight: 500;
    transition: transform 0.18s ease;
  }

  .journey-tag:hover {
    transform: translateY(-2px);
  }
`;

function TimelineCard({ item }: { item: TimelineItem }) {
  const alignEnd = item.side === "left" ? "flex-end" : "flex-start";
  const textAlign = item.side === "left" ? "right" : "left";

  return (
    <div
      className={`journey-card side-${item.side}`}
      style={{ ["--accent" as string]: item.accent }}
    >
      <div style={{ display: "flex", justifyContent: alignEnd }}>
        <span
          className="journey-year-badge"
          style={{
            backgroundColor: `${item.accent}22`,
            color: item.accent === "#EFD780" ? "#A98A2E" : item.accent,
          }}
        >
          {item.year}
        </span>
      </div>
      <p
        style={{
          color: "#9C8880",
          fontSize: "13.5px",
          lineHeight: 1.8,
          margin: 0,
          textAlign,
        }}
      >
        {item.description}
      </p>
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          justifyContent: alignEnd,
        }}
      >
        {item.tags.map((tag) => {
          const c = tagColorMap[tag] ?? { bg: "#FDEAEA", color: "#C05656" };
          return (
            <span
              key={tag}
              className="journey-tag"
              style={{ backgroundColor: c.bg, color: c.color }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Journey() {
  return (
    <section
      id="Journey"
      style={{
        padding: "80px 100px",
        background: "linear-gradient(180deg, #FFF8F6 0%, #FFFBF3 100%)",
        position: "relative",
      }}
    >
      <style>{journeyStyles}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p
          style={{
            margin: "0 0 8px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#F79977",
          }}
        >
          Timeline
        </p>
        <h2
          style={{
            margin: 0,
            fontSize: "2rem",
            fontWeight: 400,
            color: "#5C3D3D",
            fontFamily: "Georgia, serif",
          }}
        >
          My{" "}
          <em style={{ color: "#F38081", fontStyle: "italic" }}>Journey</em>
        </h2>
        <div
          style={{
            width: "36px",
            height: "2px",
            background: "linear-gradient(90deg, #F38081, #EFD780)",
            borderRadius: "2px",
            margin: "14px auto 0",
          }}
        />
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Garis tengah */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, #F38081, #EFD780, #BDD8F1)",
            opacity: 0.35,
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />

        {timelineData.map((item, index) => (
          <div
            key={item.year}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              marginBottom: index === timelineData.length - 1 ? 0 : "48px",
            }}
          >
            {/* Kiri */}
            <div style={{ width: "50%", paddingRight: "36px", textAlign: "right" }}>
              {item.side === "left" && <TimelineCard item={item} />}
            </div>

            {/* Icon tengah */}
            <div
              className="journey-node"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                backgroundColor: "white",
                border: `2px solid ${item.accent}`,
              }}
            >
              {item.icon}
            </div>

            {/* Kanan */}
            <div style={{ width: "50%", marginLeft: "auto", paddingLeft: "36px" }}>
              {item.side === "right" && <TimelineCard item={item} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;