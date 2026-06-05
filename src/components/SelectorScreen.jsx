import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useScrollableList } from "../hooks/useScrollableList";
import scrollerImg from "../assets/scroller.png";

import "../styles/Selector.css";

/**
 * SelectorScreen
 *
 * Generic Minecraft-styled selector layout used by both Projects and Experiences.
 *
 * Props
 * ─────
 * @param {string}   title          - Heading text, e.g. "Select Project"
 * @param {object[]} items          - Full unfiltered list of items
 * @param {function} filterFn       - (item, query) => boolean  — how to match search
 * @param {function} renderItem     - (item, isSelected, onSelect) => ReactNode
 * @param {string}   openPath       - Route to navigate to on "Open", receives selected item
 * @param {function} [getOpenPath]  - (selectedItem) => string  — overrides openPath
 * @param {string}   [openLabel]    - Button label (default "Open")
 * @param {string}   [cancelPath]   - Route for Cancel button (default "/")
 */
export default function SelectorScreen({
  title,
  items,
  filterFn,
  renderItem,
  getOpenPath,
  openLabel = "Open",
  cancelPath = "/",
}) {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const thumbRef = useRef(null);

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = items.filter((item) => filterFn(item, search));

  useScrollableList(listRef, thumbRef, [filtered.length]);

  return (
    <div className="mc-selector-screen">
      <h1 className="selector-title">{title}</h1>

      <input
        className="selector-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="selector-list" ref={listRef}>
        {filtered.map((item) =>
            renderItem(item, selected?.id === item.id, () =>
                setSelected(selected?.id === item.id ? null : item)
            )
        )}

        <img
          ref={thumbRef}
          className="custom-scrollbar-thumb"
          src={scrollerImg}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="selector-buttons">
        <button
          className="mc-button"
          disabled={!selected}
          onClick={() => navigate(getOpenPath(selected))}
        >
          {openLabel}
        </button>

        <button className="mc-button" onClick={() => navigate(cancelPath)}>
          Cancel
        </button>
      </div>
    </div>
  );
}