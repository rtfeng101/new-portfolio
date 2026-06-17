import { useParams } from "react-router-dom";
import { skills } from "../data/skills";
import { getRelatedItems } from "../data/skillRelations";
import DetailPage from "../components/DetailPage";

function parseDate(str) {
  const endPart = str.split("-").pop().trim();

  if (endPart === "Present") return new Date(9999, 11, 31);
  
  return new Date(endPart); 
}

export default function SkillDetail() {
  const { id } = useParams();
  const skill = skills.find((s) => s.id === id);

  if (!skill) return <div style={{ color: "white", padding: "2rem", fontFamily: "Minecraft" }}>Skill not found.</div>;

  const { relatedProjects, relatedExperiences } = getRelatedItems(skill);

  const sortedRelatedProjects = [...relatedProjects].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const sortedRelatedExperiences = [...relatedExperiences].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const sections = [
    ...(skill.sections ?? []),
    ...(sortedRelatedProjects.length > 0
      ? [{ type: "bullets", heading: "Related Projects", items: sortedRelatedProjects.map((p) => p.title) }]
      : []),
    ...(sortedRelatedExperiences.length > 0
      ? [{ type: "bullets", heading: "Related Experiences", items: sortedRelatedExperiences.map((e) => e.title) }]
      : []),
  ];
  console.log(sections);

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