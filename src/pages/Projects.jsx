import { useNavigate } from "react-router-dom";

import { projects } from "../data/projects";
import SelectorScreen from "../components/SelectorScreen";
import WorldEntry from "../components/WorldEntry";

import "../styles/Projects.css";

const months = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  July: 6,
  Jul: 6,
  Aug: 7,
  Sept: 8,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseDate(str) {
  const endPart = str.split("-").pop().trim();

  if (endPart === "Present") {
    return new Date(9999, 11, 31);
  }

  const [month, year] = endPart.split(" ");

  return new Date(Number(year), months[month]);
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