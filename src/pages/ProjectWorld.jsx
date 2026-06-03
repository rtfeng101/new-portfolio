import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/ProjectWorld.css";

export default function ProjectWorld() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div>
        <h1>World not found</h1>
        <button onClick={() => navigate("/projects")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="mc-world-screen">
      <div className="world-header">
        <h1>{project.name}</h1>
        <p>{project.worldType}</p>
      </div>

      <div className="world-body">
        <p>{project.description}</p>
      </div>

      <div className="world-controls">
        <button className="mc-button" onClick={() => navigate("/projects")}>
          Save & Quit to Title
        </button>
      </div>
    </div>
  );
}