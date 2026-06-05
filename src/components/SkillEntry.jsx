import ping1 from "../assets/ping_1.png";
import ping2 from "../assets/ping_2.png";
import ping3 from "../assets/ping_3.png";
import ping4 from "../assets/ping_4.png";
import ping5 from "../assets/ping_5.png";
import { getRelatedItems } from "../data/skillRelations";


const PING_IMAGES = [ping1, ping2, ping3, ping4, ping5];

function getPingImage(proficiency) {
  const index = Math.min(Math.floor(proficiency / 20), 4);
  return PING_IMAGES[index];
}

export default function SkillEntry({ project, skill, selected, onClick }) {
  const pingImg = getPingImage(skill.proficiency ?? 0);
  const { relatedProjects, relatedExperiences } = getRelatedItems(skill);
  console.log(relatedProjects, relatedExperiences);

  return (
    <div
      className={`selector-entry skill-entry ${selected ? "selected" : ""}`}
      onClick={onClick}
      >
      <img
        src={skill.thumbnail}
        alt={skill.title}
        className="world-thumb"
      />

      <div className="world-info">
        <div className="world-title">{skill.title}</div>
        <div className="world-date">{skill.date}</div>
        <div className="world-meta">{skill.metadata}</div>

        
        </div>

      <img
        src={pingImg}
        alt={`Proficiency: ${skill.proficiency}%`}
        className="skill-ping"
      />
    </div>
  );
}