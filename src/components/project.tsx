import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

// Kalau sudah punya screenshot project, import di sini lalu isi field `image` di bawah.
// Contoh: import laporinImg from "../assets/projects/laporin.png";

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

const categories = ["All", "Website", "Design", "Application"];

const projects: Project[] = [
  {
    title: "Pengaduan Masyarakat",
    description:
      "Platform pelaporan masyarakat berbasis web untuk melaporkan isu di lingkungan sekitar secara cepat dan transparan.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: ["Website"],
    bg: "#FDE8EC",
    label: "Web · Development",
    github: "#",
    demo: "https://laporin-aja-smoky.vercel.app/",
    image: "", // isi dengan import screenshot di atas
  },
  {
    title: "E-Commerce Sederhana",
    description:
      "Website toko online sederhana dengan fitur katalog produk, keranjang belanja, dan proses checkout.",
    tags: ["React", "Tailwind CSS", "Fast API"],
    category: ["Website"],
    bg: "#F9D8DF",
    label: "Web · Development",
    github: "https://github.com/Damayantifatihah/E-commerce_Project",
    demo: "https://e-commerce-project-three-gray.vercel.app/",
    image: "",
  },
  {
    title: "Perpustakaan Digital",
    description:
      "Aplikasi perpustakaan digital untuk pencarian, peminjaman, dan pengelolaan koleksi buku secara online.",
    tags: ["Next.js", "MySQL", "Tailwind CSS", "JavaScript"],
    category: ["Website"],
    bg: "#F5E0E4",
    label: "Web · Development",
    github: "https://github.com/Damayantifatihah/project-perpustakaan",
    demo: "https://project-perpustakaan-sandy.vercel.app/",
    image: "",
  },
  {
    title: "Glow & Flow",
    description:
      "Rancangan UI/UX untuk aplikasi Glow & Flow, mencakup user flow, wireframe, hingga high-fidelity design.",
    tags: ["Figma", "UI/UX Design"],
    category: ["Design"],
    bg: "#F2CDD4",
    label: "UI/UX Design",
    demo: "https://www.figma.com/design/w5MnV5Ji4Fj3etEUADzNZg/WebShop?node-id=0-1&t=RyHAgAPQ9EOtWjtY-1",
    image: "",
  },
  {
    title: "Landing Page Grab",
    description:
      "Landing page bertema layanan transportasi & pengiriman, dibuat sebagai project submission Dicoding.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: ["Website"],
    bg: "#FDE8EC",
    label: "Web · Development",
    github: "https://github.com/Damayantifatihah/Dicoding-projectGrab",
    demo: "https://dicoding-project-grab.vercel.app/",
    image: "",
  },
];

const styles = `
  .project-card {
    background: #FFFBF3;
    border: 1px solid #F6E4DE;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2px 14px rgba(217,123,138,0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 30px rgba(217,123,138,0.18);
    border-color: #F2C4C8;
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
  }
  .project-mockup-body img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
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
    color: #A9645F;
    background: #FDEAEA;
    border-radius: 50px;
    padding: 3px 10px;
    white-space: nowrap;
  }
  .project-link {
    font-size: 12.5px;
    font-weight: 500;
    color: #C0968A;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .project-link:hover {
    color: #D97B8A;
  }
  .filter-btn {
    background: #FFFBF3;
    border: 1px solid #F6E4DE;
    cursor: pointer;
    font-size: 12.5px;
    font-weight: 500;
    color: #C0968A;
    padding: 7px 20px;
    border-radius: 50px;
    letter-spacing: 0.3px;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }
  .filter-btn.active {
    color: #FFF8F6;
    background: #D97B8A;
    border-color: #D97B8A;
  }
  .filter-btn:not(.active):hover {
    border-color: #F2C4C8;
    color: #D97B8A;
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
  return (
    <div className="project-card">
      <ProjectMockup project={project} />

      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <p style={{
          margin: "0 0 6px",
          fontSize: "10.5px",
          fontWeight: 600,
          letterSpacing: "1.3px",
          textTransform: "uppercase",
          color: "#D97B8A",
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
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
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
              {project.category.includes("Design") ? "View Design" : "Live Demo"}
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="Projects" style={{ padding: "80px 100px", backgroundColor: "#FFF8F6" }}>
      <style>{styles}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: 400, color: "#5C3D3D", fontFamily: "Georgia, serif" }}>
          My <em style={{ color: "#D97B8A", fontStyle: "italic" }}>Projects</em>
        </h2>
        <div style={{ width: "36px", height: "2px", background: "#F2C4C8", borderRadius: "2px", margin: "14px auto 0" }} />
      </div>

      {/* Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "44px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <FilterTab key={cat} label={cat} active={activeFilter === cat} onClick={() => setActiveFilter(cat)} />
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "#C0968A" }}>Belum ada project di kategori ini.</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "stretch",
        }}>
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;