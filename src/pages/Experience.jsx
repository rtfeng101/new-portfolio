import { experiences } from "../data/experiences";
import SelectorScreen from "../components/SelectorScreen";
import WorldEntry from "../components/WorldEntry";

export default function Experiences() {
  return (
    <SelectorScreen
      title="Select Experience"
      items={experiences}
      filterFn={(experience, query) =>
        experience.title.toLowerCase().includes(query.toLowerCase())
      }
      renderItem={(experience, isSelected, onSelect) => (
        <WorldEntry
          key={experience.id}
          project={experience}   // WorldEntry is data-shape agnostic; reuse as-is
          selected={isSelected}
          onClick={onSelect}
        />
      )}
      getOpenPath={(experience) => `/experiences/${experience.id}`}
      openLabel="Open Experience"
    />
  );
}