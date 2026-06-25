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

const marqueeStyles = `
  @keyframes marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
  @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); }    }

  .mq-track         { display: flex; gap: 16px; flex-shrink: 0; animation: marquee-left  28s linear infinite; }
  .mq-track.reverse { animation: marquee-right 28s linear infinite; }
  .mq-track:hover   { animation-play-state: paused; }

  .skill-card {
    background: white;
    border: 1px solid #F2DDD9;
    border-radius: 50px;
    padding: 10px 20px 10px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(217,123,138,0.07);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .skill-card:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 18px rgba(217,123,138,0.15);
  }

  .skill-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #FDE8EC;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    flex-shrink: 0;
    color: #D97B8A;
  }

  .skill-name {
    font-size: 13px;
    font-weight: 500;
    color: #7A5058;
  }
`;

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
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
          My <em style={{ color: "#D97B8A", fontStyle: "italic" }}>Skills</em>
        </h2>
        <div style={{
          width: "36px",
          height: "2px",
          background: "#F2C4C8",
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