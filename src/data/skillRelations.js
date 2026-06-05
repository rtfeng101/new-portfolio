import { projects } from "./projects";
import { experiences } from "./experiences";

export function getRelatedItems(skill) {
  const name = skill.title.toLowerCase();

  const relatedProjects = projects.filter((p) =>
    p.metadata.toLowerCase().includes(name)
  );

  const relatedExperiences = experiences.filter((e) =>
    e.metadata.toLowerCase().includes(name)
  );

  return { relatedProjects, relatedExperiences };
}