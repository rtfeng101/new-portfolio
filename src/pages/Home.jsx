import "../styles/Home.css";

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
  return (
    <div className="minecraft-menu">
      <div className="panorama" />
      <div className="menu-container">
        <div className="logo-section">
          <h1 className="logo">
            Richard Feng
          </h1>

          <div className="splash-text">
            {randomSplash}
          </div>
        </div>

        <div className="button-group">
          <button className="mc-button">
            About Me
          </button>

          <button className="mc-button">
            Projects
          </button>

          <button className="mc-button">
            Experience
          </button>

          <button className="mc-button">
            Skills
          </button>

          <div className="bottom-buttons">
            <button className="mc-button small">
                Resume
            </button>

            <button className="mc-button small">
                Contact
            </button>
            </div>
        </div>

        <div className="bottom-bar">
          <div className="version">
            Portfolio v1.0
          </div>

          <div className="copyright">
            Built with React • 2026
          </div>
        </div>
      </div>
    </div>
  );
}