import { useNavigate } from "react-router-dom";
import { about } from "../data/about";
import "../styles/DetailPage.css";
import "../styles/About.css";

function Hero({ photo, name, tagline, subtext }) {
  return (
    <div className="about-hero">
      <div className="item-frame about-hero-frame">
        <img src={photo} alt={name} />
      </div>
      <div className="about-hero-text">
        <h1 className="about-hero-name">{name}</h1>
        {tagline && <p className="about-hero-tagline">{tagline}</p>}
        {subtext && <p className="about-hero-subtext">{subtext}</p>}
      </div>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  const sections = [
    { type: "text", content: about.bio },
    { type: "two-column-text", left: about.background.left, right: about.background.right },
    { type: "photo-list", items: about.hobbies },
    { type: "image-grid", images: about.photos },
    { type: "bullets", heading: "More About Me", items: about.extra },
  ];

  return (
    <div className="detail-screen">
      <Hero {...about.hero} />

      <div className="detail-content">
        {sections.map((section, i) => {
          switch (section.type) {
            case "text":
              return (
                <div key={i} className="detail-section text-block">
                  <p>{section.content}</p>
                </div>
              );
            case "two-column-text":
              return (
                <div key={i} className="detail-section two-column-text">
                  <div className="text-col"><p>{section.left}</p></div>
                  <div className="text-col"><p>{section.right}</p></div>
                </div>
              );
            case "photo-list":
              return (
                <div key={i} className="detail-section photo-list">
                  {section.items.map((item, j) => (
                    <div key={j} className="photo-list-item">
                      <div className="photo-list-frame">
                        <div className="item-frame">
                          <img src={item.src} alt={item.title ?? ""} />
                        </div>
                      </div>
                      <div className="photo-list-text">
                        {item.title && <div className="world-title">{item.title}</div>}
                        {item.text && <p>{item.text}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              );
            case "image-grid":
              return (
                <div key={i} className="detail-section image-grid">
                  {section.images.map((img, j) => (
                    <div key={j} className="grid-item">
                      <div className="item-frame">
                        <img src={img.src} alt={img.caption ?? ""} />
                      </div>
                      {img.caption && <p className="frame-caption">{img.caption}</p>}
                    </div>
                  ))}
                </div>
              );
            case "bullets":
              return (
                <div key={i} className="detail-section bullet-list">
                  {section.heading && <h3 className="bullet-heading">{section.heading}</h3>}
                  <ul>
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="detail-footer">
        <button className="mc-button about-back" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}