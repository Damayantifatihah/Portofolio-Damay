import { FaCode, FaLayerGroup, FaServer } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface TimelineItem {
  year: string;
  description: string;
  side: "left" | "right";
  tags: string[];
  icon: IconType;
  accent: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 — 2024",
    description:
      "Started exploring web development by learning the fundamentals of HTML and CSS. Built several simple projects using HTML, native CSS, and a bit of JavaScript to understand website structure and page interactivity.",
    side: "right",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: FaCode,
    accent: "#F38081",
  },
  {
    year: "2025",
    description:
      "Started learning React with Vite and grasped key concepts like components, props, and state. Began using MySQL as a database during a competency test.",
    side: "left",
    tags: ["React", "Vite"],
    icon: FaLayerGroup,
    accent: "#EFD780",
  },
  {
    year: "2026",
    description:
      "Started using TypeScript to write more structured and type-safe code. Learned Express.js for backend development, and explored databases like PostgreSQL and MySQL across several projects.",
    side: "right",
    tags: ["TypeScript", "Express", "PostgreSQL", "MySQL"],
    icon: FaServer,
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

  .journey-section {
    padding: 80px 100px;
    background: linear-gradient(180deg, #FFF8F6 0%, #FFFBF3 100%);
    position: relative;
    box-sizing: border-box;
  }

  .journey-wrap {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  .journey-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #F38081, #EFD780, #BDD8F1);
    opacity: 0.35;
    transform: translateX(-50%);
    z-index: 0;
  }

  .journey-row {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 48px;
  }

  .journey-row:last-child {
    margin-bottom: 0;
  }

  .journey-col-left {
    width: 50%;
    padding-right: 36px;
    text-align: right;
  }

  .journey-col-right {
    width: 50%;
    margin-left: auto;
    padding-left: 36px;
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
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    z-index: 1;
    background-color: white;
    animation: nodePulse 2.6s ease-out infinite;
    transition: transform 0.25s ease;
  }

  .journey-node:hover {
    transform: translateX(-50%) scale(1.12) rotate(8deg);
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

  .journey-badge-wrap {
    display: flex;
  }

  .journey-desc {
    color: #9C8880;
    font-size: 13.5px;
    line-height: 1.8;
    margin: 0;
  }

  .journey-tags-wrap {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
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

  @media (max-width: 820px) {
    .journey-section {
      padding: 64px 40px;
    }
  }

  @media (max-width: 700px) {
    .journey-section {
      padding: 56px 20px;
    }

    .journey-line {
      left: 22px;
    }

    .journey-node {
      left: 22px;
      width: 40px;
      height: 40px;
      font-size: 16px;
    }

    .journey-row {
      padding-left: 56px;
      margin-bottom: 28px;
    }

    .journey-col-left,
    .journey-col-right {
      width: 100%;
      padding: 0 !important;
      margin-left: 0 !important;
      text-align: left !important;
    }

    .journey-col-left:empty,
    .journey-col-right:empty {
      display: none;
    }

    .journey-card {
      padding: 18px 18px;
    }

    .journey-badge-wrap,
    .journey-tags-wrap {
      justify-content: flex-start !important;
    }

    .journey-desc {
      text-align: left !important;
    }
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
      <div className="journey-badge-wrap" style={{ justifyContent: alignEnd }}>
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
      <p className="journey-desc" style={{ textAlign }}>
        {item.description}
      </p>
      <div className="journey-tags-wrap" style={{ justifyContent: alignEnd }}>
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
    <section id="Journey" className="journey-section">
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
      <div className="journey-wrap">
        {/* Garis tengah */}
        <div className="journey-line" />

        {timelineData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.year} className="journey-row">
              {/* Kiri */}
              <div className="journey-col-left">
                {item.side === "left" && <TimelineCard item={item} />}
              </div>

              {/* Icon tengah */}
              <div
                className="journey-node"
                style={{ border: `2px solid ${item.accent}` }}
              >
                <Icon
                  style={{
                    fontSize: "17px",
                    color: item.accent === "#EFD780" ? "#A98A2E" : item.accent,
                  }}
                />
              </div>

              {/* Kanan */}
              <div className="journey-col-right">
                {item.side === "right" && <TimelineCard item={item} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Journey;