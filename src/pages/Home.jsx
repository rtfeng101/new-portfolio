import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const splashTexts = [
  "Computer Science Graduate!",
  "Full Stack Developer!",
  "Built with React!",
  "Coffee Powered!",
  "Open to Work!",
];

const randomSplash =
  splashTexts[Math.floor(Math.random() * splashTexts.length)];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="minecraft-menu">
      <div className="menu-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />

          <div className="splash-text">{randomSplash}</div>
        </div>

        <div className="button-group">
          <button className="mc-button" onClick={() => navigate("/about")}>
            About Me
          </button>

          <button className="mc-button" onClick={() => navigate("/projects")}>
            Projects
          </button>

          <button className="mc-button" onClick={() => navigate("/experiences")}>
            Experiences
          </button>

          <button className="mc-button" onClick={() => navigate("/skills")}>
            Skills
          </button>

          <div className="bottom-buttons">
            <button className="mc-button small" onClick={() => navigate("/resume")}>
              Resume
            </button>

            <button className="mc-button small" onClick={() => navigate("/contact")}>
              Contact
            </button>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="version-block">
            <div className="version">Portfolio v1.0</div>
            <div className="disclaimer">Fan project • Not affiliated with Mojang/Microsoft</div>
          </div>
          <div className="copyright">Built with React • 2026</div>
        </div>
      </div>
    </div>
  );
}