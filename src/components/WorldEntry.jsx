import netherStar from "../assets/icons/nether_star.gif";

export default function WorldEntry({ project, selected, onClick }) {
  return (
    <div
      className={`selector-entry ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="world-thumb-container">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="world-thumb"
        />

        {project.important && (
          <img
            src={netherStar}
            alt=""
            className="important-badge"
            style = {{
              animationDelay: `${Math.random() * 1}s`
            }}
          />
        )}
      </div>

      <div className="world-info">
        <div className="world-title">{project.title}</div>
        <div className="world-date">{project.date}</div>
        <div className="world-meta">{project.metadata}</div>
      </div>
    </div>
  );
}