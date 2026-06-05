import { useParams } from "react-router-dom";
import { skills } from "../data/skills";
import { getRelatedItems } from "../data/skillRelations";
import DetailPage from "../components/DetailPage";

export default function SkillDetail() {
  const { id } = useParams();
  const skill = skills.find((s) => s.id === id);

  if (!skill) return <div style={{ color: "white", padding: "2rem", fontFamily: "Minecraft" }}>Skill not found.</div>;

  const { relatedProjects, relatedExperiences } = getRelatedItems(skill);

  const sections = [
    ...(skill.sections ?? []),
    ...(relatedProjects.length > 0
      ? [{ type: "bullets", heading: "Related Projects", items: relatedProjects.map((p) => p.title) }]
      : []),
    ...(relatedExperiences.length > 0
      ? [{ type: "bullets", heading: "Related Experiences", items: relatedExperiences.map((e) => e.title) }]
      : []),
  ];

  return (
    <DetailPage
      title={skill.title}
      date={skill.date}
      metadata={skill.metadata}
      sections={sections}
      backPath="/skills"
      backLabel="Back to Skills"
    />
  );
}