import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import LaporMobile from "../assets/laporin-mobile-mockup.png";
import LaporWeb from "../assets/laporinaja-desktop-mockup.png";
import Ecommerce from "../assets/homely-desktop-mockup.png";
import Perpustakaan from "../assets/perpus-mockup.png";
import GlowFlow from "../assets/uiux-mockup.png";
import Grab from "../assets/gojek-mockup.png";
import AnyaFanart from "../assets/anya-project.png";
import { useLanguage } from "./bahasa/languageContext";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string[];
  bg: string;
  label: string;
  github?: string;
  demo?: string;
  image?: string;
}

// Internal category keys stay in English so filtering logic is stable;
// only the displayed label is translated (built from `t` inside the component).
type CategoryKey = "All" | "Website" | "Design" | "Application";

const tagColorMap: Record<string, { bg: string; color: string }> = {
  "Next.js":       { bg: "#E9F2FC", color: "#4A7BAC" },
  "TypeScript":    { bg: "#F1F4DC", color: "#7C8A3A" },
  "Tailwind CSS":  { bg: "#FDEAEA", color: "#C05656" },
  "React":         { bg: "#FDEAEA", color: "#C05656" },
  "Fast API":      { bg: "#F1F4DC", color: "#7C8A3A" },
  "MySQL":         { bg: "#E9F2FC", color: "#4A7BAC" },
  "JavaScript":    { bg: "#FBF3DC", color: "#A98A2E" },
  "HTML":          { bg: "#FDEAEA", color: "#C05656" },
  "CSS":           { bg: "#FDEAEA", color: "#C05656" },
  "Figma":         { bg: "#E9F2FC", color: "#4A7BAC" },
  "Canva":         { bg: "#FBF3DC", color: "#A98A2E" },
  "Responsive UI": { bg: "#FDEAEA", color: "#C05656" },
  "Adobe Illustrator": { bg: "#FDEBD8", color: "#C17817" },
  "Digital Illustration": { bg: "#F5E0EE", color: "#B0568C" },
};

const styles = `
  .projects-section {
    padding: 80px 100px;
    background-color: #FFF8F6;
    box-sizing: border-box;
  }

  .projects-heading {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
    color: #5C3D3D;
    font-family: Georgia, serif;
  }

  .projects-filter-row {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 44px;
    flex-wrap: wrap;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: stretch;
  }

  .project-card {
    background: #FFFBF3;
    border: 1px solid #F6E4DE;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2px 14px rgba(74,123,172,0.07);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 30px rgba(74,123,172,0.18);
    border-color: #9DBEE0;
  }
  .project-card-body {
    padding: 20px 22px 22px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .project-mockup {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    flex-shrink: 0;
  }
  .project-mockup-bar {
    height: 26px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 12px;
    background: #5C3D3D;
  }
  .project-mockup-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
  }
  .project-mockup-body {
    width: 100%;
    height: calc(100% - 26px);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-mockup-body img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  .project-mockup-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-tag {
    font-size: 10.5px;
    font-weight: 500;
    border-radius: 50px;
    padding: 3px 10px;
    white-space: nowrap;
  }
  .project-link {
    font-size: 12.5px;
    font-weight: 500;
    color: #9C8880;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .project-link:hover {
    color: #F38081;
  }
  .filter-btn {
    background: #FFFBF3;
    border: 1px solid #F6E4DE;
    cursor: pointer;
    font-size: 12.5px;
    font-weight: 500;
    color: #9C8880;
    padding: 7px 20px;
    border-radius: 50px;
    letter-spacing: 0.3px;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }
  .filter-btn.active {
    color: #FFF8F6;
    background: linear-gradient(135deg, #F38081, #F79977);
    border-color: transparent;
  }
  .filter-btn:not(.active):hover {
    border-color: #9DBEE0;
    color: #4A7BAC;
  }

  .projects-heading-grad {
    background: linear-gradient(90deg, #4A7BAC, #F38081);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
  }

  @media (max-width: 900px) {
    .projects-section {
      padding: 64px 40px;
    }
  }

  @media (max-width: 600px) {
    .projects-section {
      padding: 48px 20px;
    }

    .projects-heading {
      font-size: 1.6rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .project-card-body {
      padding: 18px 18px 20px;
    }

    .filter-btn {
      padding: 6px 16px;
      font-size: 12px;
    }
  }
`;

function FilterTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`filter-btn${active ? " active" : ""}`}>
      {label}
    </button>
  );
}

