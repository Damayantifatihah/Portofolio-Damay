interface TimelineItem {
  year: string;
  description: string;
  side: "left" | "right";
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 — 2024",
    description:
      "Mulai menjelajahi dunia web development dengan mempelajari dasar-dasar HTML dan CSS. Membuat beberapa proyek sederhana menggunakan HTML, native CSS, dan sedikit JavaScript untuk memahami struktur website dan interaktivitas halaman.",
    side: "right",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2025",
    description:
      "Mulai belajar menggunakan React Vite dan memahami konsep penting seperti components, props dan state. Mulai menggunakan MySQL sebagai database pada saat test uji level.",
    side: "left",
    tags: ["React", "Vite"],
  },
  {
    year: "2026",
    description:
      "Mulai menggunakan TypeScript untuk menulis kode yang lebih terstruktur dan aman. Mempelajari Express.js untuk membangun backend, serta mencoba database seperti PostgreSQL dan MySQL dalam beberapa proyek.",
    side: "right",
    tags: ["TypeScript", "Express", "PostgreSQL", "MySQL"],
  },
];

const tagColorMap: Record<string, { bg: string; color: string }> = {
  "HTML":       { bg: "#FDE8EC", color: "#C0606E" },
  "CSS":        { bg: "#FDE8EC", color: "#C0606E" },
  "JavaScript": { bg: "#FDE8EC", color: "#C0606E" },
  "React":      { bg: "#FDE8EC", color: "#C0606E" },
  "Vite":       { bg: "#FDE8EC", color: "#C0606E" },
  "MySQL":      { bg: "#FDE8EC", color: "#C0606E" },
  "Components": { bg: "#FDE8EC", color: "#C0606E" },
  "State":      { bg: "#FDE8EC", color: "#C0606E" },
  "TypeScript": { bg: "#F9EDE8", color: "#B86048" },
  "Express":    { bg: "#F9EDE8", color: "#B86048" },
  "PostgreSQL": { bg: "#F9EDE8", color: "#B86048" },
  "MySQL":      { bg: "#F9EDE8", color: "#B86048" },
};

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #F2DDD9",
        borderRadius: "16px",
        padding: "22px 24px",
        boxShadow: "0 4px 20px rgba(217,123,138,0.07)",
      }}
    >
      <p
        style={{
          color: "#D97B8A",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "8px",
          margin: "0 0 8px",
          textAlign: item.side === "left" ? "right" : "left",
        }}
      >
        {item.year}
      </p>
      <p
        style={{
          color: "#B08880",
          fontSize: "13.5px",
          lineHeight: 1.8,
          margin: 0,
          textAlign: item.side === "left" ? "right" : "left",
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
          justifyContent: item.side === "left" ? "flex-end" : "flex-start",
        }}
      >
        {item.tags.map((tag) => {
          const c = tagColorMap[tag] ?? { bg: "#FDE8EC", color: "#C0606E" };
          return (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "50px",
                fontWeight: 500,
                backgroundColor: c.bg,
                color: c.color,
              }}
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
    <section style={{ padding: "80px 100px", backgroundColor: "#FFF8F6" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
          <em style={{ color: "#D97B8A", fontStyle: "italic" }}>Journey</em>
        </h2>
        <div
          style={{
            width: "36px",
            height: "2px",
            background: "#F2C4C8",
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
            width: "1.5px",
            background: "linear-gradient(to bottom, #F9D8DF, #F2CDD4, #F9D8DF)",
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
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: "44px",
                height: "44px",
                backgroundColor: "white",
                border: "1.5px solid #F2CDD4",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: "#D97B8A",
                boxShadow: "0 4px 12px rgba(217,123,138,0.12)",
                zIndex: 1,
              }}
            >
              ✦
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