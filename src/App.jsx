import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import ProjectDetail from "./pages/ProjectDetail";
import SkillDetail from "./pages/SkillDetail";
import ExperienceDetail from "./pages/ExperienceDetail";

import Panorama from "./components/Panorama";


export default function App() {
  return (
    <>
        <Panorama />
        <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:id" element={<ExperienceDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/:id" element={<SkillDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
        
    </>
  );
}