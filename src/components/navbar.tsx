import { NavLink, Link } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
}

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 48px",
  background: "rgba(255, 253, 246, 0.75)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(243, 128, 129, 0.15)",
  boxShadow: "0 4px 24px rgba(243, 128, 129, 0.06)",
  height: "68px",
  width: "100%",
  boxSizing: "border-box",
  position: "sticky",
  top: 0,
  zIndex: 50,
};

const logoWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "9px",
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  gap: "36px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  alignItems: "center",
};

const navFontStyles = `
  .navlink-item {
    position: relative;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 6px 2px;
    letter-spacing: 0.3px;
    transition: color 0.25s ease;
  }

  .navlink-item::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #F38081, #EFD780);
    border-radius: 2px;
    transform: translateX(-50%);
    transition: width 0.28s ease;
  }

  .navlink-item:hover::after,
  .navlink-item.active::after {
    width: 100%;
  }

  .navlink-item:hover {
    color: #4A7BAC !important;
  }

  .logo-text-grad {
    background: linear-gradient(90deg, #4A7BAC, #F38081);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 0.8px;
    font-family: Georgia, serif;
  }

  .cta-btn {
    text-decoration: none;
    color: #FFFFFF;
    background: linear-gradient(135deg, #F38081, #F79977);
    padding: 8px 22px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.4px;
    display: inline-block;
    box-shadow: 0 4px 14px rgba(243, 128, 129, 0.35);
    transition: transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(243, 128, 129, 0.45);
    filter: brightness(1.05);
  }

  .cta-btn.active {
    background: linear-gradient(135deg, #4A7BAC, #F38081);
  }

  .logo-icon {
    transition: transform 0.4s ease;
  }

  .logo-link:hover .logo-icon {
    transform: rotate(20deg) scale(1.1);
  }
`;

function NavItemLink({ to, label }: NavItem) {
  return (
    <li>
      <NavLink
        to={to}
        end={to === "/"}
        className={({ isActive }) => `navlink-item${isActive ? " active" : ""}`}
        style={({ isActive }) => ({
          color: isActive ? "#4A7BAC" : "#9C8880",
        })}
      >
        {label}
      </NavLink>
    </li>
  );
}

function CtaButton({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `cta-btn${isActive ? " active" : ""}`}
      >
        {label}
      </NavLink>
    </li>
  );
}

const Navbar: React.FC = () => {
  const links: NavItem[] = [
    { to: "/", label: "About" },
    { to: "/achievements", label: "Achievements" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav style={navStyle}>
      <style>{navFontStyles}</style>

      <Link to="/" className="logo-link" style={{ ...logoWrapStyle, textDecoration: "none" }}>
        <svg
          className="logo-icon"
          width="19"
          height="19"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          style={{ filter: "drop-shadow(0 0 6px rgba(243,128,129,.5))" }}
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFD780" />
              <stop offset="100%" stopColor="#F38081" />
            </linearGradient>
          </defs>
          <path
            d="M9 1 L10.8 6.6 L17 6.6 L12 10.2 L13.8 15.8 L9 12.2 L4.2 15.8 L6 10.2 L1 6.6 L7.2 6.6 Z"
            fill="url(#logoGrad)"
            stroke="url(#logoGrad)"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="logo-text-grad">portfolio</span>
      </Link>

      <ul style={menuStyle}>
        {links.map((link) => (
          <NavItemLink key={link.to} {...link} />
        ))}
        <CtaButton to="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;