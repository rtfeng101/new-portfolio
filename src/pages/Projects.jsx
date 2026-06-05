import { useNavigate } from "react-router-dom";

import { projects } from "../data/projects";
import SelectorScreen from "../components/SelectorScreen";
import WorldEntry from "../components/WorldEntry";

export default function Projects() {
  return (
    <SelectorScreen
      title="Select Project"
      items={projects}
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