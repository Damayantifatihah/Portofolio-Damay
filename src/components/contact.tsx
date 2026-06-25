import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { useState } from "react";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "fatihahdamay2@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=fatihahdamay2@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "LinkedIn",
    value: "@damayanti",
    href: "https://www.linkedin.com/in/nur-fatihah-damayanti-4a7108339",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    value: "@feerlsmay_",
    href: "https://instagram.com/feerlsmay_",
    icon: <FaInstagram />,
  },
  {
    label: "GitHub",
    value: "@Damayantifatihah",
    href: "https://github.com/Damayantifatihah",
    icon: <FaGithub />,
  },
];

function ContactCard({ item }: { item: ContactItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        border: "1px solid #F2DDD9",
        borderRadius: "16px",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        textDecoration: "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 24px rgba(217,123,138,0.15)"
          : "0 2px 12px rgba(217,123,138,0.07)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "#FDE8EC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          color: "#D97B8A",
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>
      <div>
        <p style={{ margin: "0 0 3px", fontSize: "11px", color: "#D4A0A8", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500 }}>
          {item.label}
        </p>
        <p style={{ margin: 0, fontSize: "14px", color: "#7A5058", fontWeight: 500 }}>
          {item.value}
        </p>
      </div>
    </a>
  );
}

function Contact() {
  return (
    <section style={{ backgroundColor: "#FFF8F6", padding: "80px 100px", textAlign: "center" }}>
      <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: 400, color: "#5C3D3D", fontFamily: "Georgia, serif" }}>
        Let's <em style={{ color: "#D97B8A", fontStyle: "italic" }}>Connect</em>
      </h2>
      <div style={{ width: "36px", height: "2px", background: "#F2C4C8", borderRadius: "2px", margin: "14px auto" }} />
      <p style={{ margin: "0 auto 48px", fontSize: "14px", color: "#B08880", lineHeight: 1.8, maxWidth: "380px" }}>
        Terbuka untuk kolaborasi, peluang kerja, atau sekadar say hi — jangan ragu untuk reach out! 🌸
      </p>

      {/* Grid kontak */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "14px",
        maxWidth: "540px",
        margin: "0 auto",
      }}>
        {contactItems.map((item) => (
          <ContactCard key={item.label} item={item} />
        ))}
      </div>

      {/* Footer kecil */}
      <p style={{ margin: "48px 0 0", fontSize: "12px", color: "#D4A0A8" }}>
        Made with 🌸 by Damayanti
      </p>
    </section>
  );
}

export default Contact;