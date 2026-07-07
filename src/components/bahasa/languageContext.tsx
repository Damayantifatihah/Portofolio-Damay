import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Language = "en" | "id";

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
  },
};

export type TranslationType = typeof translations.en;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "id" : "en"));

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