import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <>
        <div className="panorama" />
        <Routes>
        <Route path="/" element={<Home />} />

        {/* Minecraft "Singleplayer Menu" equivalent */}
        <Route path="/projects" element={<Projects />} />


        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
    </>
  );
}