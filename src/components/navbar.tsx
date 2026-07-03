import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface NavItem {
  to: string;
  label: string;
}

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(255, 253, 246, 0.75)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(243, 128, 129, 0.15)",
  boxShadow: "0 4px 24px rgba(243, 128, 129, 0.06)",
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

const navFontStyles = `
  .navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px;
    height: 68px;
    width: 100%;
    box-sizing: border-box;
  }

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
    flex-shrink: 0;
  }

  .logo-link:hover .logo-icon {
    transform: rotate(20deg) scale(1.1);
  }

  .menu-list {
    display: flex;
    gap: 36px;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .hamburger-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    z-index: 60;
  }

  .hamburger-bar {
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #4A7BAC, #F38081);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .hamburger-btn.open .hamburger-bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger-btn.open .hamburger-bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger-btn.open .hamburger-bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  @media (max-width: 768px) {
    .navbar-inner {
      padding: 0 20px;
      height: 60px;
    }

    .hamburger-btn {
      display: flex;
    }

    .menu-list {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      background: rgba(255, 253, 246, 0.98);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(243, 128, 129, 0.15);
      box-shadow: 0 12px 24px rgba(243, 128, 129, 0.08);
      padding: 12px 20px 20px;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      transition: max-height 0.32s ease, opacity 0.25s ease;
    }

    .menu-list.open {
      max-height: 320px;
      opacity: 1;
      pointer-events: auto;
    }

    .menu-list li {
      width: 100%;
    }

    .navlink-item {
      display: block;
      padding: 12px 4px;
      font-size: 15px;
      width: 100%;
    }

    .cta-btn {
      display: block;
      text-align: center;
      margin-top: 6px;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

function DfLogo() {
  return (
    <svg
      className="logo-icon"
      width="24"
      height="24"
      viewBox="0 0 72 72"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(74,123,172,.35))" }}
    >
      <defs>
        <linearGradient id="navDfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A7BAC" />
          <stop offset="100%" stopColor="#F38081" />
        </linearGradient>
      </defs>
      {/* Spine bersama D & F */}
      <rect x="25" y="10" width="7" height="52" rx="3.5" fill="url(#navDfGrad)" />
      {/* Lengan atas F */}
      <rect x="25" y="10" width="27" height="7" rx="3.2" fill="url(#navDfGrad)" />
      {/* Lengan tengah F */}
      <rect x="25" y="27" width="21" height="7" rx="3.2" fill="url(#navDfGrad)" />
      {/* Perut D */}
      <path
        d="M32,35 C55,35 58,44 58,48 C58,52 55,61 32,61 Z"
        fill="url(#navDfGrad)"
      />
    </svg>
  );
}

function NavItemLink({ to, label, onClick }: NavItem & { onClick?: () => void }) {
  return (
    <li>
      <NavLink
        to={to}
        end={to === "/"}
        onClick={onClick}
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

function CtaButton({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => `cta-btn${isActive ? " active" : ""}`}
      >
        {label}
      </NavLink>
    </li>
  );
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Tutup menu mobile setiap kali pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links: NavItem[] = [
    { to: "/", label: "About" },
    { to: "/achievements", label: "Achievements" },
    { to: "/projects", label: "Projects" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={navStyle}>
      <style>{navFontStyles}</style>

      <div className="navbar-inner">
        <div className="logo-link" style={logoWrapStyle}>
          <DfLogo />
          <span className="logo-text-grad">portfolio</span>
        </div>

        <button
          type="button"
          className={`hamburger-btn${isOpen ? " open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        <ul className={`menu-list${isOpen ? " open" : ""}`}>
          {links.map((link) => (
            <NavItemLink key={link.to} {...link} onClick={closeMenu} />
          ))}
          <CtaButton to="/contact" label="Contact" onClick={closeMenu} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;