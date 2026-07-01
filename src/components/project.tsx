import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

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
  },
  {
    title: "E-Commerce Sederhana",
    description:
      "Website toko online sederhana dengan fitur katalog produk, keranjang belanja, dan proses checkout.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    category: ["Website"],
    bg: "#F9D8DF",
    label: "Web · Development",
    github: "#",
    demo: "#",
  },
  {
    title: "Perpustakaan Digital",
    description:
      "Aplikasi perpustakaan digital untuk pencarian, peminjaman, dan pengelolaan koleksi buku secara online.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    category: ["Website"],
    bg: "#F5E0E4",
    label: "Web · Development",
    github: "#",
    demo: "#",
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
  },
  {
    title: "Landing Page Grab",
    description:
      "Landing page bertema layanan transportasi & pengiriman, dibuat sebagai project submission Dicoding.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: ["Website"],
    bg: "#FDE8EC",
    label: "Web · Development",
    demo: "https://dicoding-project-grab.vercel.app/",
    // Ganti dengan screenshot asli, misal simpan di /public/projects/grab.png lalu isi "/projects/grab.png"
    image: "",
  },
];

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(92,61,61,0.88)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "18px",
  transition: "opacity 0.25s ease",
};

const hoverCardStyle = `
  .project-card:hover .project-overlay { opacity: 1 !important; }
  .filter-btn { background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 500;
    color: #C0968A; padding-bottom: 6px; border-bottom: 1.5px solid transparent;
    transition: color 0.2s, border-color 0.2s; letter-spacing: 0.3px; }
  .filter-btn.active { color: #D97B8A; border-bottom-color: #D97B8A; }
  .filter-btn:hover { color: #D97B8A; }
`;

function FilterTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`filter-btn${active ? " active" : ""}`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const clickThrough = project.demo || project.github;

  const hasSingleLink = Boolean(project.demo) !== Boolean(project.github); // exactly one of the two
  const singleHref = project.demo || project.github;

  const Wrapper = hasSingleLink ? "a" : "div";
  const wrapperExtraProps = hasSingleLink
    ? { href: singleHref, target: "_blank", rel: "noopener noreferrer" }
    : {
        onClick: () => {
          if (clickThrough) window.open(clickThrough, "_blank", "noopener,noreferrer");
        },
      };

  return (
    <Wrapper
      className="project-card"
      {...wrapperExtraProps}
      style={{
        position: "relative",
        backgroundColor: project.bg,
        borderRadius: "18px",
        height: large ? "100%" : "auto",
        minHeight: large ? "360px" : "168px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: clickThrough ? "pointer" : "default",
        backgroundImage: project.image ? `url(${project.image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textDecoration: "none",
      }}
    >
      {!project.image && (
        <FaCode style={{ fontSize: large ? "3rem" : "2rem", color: "#D97B8A", opacity: 0.2 }} />
      )}

      <div
        className="project-overlay"
        style={{ ...overlayStyle, opacity: 0, padding: large ? "32px" : "20px" }}
      >
        <p style={{
          margin: "0 0 6px",
          fontSize: "10px",
          color: "#F2CDD4",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontWeight: 500,
        }}>
          {project.label}
        </p>
        <h3 style={{
          margin: "0 0 10px",
          color: "#FFF8F6",
          fontSize: large ? "20px" : "15px",
          fontWeight: 400,
          fontFamily: "Georgia, serif",
        }}>
          {project.title}
        </h3>
        <p style={{
          margin: "0 0 14px",
          color: "#F2D8DC",
          fontSize: large ? "13px" : "12px",
          lineHeight: 1.7,
        }}>
          {project.description}
        </p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "11px",
              fontWeight: 500,
              color: "#FFF8F6",
              border: "1px solid rgba(255,248,246,0.4)",
              borderRadius: "50px",
              padding: "3px 12px",
            }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {project.demo && (
            hasSingleLink ? (
              <span style={{
                color: "#FDE8EC", fontSize: "13px", fontWeight: 500,
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <FaArrowUpRightFromSquare /> {project.category.includes("Design") ? "View Design" : "Live Demo"}
              </span>
            ) : (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{
                color: "#FDE8EC", fontSize: "13px", fontWeight: 500,
                textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
              }}>
                <FaArrowUpRightFromSquare /> Live Demo
              </a>
            )
          )}
          {project.github && (
            hasSingleLink ? (
              <span style={{
                color: "#FDE8EC", fontSize: "13px", fontWeight: 500,
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <FaGithub /> Code
              </span>
            ) : (
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{
                color: "#FDE8EC", fontSize: "13px", fontWeight: 500,
                textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
              }}>
                <FaGithub /> Code
              </a>
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  const [mainProject, ...restProjects] = filtered;

  return (
    <section id="Projects"
    style={{ padding: "80px 100px", backgroundColor: "#FFF8F6" }}>
      <style>{hoverCardStyle}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: 400, color: "#5C3D3D", fontFamily: "Georgia, serif" }}>
          My <em style={{ color: "#D97B8A", fontStyle: "italic" }}>Projects</em>
        </h2>
        <div style={{ width: "36px", height: "2px", background: "#F2C4C8", borderRadius: "2px", margin: "14px auto 0" }} />
      </div>

      {/* Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "40px" }}>
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
          gridTemplateColumns: restProjects.length > 0 ? "1.1fr 1fr" : "1fr",
          gap: "16px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}>
          <ProjectCard project={mainProject} large />
          {restProjects.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {restProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Projects;