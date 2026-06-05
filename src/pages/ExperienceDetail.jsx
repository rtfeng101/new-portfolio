import { useParams } from "react-router-dom";
import { experiences } from "../data/experiences";
import DetailPage from "../components/DetailPage";

export default function experienceDetail() {
  const { id } = useParams();
  const experience = experiences.find((p) => p.id === id);

  if (!experience) return <div style={{ color: "white", padding: "2rem", fontFamily: "Minecraft" }}>experience not found.</div>;

  return (
    <DetailPage
      title={experience.title}
      date={experience.date}
      metadata={experience.metadata}
      sections={experience.sections ?? []}
      backPath="/experiences"
      backLabel="Back to experiences"
    />
  );
}