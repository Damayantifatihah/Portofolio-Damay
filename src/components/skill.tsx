import {
  SiMysql, SiReact, SiNextdotjs, SiExpress,
  SiTypescript, SiJavascript, SiPostgresql,
  SiSupabase, SiFigma,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "MySQL",        icon: <SiMysql /> },
  { name: "React",        icon: <SiReact /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Next.js",      icon: <SiNextdotjs /> },
  { name: "Express",      icon: <SiExpress /> },
  { name: "TypeScript",   icon: <SiTypescript /> },
  { name: "JavaScript",   icon: <SiJavascript /> },
  { name: "PostgreSQL",   icon: <SiPostgresql /> },
  { name: "Supabase",     icon: <SiSupabase /> },
  { name: "Figma",        icon: <SiFigma /> },
];

const skillColorMap: Record<string, { bg: string; color: string }> = {
  "MySQL":        { bg: "#E9F2FC", color: "#4A7BAC" }, // Soft Baby Blue
  "React":        { bg: "#FDEAEA", color: "#C05656" }, // Coral Reef
  "React Native": { bg: "#FDEAEA", color: "#C05656" },
  "Next.js":      { bg: "#F1F4DC", color: "#7C8A3A" }, // Squeeze of Lime
  "Express":      { bg: "#F1F4DC", color: "#7C8A3A" },
  "TypeScript":   { bg: "#FBF3DC", color: "#A98A2E" }, // Meyer Lemon
  "JavaScript":   { bg: "#FBF3DC", color: "#A98A2E" },
  "PostgreSQL":   { bg: "#E9F2FC", color: "#4A7BAC" },
  "Supabase":     { bg: "#F1F4DC", color: "#7C8A3A" },
  "Figma":        { bg: "#FDEEE5", color: "#C97142" }, // Salmon Pink
};

const marqueeStyles = `
  @keyframes marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
  @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); }    }

  .mq-track         { display: flex; gap: 16px; flex-shrink: 0; animation: marquee-left  28s linear infinite; }
  .mq-track.reverse { animation: marquee-right 28s linear infinite; }
  .mq-track:hover   { animation-play-state: paused; }

  .skill-card {
    background: white;
    border: 1px solid #F6E4DE;
    border-radius: 50px;
    padding: 10px 20px 10px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(243,128,129,0.08);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .skill-card:hover {
    transform: scale(1.06) translateY(-2px);
    box-shadow: 0 8px 20px rgba(243,128,129,0.18);
  }

  .skill-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    flex-shrink: 0;
  }

  .skill-name {
    font-size: 13px;
    font-weight: 500;
    color: #6B5A54;
  }
`;

function SkillCard({ skill }: { skill: Skill }) {
  const c = skillColorMap[skill.name] ?? { bg: "#FDEAEA", color: "#C05656" };
  return (
    <div className="skill-card">
      <div className="skill-icon" style={{ background: c.bg, color: c.color }}>
        {skill.icon}
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

function SkillRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...skills, ...skills];
  return (
    <div style={{ overflow: "hidden", marginBottom: reverse ? 0 : "14px" }}>
      <div className={`mq-track${reverse ? " reverse" : ""}`}>
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill() {
  return (
    <section id="Skill"
    style={{ padding: "80px 0", backgroundColor: "#FFF8F6", overflow: "hidden" }}>
      <style>{marqueeStyles}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 100px" }}>
        <h2 style={{
          margin: 0,
          fontSize: "2rem",
          fontWeight: 400,
          color: "#5C3D3D",
          fontFamily: "Georgia, serif",
        }}>
          My <em style={{ color: "#F38081", fontStyle: "italic" }}>Skills</em>
        </h2>
        <div style={{
          width: "36px",
          height: "2px",
          background: "#EFD780",
          borderRadius: "2px",
          margin: "14px auto 0",
        }} />
        <p style={{ margin: "12px 0 0", fontSize: "13.5px", color: "#B08880" }}>
          Technologies and tools I use to build applications
        </p>
      </div>

      <SkillRow />
      <SkillRow reverse />
    </section>
  );
}

export default Skill;