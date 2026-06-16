import { skills } from "../data/skills";
import SelectorScreen from "../components/SelectorScreen";
import SkillEntry from "../components/SkillEntry";

import "../styles/Skills.css";

export default function Skills() {
  return (
    <SelectorScreen
      title="Select Skill"
      items={[...skills].sort((a, b) => b.proficiency - a.proficiency)}
      filterFn={(skill, query) =>
        skill.title.toLowerCase().includes(query.toLowerCase())
      }
      renderItem={(skill, isSelected, onSelect) => (
        <SkillEntry
          key={skill.id}
          skill={skill}
          selected={isSelected}
          onClick={onSelect}
        />
      )}
      getOpenPath={(skill) => `/skills/${skill.id}`}
      openLabel="Open Skill"
    />
  );
}