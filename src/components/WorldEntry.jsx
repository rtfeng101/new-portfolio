export default function WorldEntry({ project, selected, onClick }) {
  return (
    <div
      className={`selector-entry ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="world-thumb"
      />

      <div className="world-info">
        <div className="world-title">{project.title}</div>
        <div className="world-date">{project.date}</div>
        <div className="world-meta">{project.metadata}</div>
      </div>
    </div>
  );
}