function ProjectMockup({ project }: { project: Project }) {
  const dotColors = ["#F3B8B8", "#EFD780", "#BFE3C8"];
  return (
    <div className="project-mockup" style={{ backgroundColor: project.bg }}>
      <div className="project-mockup-bar">
        {dotColors.map((c) => (
          <span key={c} className="project-mockup-dot" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="project-mockup-body">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-mockup-fallback">
            <FaCode style={{ fontSize: "2.4rem", color: "#D97B8A", opacity: 0.22 }} />
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="project-card">
      <ProjectMockup project={project} />

      <div className="project-card-body">
        <p style={{
          margin: "0 0 6px",
          fontSize: "10.5px",
          fontWeight: 600,
          letterSpacing: "1.3px",
          textTransform: "uppercase",
          color: "#4A7BAC",
        }}>
          {project.label}
        </p>

        <h3 style={{
          margin: "0 0 8px",
          fontSize: "17px",
          fontWeight: 400,
          fontFamily: "Georgia, serif",
          color: "#5C3D3D",
        }}>
          {project.title}
        </h3>

        <p style={{ margin: "0 0 14px", fontSize: "13px", lineHeight: 1.7, color: "#9C8880", flexGrow: 1 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {project.tags.map((tag) => {
            const c = tagColorMap[tag] ?? { bg: "#FDEAEA", color: "#C05656" };
            return (
              <span
                key={tag}
                className="project-tag"
                style={{ backgroundColor: c.bg, color: c.color }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: "18px", borderTop: "1px solid #F6E4DE", paddingTop: "14px" }}>
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowUpRightFromSquare />
              {project.category.includes("Design") ? t.projViewDesign : t.projLiveDemo}
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> {t.projCode}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("All");

  const projects: Project[] = [
    {
      title: t.proj1Title,
      description: t.proj1Desc,
      tags: ["React Native", "TypeScript", "PostgreSQL", "Responsive UI"],
      category: ["Website", "Application"],
      bg: "#FDE8EC",
      label: t.proj1Label,
      github: "https://github.com/Damayantifatihah/LaporinAja-mobile",
      demo: "https://laporin-aja-mobile.vercel.app/",
      image: LaporMobile,
    },
    {
      title: t.proj2Title,
      description: t.proj2Desc,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Express.js"],
      category: ["Website"],
      bg: "#FDE8EC",
      label: t.proj2Label,
      github: "https://github.com/Damayantifatihah/laporin-aja",
      demo: "https://laporin-aja-smoky.vercel.app/",
      image: LaporWeb,
    },
    {
      title: t.proj3Title,
      description: t.proj3Desc,
      tags: ["React", "Tailwind CSS", "Fast API"],
      category: ["Website"],
      bg: "#F9D8DF",
      label: t.proj3Label,
      github: "https://github.com/Damayantifatihah/E-commerce_Project",
      demo: "https://e-commerce-project-gray-sigma.vercel.app/",
      image: Ecommerce,
    },
    {
      title: t.proj4Title,
      description: t.proj4Desc,
      tags: ["Next.js", "MySQL", "Tailwind CSS", "JavaScript"],
      category: ["Website"],
      bg: "#F5E0E4",
      label: t.proj4Label,
      github: "https://github.com/Damayantifatihah/project-perpustakaan",
      demo: "https://project-perpustakaan-sandy.vercel.app/",
      image: Perpustakaan,
    },
    {
      title: t.proj5Title,
      description: t.proj5Desc,
      tags: ["Figma", "Canva"],
      category: ["Design"],
      bg: "#F2CDD4",
      label: t.proj5Label,
      demo: "https://www.figma.com/design/w5MnV5Ji4Fj3etEUADzNZg/WebShop?node-id=0-1&t=RyHAgAPQ9EOtWjtY-1",
      image: GlowFlow,
    },
    {
      title: t.proj6Title,
      description: t.proj6Desc,
      tags: ["HTML", "CSS", "JavaScript"],
      category: ["Website"],
      bg: "#FDE8EC",
      label: t.proj6Label,
      github: "https://github.com/Damayantifatihah/Dicoding-projectGrab",
      demo: "https://dicoding-project-grab.vercel.app/",
      image: Grab,
    },
    {
      title: t.proj7Title,
      description: t.proj7Desc,
      tags: ["Adobe Illustrator", "Digital Illustration"],
      category: ["Design"],
      bg: "#F5E0EE",
      label: t.proj7Label,
      demo: "https://www.instagram.com/p/C_X5krJSdnx/?igsh=MTR3YWh3czA0bHdydA==", // ganti dengan link Instagram post kamu
      image: AnyaFanart,
    },
  ];

  const categoryOptions: { key: CategoryKey; label: string }[] = [
    { key: "All", label: t.catAll },
    { key: "Website", label: t.catWebsite },
    { key: "Design", label: t.catDesign },
    { key: "Application", label: t.catApplication },
  ];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="Projects" className="projects-section">
      <style>{styles}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h2 className="projects-heading">
          {t.projHeadingPrefix} <em className="projects-heading-grad">{t.projHeadingHighlight}</em>
        </h2>
        <div style={{ width: "36px", height: "2px", background: "linear-gradient(90deg, #F38081, #EFD780)", borderRadius: "2px", margin: "14px auto 0" }} />
      </div>

      {/* Filter */}
      <div className="projects-filter-row">
        {categoryOptions.map((cat) => (
          <FilterTab
            key={cat.key}
            label={cat.label}
            active={activeFilter === cat.key}
            onClick={() => setActiveFilter(cat.key)}
          />
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "#9C8880" }}>{t.projEmptyState}</p>
      ) : (
        <div className="projects-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;