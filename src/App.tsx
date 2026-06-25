import Navbar from "./components/navbar";
import SelfSection from "./components/selfsection";
import Journey from "./components/journey";
import Skill from "./components/skill";
import Project from "./components/project";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <SelfSection />
      <Journey />
      <Skill />
      <Project />
      <Contact/>
    </>
  );
}

export default App;