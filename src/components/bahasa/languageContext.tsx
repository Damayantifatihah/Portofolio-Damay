import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Language = "en" | "id";

const STORAGE_KEY = "portfolio-lang";

const translations = {
  en: {
    navAbout: "About",
    navAchievements: "Achievements",
    navProjects: "Projects",
    navContact: "Contact",

    selfRole: "Software Engineer Student",
    selfGreeting: "Hai, I'm",
    selfName: "Damayanti",
    selfDesc:
      "I'm someone who likes to keep learning new things, whether it's a design trick, a new tool, or just a better way to do something I already know. I enjoy making things look clean and neat, and I always try to figure out how to make a design or a piece of code simpler to understand. I'm still learning a lot, but I'm having fun along the way.",
    selfDownloadCV: "Download CV",

    skillHeadingPrefix: "My",
    skillHeadingHighlight: "Skills",
    skillSubtitle: "Technologies and tools I use to build applications",

    journeyHeadingPrefix: "My",
    journeyHeadingHighlight: "Journey",
    journeyDesc2023:
      "Started exploring web development by learning the fundamentals of HTML and CSS. Built several simple projects using HTML, native CSS, and a bit of JavaScript to understand website structure and page interactivity.",
    journeyDesc2025:
      "Started learning React with Vite and grasped key concepts like components, props, and state. Began using MySQL as a database during a competency test.",
    journeyDesc2026:
      "Started using TypeScript to write more structured and type-safe code. Learned Express.js for backend development, and explored databases like PostgreSQL and MySQL across several projects.",

    contribHeadingPrefix: "GitHub",
    contribHeadingHighlight: "Contributions",
    contribSubtitle: "A snapshot of my coding activity on GitHub throughout the year",
    contribBtn: "View GitHub Profile",

    contactHeadingPrefix: "Let's",
    contactHeadingHighlight: "Connect",
    contactSubtitle:
      "Got an idea, a project, or just want to say hi? Let's make something great together! 🚀",
    contactFooter: "Made with",
    contactFooterBy: "by Damayanti",

    // Intro / splash screen
    introGreeting: "Welcome,",
    introHighlight: "glad you're here",

    // Achievements section
    achHeading: "Achievements",
    achSubtitleNote: "certificate",
    achViewDetails: "VIEW DETAILS",

    ach1Title: "Simple E-commerce Website Competency Test",
    ach1Desc:
      "Certificate of completion for a simple e-commerce website competency test, covering product catalog structure through the basic checkout flow.",

    ach2Title: "Multi-Platform Application Development Competency Test",
    ach2Desc:
      "Competency test certificate for multi-platform application development, assessing the ability to design interfaces and application logic across devices.",

    ach3Title: "Industrial Visit to PT. Inti Persero and Institut Teknologi Bandung",
    ach3Desc:
      "Documentation of an industrial visit as part of workplace exposure and technology research in the telecommunications field.",

    ach4Title: "Certificate in Web Programming Fundamentals",
    ach4Desc: "Certificate in Web Programming Fundamentals.",

    ach5Title: "IBM SkillsBuild Certificate",
    ach5Desc:
      "Certificate from IBM SkillsBuild for completing a course related to software development.",

    // Projects section
    projHeadingPrefix: "My",
    projHeadingHighlight: "Projects",
    projEmptyState: "No projects in this category yet.",
    projLiveDemo: "Live Demo",
    projViewDesign: "View Design",
    projCode: "Code",

    catAll: "All",
    catWebsite: "Website",
    catDesign: "Design",
    catApplication: "Application",

    proj1Label: "Mobile · Development",
    proj1Title: "Community Reporting (Mobile)",
    proj1Desc:
      "Mobile version of the Laporin Aja platform, optimized so people can submit reports directly from their phone quickly and easily.",

    proj2Label: "Web · Development",
    proj2Title: "Community Reporting (Website)",
    proj2Desc:
      "A web-based community reporting platform for quickly and transparently reporting local issues.",

    proj3Label: "Web · Development",
    proj3Title: "Simple E-Commerce",
    proj3Desc:
      "A simple online store website featuring a product catalog, shopping cart, and checkout process.",

    proj4Label: "Web · Development",
    proj4Title: "Digital Library",
    proj4Desc:
      "A digital library application for searching, borrowing, and managing book collections online.",

    proj5Label: "UI/UX Design",
    proj5Title: "Glow & Flow",
    proj5Desc:
      "UI/UX design for the Glow & Flow app, covering user flow, wireframes, through to high-fidelity designs.",

    proj6Label: "Web · Development",
    proj6Title: "Grab Landing Page",
    proj6Desc:
      "A landing page themed around transportation & delivery services, built as a Dicoding course submission.",

    proj7Label: "Digital Illustration",
    proj7Title: "Anya Fanart Illustration",
    proj7Desc:
      "A character illustration project inspired by Anya, created digitally using Adobe Illustrator to explore linework, color, and shading.",
  },
  id: {
    navAbout: "Tentang",
    navAchievements: "Pencapaian",
    navProjects: "Proyek",
    navContact: "Kontak",

    selfRole: "Siswa Rekayasa Perangkat Lunak",
    selfGreeting: "Hai, aku",
    selfName: "Damayanti",
    selfDesc:
      "Aku orang yang suka terus belajar hal baru, entah itu trik desain, tools baru, atau cara yang lebih baik buat ngerjain sesuatu yang udah aku tahu. Aku senang bikin tampilan yang rapi dan bersih, dan selalu berusaha bikin desain atau kode jadi lebih mudah dipahami. Aku masih terus belajar, tapi aku sangat menikmati prosesnya.",
    selfDownloadCV: "Unduh CV",

    skillHeadingPrefix: "Keahlian",
    skillHeadingHighlight: "Saya",
    skillSubtitle: "Teknologi dan tools yang saya gunakan untuk membangun aplikasi dan website",

    journeyHeadingPrefix: "Perjalanan",
    journeyHeadingHighlight: "Saya",
    journeyDesc2023:
      "Mulai menjelajahi web development dengan mempelajari dasar-dasar HTML dan CSS. Membangun beberapa proyek sederhana menggunakan HTML, CSS native, dan sedikit JavaScript untuk memahami struktur website dan interaktivitas halaman.",
    journeyDesc2025:
      "Mulai belajar React dengan Vite dan memahami konsep dasar seperti components, props, dan state. Mulai menggunakan MySQL sebagai database saat uji kompetensi.",
    journeyDesc2026:
      "Mulai menggunakan TypeScript untuk menulis kode yang lebih terstruktur dan type-safe. Mempelajari Express.js untuk backend development, dan mengeksplorasi database seperti PostgreSQL dan MySQL di beberapa proyek.",

    contribHeadingPrefix: "Kontribusi",
    contribHeadingHighlight: "GitHub",
    contribSubtitle: "Cuplikan aktivitas coding saya di GitHub sepanjang tahun",
    contribBtn: "Lihat Profil GitHub",

    contactHeadingPrefix: "Mari",
    contactHeadingHighlight: "Terhubung",
    contactSubtitle:
      "Punya ide, proyek, atau cuma mau say hi? Yuk bikin sesuatu yang keren bareng!",
    contactFooter: "Dibuat dengan",
    contactFooterBy: "oleh Damayanti",

    // Intro / splash screen
    introGreeting: "Selamat datang,",
    introHighlight: "senang kamu di sini",

    // Achievements section
    achHeading: "Pencapaian",
    achSubtitleNote: "sertifikat",
    achViewDetails: "LIHAT DETAIL",

    ach1Title: "Uji Kompetensi Website E-commerce Sederhana",
    ach1Desc:
      "Sertifikat kelulusan uji kompetensi pembuatan website e-commerce sederhana, mencakup struktur katalog produk hingga alur checkout dasar.",

    ach2Title: "Uji Kompetensi Pengembangan Aplikasi Multi-Platform",
    ach2Desc:
      "Sertifikat uji kompetensi pengembangan aplikasi multi-platform, menilai kemampuan merancang antarmuka dan logika aplikasi di berbagai perangkat.",

    ach3Title: "Kunjungan Industri ke PT. Inti Persero dan Institut Teknologi Bandung",
    ach3Desc:
      "Dokumentasi kunjungan industri sebagai bagian dari pengenalan dunia kerja dan riset teknologi di bidang telekomunikasi.",

    ach4Title: "Sertifikat Dasar-Dasar Pemrograman Web",
    ach4Desc: "Sertifikat Dasar-Dasar Pemrograman Web.",

    ach5Title: "Sertifikat IBM SkillsBuild",
    ach5Desc:
      "Sertifikat dari IBM SkillsBuild untuk penyelesaian kursus terkait pengembangan perangkat lunak.",

    // Projects section
    projHeadingPrefix: "Proyek",
    projHeadingHighlight: "Saya",
    projEmptyState: "Belum ada proyek di kategori ini.",
    projLiveDemo: "Lihat Demo",
    projViewDesign: "Lihat Desain",
    projCode: "Kode",

    catAll: "Semua",
    catWebsite: "Website",
    catDesign: "Desain",
    catApplication: "Aplikasi",

    proj1Label: "Mobile · Pengembangan",
    proj1Title: "Pelaporan Masyarakat (Mobile)",
    proj1Desc:
      "Versi mobile dari platform Laporin Aja, dioptimalkan agar masyarakat bisa mengirim laporan langsung dari ponsel dengan cepat dan mudah.",

    proj2Label: "Web · Pengembangan",
    proj2Title: "Pelaporan Masyarakat (Website)",
    proj2Desc:
      "Platform pelaporan masyarakat berbasis web untuk melaporkan masalah lokal secara cepat dan transparan.",

    proj3Label: "Web · Pengembangan",
    proj3Title: "Toko Online Sederhana",
    proj3Desc:
      "Website toko online sederhana dengan katalog produk, keranjang belanja, dan proses checkout.",

    proj4Label: "Web · Pengembangan",
    proj4Title: "Perpustakaan Digital",
    proj4Desc:
      "Aplikasi perpustakaan digital untuk mencari, meminjam, dan mengelola koleksi buku secara online.",

    proj5Label: "Desain UI/UX",
    proj5Title: "Glow & Flow",
    proj5Desc:
      "Desain UI/UX untuk aplikasi Glow & Flow, mencakup user flow, wireframe, hingga desain high-fidelity.",

    proj6Label: "Web · Pengembangan",
    proj6Title: "Landing Page Grab",
    proj6Desc:
      "Landing page bertema layanan transportasi & pengiriman, dibuat sebagai submission course Dicoding.",

    proj7Label: "Ilustrasi Digital",
    proj7Title: "Anya Fanart Illustration",
    proj7Desc:
      "Proyek ilustrasi karakter terinspirasi dari Anya, dibuat secara digital menggunakan Adobe Illustrator untuk mengeksplorasi garis, warna, dan shading.",
  },
};

export type TranslationType = typeof translations.en;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Reads the saved language from localStorage on first load.
// Falls back to "en" if nothing is saved yet, the value is invalid,
// or localStorage isn't available (e.g. during server-side rendering).
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch {
    // localStorage might be blocked (privacy mode, etc.) — just ignore it.
  }
  return "en";
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Language = prev === "en" ? "id" : "en";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore write errors (e.g. storage full or blocked).
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};