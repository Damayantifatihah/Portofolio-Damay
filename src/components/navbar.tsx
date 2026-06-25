import { useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 48px",
  backgroundColor: "#FFF8F6",
  borderBottom: "1px solid #F2DDD9",
  height: "66px",
  width: "100%",
  boxSizing: "border-box",
  position: "sticky",
  top: 0,
  zIndex: 50,
};

const logoWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const logoTextStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 500,
  color: "#C07878",
  letterSpacing: "0.8px",
  fontFamily: "Georgia, serif",
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  gap: "32px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  alignItems: "center",
};

function NavLink({ href, label, active = false }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: highlighted ? "#D97B8A" : "#C0968A",
    fontSize: "14px",
    fontWeight: 500,
    paddingBottom: "4px",
    borderBottom: `1.5px solid ${highlighted ? "#D97B8A" : "transparent"}`,
    transition: "color 0.2s, border-color 0.2s",
    letterSpacing: "0.3px",
  };

  return (
    <li>
      <a
        href={href}
        style={linkStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </a>
    </li>
  );
}

function CtaButton({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  const style: React.CSSProperties = {
    textDecoration: "none",
    border: "1.5px solid #D97B8A",
    color: hovered ? "#FFF8F6" : "#D97B8A",
    backgroundColor: hovered ? "#D97B8A" : "transparent",
    padding: "7px 20px",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: 500,
    transition: "background 0.2s, color 0.2s",
    letterSpacing: "0.4px",
    display: "inline-block",
  };

  return (
    <li>
      <a
        href={href}
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </a>
    </li>
  );
}

const Navbar: React.FC = () => {
  const links: NavLinkProps[] = [
    { href: "#About", label: "About" },
    { href: "#Journey", label: "Journey" },
    { href: "#Skill", label: "Skill" },
    { href: "#Projects", label: "Projects" },
  ];

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={logoWrapStyle}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 1 L10.8 6.6 L17 6.6 L12 10.2 L13.8 15.8 L9 12.2 L4.2 15.8 L6 10.2 L1 6.6 L7.2 6.6 Z"
            fill="#E8A0A8"
            stroke="#E8A0A8"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
        <span style={logoTextStyle}>portfolio</span>
      </div>

      {/* Menu */}
      <ul style={menuStyle}>
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
        <CtaButton href="#contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;