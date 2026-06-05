import { useNavigate } from "react-router-dom";
import "../styles/DetailPage.css";

// ── Section renderers ──────────────────────────────────────────────────────

function ImageCenter({ src, caption }) {
  return (
    <div className="detail-section image-center">
      <div className="item-frame">
        <img src={src} alt={caption ?? ""} />
      </div>
      {caption && <p className="frame-caption">{caption}</p>}
    </div>
  );
}

function ImageLeft({ src, caption, text }) {
  return (
    <div className="detail-section image-left">
      <div className="frame-col">
        <div className="item-frame">
          <img src={src} alt={caption ?? ""} />
        </div>
        {caption && <p className="frame-caption">{caption}</p>}
      </div>
      <div className="text-col">
        <p>{text}</p>
      </div>
    </div>
  );
}

function TextLeft({ src, caption, text }) {
  return (
    <div className="detail-section text-left">
      <div className="text-col">
        <p>{text}</p>
      </div>
      <div className="frame-col">
        <div className="item-frame">
          <img src={src} alt={caption ?? ""} />
        </div>
        {caption && <p className="frame-caption">{caption}</p>}
      </div>
    </div>
  );
}

function TextBlock({ content }) {
  return (
    <div className="detail-section text-block">
      <p>{content}</p>
    </div>
  );
}

function BulletList({ heading, items }) {
  return (
    <div className="detail-section bullet-list">
      {heading && <h3 className="bullet-heading">{heading}</h3>}
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ── Section dispatcher ─────────────────────────────────────────────────────

function Section(section) {
  switch (section.type) {
    case "image-center":
      return <ImageCenter {...section} />;
    case "image-left":
      return <ImageLeft {...section} />;
    case "text-left":
      return <TextLeft {...section} />;
    case "text":
      return <TextBlock {...section} />;
    case "bullets":
      return <BulletList {...section} />;
    default:
      return null;
  }
}

// ── Main component ─────────────────────────────────────────────────────────

/**
 * DetailPage
 *
 * Props
 * ─────
 * @param {string}   title       - Item title
 * @param {string}   date        - Date string
 * @param {string}   metadata    - Subtitle / tag string
 * @param {object[]} sections    - Array of section objects (see Section dispatcher above)
 * @param {string}   backPath    - Route to navigate back to
 * @param {string}   [backLabel] - Back button label (default "Back")
 */
export default function DetailPage({
  title,
  date,
  metadata,
  sections = [],
  backPath,
  backLabel = "Back",
}) {
  const navigate = useNavigate();

  return (
    <div className="detail-screen">
      <div className="detail-header">
        <h1 className="detail-title">{title}</h1>
        <p className="detail-date">{date}</p>
        <p className="detail-meta">{metadata}</p>
      </div>

      <div className="detail-content">
        {sections.map((section, i) => (
          <Section key={i} {...section} />
        ))}
      </div>

      <div className="detail-footer">
        <button className="mc-button" onClick={() => navigate(backPath)}>
          {backLabel}
        </button>
      </div>
    </div>
  );
}