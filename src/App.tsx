import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SelfSection from "./components/selfsection";
import Skill from "./components/skill";
import Journey from "./components/journey";
import Achievements from "./components/archievements";
import Project from "./components/project";
import Contact from "./components/contact";
import SectionDivider from "./components/dividerSection";
import IntroAnimation from "./components/introAnimate";
import Contributions from "./components/contributions";

function AboutPage() {
  return (
    <>
      <SelfSection />
      <SectionDivider />
      <Skill />
      <SectionDivider />
      <Journey />
      <Contributions />
      <Contact />
    </>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroAnimation onFinish={() => setShowIntro(false)} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;