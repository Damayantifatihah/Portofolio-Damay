import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  SiHtml5, SiCss, SiMysql, SiReact, SiNextdotjs, SiExpress,
  SiTypescript, SiJavascript, SiPostgresql, SiSupabase, SiFigma,
  SiVite,
} from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { useLanguage } from "./bahasa/languageContext";

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

// Static layout styles only — every animation now lives in Framer Motion props below.
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
  }

  .skill-tile-border {
    position: absolute;
    inset: -1.5px;
    border-radius: 20px;
    padding: 1.5px;
    background: conic-gradient(from 0deg, transparent, var(--tile-accent), transparent 30%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: skillBorderSpin 3s linear infinite;
  }

  @keyframes skillBorderSpin {
    to { transform: rotate(360deg); }
  }

  .skill-tile:hover .skill-tile-border,
  .skill-tile.in-view .skill-tile-border {
    opacity: 1;
  }

  .skill-tile.in-view {
    box-shadow: 0 14px 28px rgba(243,128,129,0.16);
    border-color: transparent;
  }

  .skill-tile-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
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

// Parent container: drives the pop-in stagger across children on scroll-into-view.
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

// Pop-in entrance for each tile (replaces the old skillPop keyframes).
const tileVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const c = skillColorMap[skill.name] ?? { bg: "#FDEAEA", color: "#C05656" };
  const Icon = skill.icon;
  const tileRef = useRef<HTMLDivElement>(null);
  // Mobile fallback: no real hover on touch, so reveal the glow/lift once the
  // tile scrolls into view instead (mirrors the old .in-view CSS behaviour).
  const inView = useInView(tileRef, { amount: 0.5 });
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

  return (
    // Outer wrapper: entrance pop-in only (variants inherited from parent grid's stagger).
    <motion.div variants={tileVariants}>
      <motion.div
        ref={tileRef}
        style={{ ["--tile-accent" as string]: c.color } as React.CSSProperties}
        className={`skill-tile${isTouch && inView ? " in-view" : ""}`}
        // Float loop (replaces skillFloat keyframes)
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: (index % 5) * 0.4,
          },
        }}
        // Hover lift (replaces .skill-tile:hover transform/box-shadow). Runs on this
        // same element so it fires reliably — no gesture propagation needed.
        whileHover={{
          y: -8,
          scale: 1.05,
          boxShadow: "0 18px 34px rgba(243,128,129,0.2)",
          borderColor: "transparent",
          transition: { duration: 0.35, ease: "easeOut" },
        }}
      >
        {/* Rotating conic-gradient border glow — kept as plain CSS since it sits
            behind pointer-events:none and just needs to always spin; opacity is
            toggled by the .skill-tile:hover / .in-view CSS rules above. */}
        <div className="skill-tile-border" />

        <motion.div
          className="skill-tile-icon"
          style={{ background: c.bg, color: c.color }}
          whileHover={{ scale: 1.12, rotate: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Icon />
        </motion.div>
        <span className="skill-tile-name">{skill.name}</span>
      </motion.div>
    </motion.div>
  );
}

function Skill() {
  const { t } = useLanguage();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: false, amount: 0.2 });

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
          {t.skillHeadingPrefix}{" "}
          <em style={{ color: "#F38081", fontStyle: "italic" }}>{t.skillHeadingHighlight}</em>
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
          {t.skillSubtitle}
        </p>
      </div>

      {/* Grid */}
      <motion.div
        ref={gridRef}
        className="skill-grid"
        variants={gridVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, i) => (
          <SkillTile key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

export default Skill;