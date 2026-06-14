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

function ImageRight({ src, caption, text }) {
  return (
    <div className="detail-section image-right">
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

function ImageGrid({ images }) {
  return (
    <div className="detail-section image-grid">
      {images.map((img, i) => (
        <div key={i} className="grid-item">
          <div className="item-frame">
            <img src={img.src} alt={img.caption ?? ""} />
          </div>
          {img.caption && <p className="frame-caption">{img.caption}</p>}
        </div>
      ))}
    </div>
  );
}

function PhotoList({ items }) {
  return (
    <div className="detail-section photo-list">
      {items.map((item, i) => (
        <div key={i} className="photo-list-item">
          <div className="item-frame photo-list-frame">
            <img src={item.src} alt={item.title ?? ""} />
          </div>
          <div className="photo-list-text">
            {item.title && <div className="world-title">{item.title}</div>}
            {item.date && <div className="world-date">{item.date}</div>}
            {item.text && <p>{item.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function TwoColumnText({ left, right }) {
  return (
    <div className="detail-section two-column-text">
      <div className="text-col">
        <p>{left}</p>
      </div>
      <div className="text-col">
        <p>{right}</p>
      </div>
    </div>
  );
}

function Banner({ src, caption }) {
  return (
    <div className="detail-section banner">
      <img src={src} alt={caption ?? ""} className="banner-img" />
      {caption && <p className="frame-caption">{caption}</p>}
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

function PdfViewer({ src, header, caption, height = "800px" }) {
  return (
    <div className="detail-section pdf-viewer">
      {header && <h2 className="pdf-header">{header}</h2>}
      <iframe src={src} title={caption ?? "PDF document"} style={{ width: "100%", height, border: "none" }} />
      {caption && <p className="frame-caption">{caption}</p>}
    </div>
  );
}

// ── Section dispatcher ─────────────────────────────────────────────────────

function Section(section) {
  switch (section.type) {
    case "image-center":  return <ImageCenter {...section} />;
    case "image-left":    return <ImageLeft {...section} />;
    case "image-right":   return <ImageRight {...section} />;
    case "image-grid":    return <ImageGrid {...section} />;
    case "photo-list":    return <PhotoList {...section} />;
    case "two-column-text": return <TwoColumnText {...section} />;
    case "banner":        return <Banner {...section} />;
    case "text":          return <TextBlock {...section} />;
    case "bullets":       return <BulletList {...section} />;
    case "pdf": return <PdfViewer {...section} />;
    default:              return null;
  }
}

// ── Main component ─────────────────────────────────────────────────────────

export default function DetailPage({
  title,
  date,
  metadata,
  sections = [],
  backPath,
  backLabel = "Back",
  themeClass = "", 
}) {
  const navigate = useNavigate();

  return (
    <div className={`detail-screen ${themeClass}`}>
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