import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import DetailPage from "../components/DetailPage";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div style={{ color: "white", padding: "2rem", fontFamily: "Minecraft" }}>Project not found.</div>;

  return (
    <DetailPage
      title={project.title}
      date={project.date}
      metadata={project.metadata}
      sections={project.sections ?? []}
      backPath="/projects"
      backLabel="Back to Projects"
    />
  );
}