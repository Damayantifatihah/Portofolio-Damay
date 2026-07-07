import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { useLanguage } from "./bahasa/languageContext";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  accentBg: string;
}

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "fatihahdamay2@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=fatihahdamay2@gmail.com",
    icon: <FaEnvelope />,
    accent: "#C97142",
    accentBg: "#FDEEE5",
  },
  {
    label: "LinkedIn",
    value: "@damayanti",
    href: "https://www.linkedin.com/in/nur-fatihah-damayanti-4a7108339",
    icon: <FaLinkedin />,
    accent: "#4A7BAC",
    accentBg: "#E9F2FC",
  },
  {
    label: "Instagram",
    value: "@feerlsmay_",
    href: "https://instagram.com/feerlsmay_",
    icon: <FaInstagram />,
    accent: "#C05656",
    accentBg: "#FDEAEA",
  },
  {
    label: "GitHub",
    value: "@Damayantifatihah",
    href: "https://github.com/Damayantifatihah",
    icon: <FaGithub />,
    accent: "#5C3D3D",
    accentBg: "#F1EAE7",
  },
];

const contactStyles = `
  .contact-section {
    background: linear-gradient(180deg, #FFF8F6 0%, #FFFBF3 100%);
    padding: 90px 100px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    max-width: 600px;
    margin: 0 auto;
  }

  @keyframes contactPop {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .contact-card {
    position: relative;
    background: white;
    border: 1px solid #F6E4DE;
    border-radius: 18px;
    padding: 22px 22px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    box-shadow: 0 4px 16px rgba(243,128,129,0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    animation: contactPop 0.55s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    overflow: hidden;
  }

  .contact-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--card-accent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(243,128,129,0.18);
    border-color: transparent;
  }

  .contact-card:hover::before {
    opacity: 1;
  }

  .contact-card-icon {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .contact-card:hover .contact-card-icon {
    transform: scale(1.1) rotate(-6deg);
  }

  .contact-card-text {
    min-width: 0;
    text-align: left;
  }

  .contact-card-label {
    margin: 0 0 3px;
    font-size: 10.5px;
    color: #B08880;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .contact-card-value {
    margin: 0;
    font-size: 13.5px;
    color: #5C3D3D;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-footer-wrap {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .contact-footer-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #F2C4C8, transparent);
  }

  .contact-footer {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #B08880;
    letter-spacing: 0.4px;
    background: white;
    border: 1px solid #F6E4DE;
    padding: 8px 18px;
    border-radius: 50px;
    box-shadow: 0 2px 10px rgba(243,128,129,0.06);
  }

  .contact-footer-heart {
    display: inline-block;
    animation: heartBeat 1.8s ease-in-out infinite;
  }

  @keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.25); }
  }

  @media (max-width: 820px) {
    .contact-section { padding: 70px 40px; }
  }

  @media (max-width: 600px) {
    .contact-section { padding: 56px 24px; }

    .contact-grid {
      grid-template-columns: 1fr;
      max-width: 380px;
      gap: 14px;
    }

    .contact-card { padding: 18px 20px; }
  }

  @media (max-width: 380px) {
    .contact-section { padding: 48px 16px; }
  }
`;

function ContactCard({ item, index }: { item: ContactItem; index: number }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      className="contact-card"
      style={{
        ["--card-accent" as string]: item.accent,
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div
        className="contact-card-icon"
        style={{ background: item.accentBg, color: item.accent }}
      >
        {item.icon}
      </div>
      <div className="contact-card-text">
        <p className="contact-card-label">{item.label}</p>
        <p className="contact-card-value">{item.value}</p>
      </div>
    </a>
  );
}

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <style>{contactStyles}</style>

      <h2
        style={{
          margin: 0,
          fontSize: "2rem",
          fontWeight: 400,
          color: "#5C3D3D",
          fontFamily: "Georgia, serif",
        }}
      >
        {t.contactHeadingPrefix}{" "}
        <em style={{ color: "#F38081", fontStyle: "italic" }}>
          {t.contactHeadingHighlight}
        </em>
      </h2>

      <div
        style={{
          width: "36px",
          height: "2px",
          background: "#EFD780",
          borderRadius: "2px",
          margin: "14px auto",
        }}
      />

      <p
        style={{
          margin: "0 auto 48px",
          fontSize: "14px",
          color: "#B08880",
          lineHeight: 1.8,
          maxWidth: "380px",
        }}
      >
        {t.contactSubtitle}
      </p>

      {/* Grid kontak */}
      <div className="contact-grid">
        {contactItems.map((item, i) => (
          <ContactCard key={item.label} item={item} index={i} />
        ))}
      </div>

      {/* Footer */}
      <div className="contact-footer-wrap">
        <div className="contact-footer-line" />
        <p className="contact-footer">
          {t.contactFooter} <span className="contact-footer-heart">🌸</span> {t.contactFooterBy}
        </p>
      </div>
    </section>
  );
}

export default Contact;