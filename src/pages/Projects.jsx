import { useNavigate } from "react-router-dom";

import { projects } from "../data/projects";
import SelectorScreen from "../components/SelectorScreen";
import WorldEntry from "../components/WorldEntry";

import "../styles/Projects.css";

function parseDate(str) {
  const endPart = str.split("-").pop().trim();

  if (endPart === "Present") return new Date(9999, 11, 31);

  return new Date(endPart);
}

const sortedProjects = [...projects].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date)
);

export default function Projects() {
  return (
    <SelectorScreen
      title="Select Project"
      items={sortedProjects}
      filterFn={(project, query) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      }
      renderItem={(project, isSelected, onSelect) => (
        <WorldEntry
          key={project.id}
          project={project}
          selected={isSelected}
          onClick={onSelect}
        />
      )}
      getOpenPath={(project) => `/projects/${project.id}`}
      openLabel="Open Project"
    />
  );
}