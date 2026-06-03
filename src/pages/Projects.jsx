import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="mc-screen">
      <div className="mc-panel">
        <h1 className="title">Select World</h1>

        <div className="world-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="world-entry mc-button"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="world-name">{project.name}</div>
              <div className="world-meta">{project.worldType}</div>
            </div>
          ))}
        </div>

        <button className="mc-button small" onClick={() => navigate("/")}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}