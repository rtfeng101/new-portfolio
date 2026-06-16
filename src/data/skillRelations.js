import { projects } from "./projects";
import { experiences } from "./experiences";

export function getRelatedItems(skill) {
  const name = skill.title.toLowerCase();

  const relatedProjects = projects.filter((p) =>
    p.metadata
      .toLowerCase()
      .split("•")
      .map((s) => s.trim())
      .includes(name)
  );

  const relatedExperiences = experiences.filter((e) =>
    e.metadata
      .toLowerCase()
      .split("•")
      .map((s) => s.trim())
      .includes(name)
  );

  return { relatedProjects, relatedExperiences };
}