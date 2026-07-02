import {
  SiHtml5, SiCss, SiMysql, SiReact, SiNextdotjs, SiExpress,
  SiTypescript, SiJavascript, SiPostgresql, SiSupabase, SiFigma,
  SiVite,
} from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
}

const skills: Skill[] = [
  { name: "HTML",               icon: SiHtml5 },
  { name: "CSS",                icon: SiCss },
  { name: "JavaScript",         icon: SiJavascript },
  { name: "React",              icon: SiReact },
  { name: "React Native",       icon: SiReact },
  { name: "React Vite",         icon: SiVite },
  { name: "Next.js",            icon: SiNextdotjs },
  { name: "TypeScript",         icon: SiTypescript },
  { name: "Express",            icon: SiExpress },
  { name: "MySQL",              icon: SiMysql },
  { name: "PostgreSQL",         icon: SiPostgresql },
  { name: "Supabase",           icon: SiSupabase },
  { name: "Figma",              icon: SiFigma },
  { name: "Adobe Illustrator",  icon: DiIllustrator },
  { name: "Visual Studio Code", icon: VscVscode },
];

const skillColorMap: Record<string, { bg: string; color: string }> = {
  "HTML":                { bg: "#FDEEE5", color: "#C97142" },
  "CSS":                 { bg: "#E9F2FC", color: "#4A7BAC" },
  "MySQL":               { bg: "#E9F2FC", color: "#4A7BAC" },
  "React":               { bg: "#FDEAEA", color: "#C05656" },
  "React Native":        { bg: "#FDEAEA", color: "#C05656" },
  "React Vite":          { bg: "#F1E9FC", color: "#8A5CD6" },
  "Next.js":             { bg: "#F1F4DC", color: "#7C8A3A" },
  "Express":             { bg: "#F1F4DC", color: "#7C8A3A" },
  "TypeScript":          { bg: "#FBF3DC", color: "#A98A2E" },
  "JavaScript":          { bg: "#FBF3DC", color: "#A98A2E" },
  "PostgreSQL":          { bg: "#E9F2FC", color: "#4A7BAC" },
  "Supabase":            { bg: "#F1F4DC", color: "#7C8A3A" },
  "Figma":               { bg: "#FDEEE5", color: "#C97142" },
  "Adobe Illustrator":   { bg: "#FDEAEA", color: "#C05656" },
  "Visual Studio Code":  { bg: "#E9F2FC", color: "#4A7BAC" },
};

const skillStyles = `
  .skill-section {
    padding: 90px 100px;
    background-color: #FFF8F6;
    box-sizing: border-box;
    overflow: hidden;
  }

  .skill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 26px 22px;
    max-width: 980px;
    margin: 0 auto;
  }

  @keyframes skillFloat {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-10px); }
  }

  @keyframes skillPop {
    from { opacity: 0; transform: translateY(24px) scale(0.9); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .skill-tile-outer {
    animation: skillPop 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }

  .skill-tile {
    position: relative;
    background: white;
    border: 1px solid #F6E4DE;
    border-radius: 20px;
    padding: 26px 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 16px rgba(243,128,129,0.07);
    transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
    animation: skillFloat 5s ease-in-out infinite;
  }

  .skill-tile::before {
    content: "";
    position: absolute;
    inset: -1.5px;
    border-radius: 20px;
    padding: 1.5px;
    background: conic-gradient(from 0deg, transparent, var(--tile-accent), transparent 30%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: spin 3s linear infinite;
    pointer-events: none;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .skill-tile:hover {
    animation-play-state: paused;
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 18px 34px rgba(243,128,129,0.2);
    border-color: transparent;
  }

  .skill-tile:hover::before {
    opacity: 1;
  }

  .skill-tile-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transition: transform 0.35s ease;
  }

  .skill-tile:hover .skill-tile-icon {
    transform: scale(1.12) rotate(-6deg);
  }

  .skill-tile-name {
    font-size: 13px;
    font-weight: 600;
    color: #5C3D3D;
    text-align: center;
  }

  @media (max-width: 820px) {
    .skill-section { padding: 70px 40px; }
  }

  @media (max-width: 600px) {
    .skill-section { padding: 56px 20px; }
    .skill-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 18px 14px; }
    .skill-tile { padding: 20px 12px 16px; }
    .skill-tile-icon { width: 44px; height: 44px; font-size: 20px; }
  }
`;

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const c = skillColorMap[skill.name] ?? { bg: "#FDEAEA", color: "#C05656" };
  const Icon = skill.icon;

  return (
    <div
      className="skill-tile-outer"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div
        className="skill-tile"
        style={{
          ["--tile-accent" as string]: c.color,
          animationDelay: `${(index % 5) * 0.4}s`,
        }}
      >
        <div className="skill-tile-icon" style={{ background: c.bg, color: c.color }}>
          <Icon />
        </div>
        <span className="skill-tile-name">{skill.name}</span>
      </div>
    </div>
  );
}

function Skill() {
  return (
    <section id="Skill" className="skill-section">
      <style>{skillStyles}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "2rem",
            fontWeight: 400,
            color: "#5C3D3D",
            fontFamily: "Georgia, serif",
          }}
        >
          My <em style={{ color: "#F38081", fontStyle: "italic" }}>Skills</em>
        </h2>
        <div
          style={{
            width: "36px",
            height: "2px",
            background: "#EFD780",
            borderRadius: "2px",
            margin: "14px auto 0",
          }}
        />
        <p style={{ margin: "12px 0 0", fontSize: "13.5px", color: "#B08880" }}>
          Technologies and tools I use to build applications
        </p>
      </div>

      {/* Grid */}
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <SkillTile key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Skill;