import { useNavigate } from "react-router-dom";
import "../styles/DetailPage.css";
import "../styles/Contact.css";

import emailIcon from "../assets/icons/email.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import githubIcon from "../assets/icons/github.png";

const CONTACT = {
  blurb: "Feel free to reach out! Whether it's about a project, opportunity, or just to say hello — I'd love to hear from you.",
  email: "richardfeng101@gmail.com",
  linkedin: "https://linkedin.com/in/rtfeng101",
  github: "https://github.com/rtfeng101",
};

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="detail-screen">
      <div className="detail-header">
        <h1 className="detail-title">Contact</h1>
      </div>

      <div className="detail-content">
        <div className="detail-section text-block">
          <p>{CONTACT.blurb}</p>
        </div>
    
        <div className="detail-section contact-buttons-section">
          <a
            href={`mailto:${CONTACT.email}`}
            className="mc-button contact-btn"
          >
            <img src={emailIcon} alt="" className="contact-icon" />
            Email Me
          </a>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mc-button contact-btn"
          >
            <img src={linkedinIcon} alt="" className="contact-icon" />
            LinkedIn
          </a>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mc-button contact-btn"
          >
            <img src={githubIcon} alt="" className="contact-icon" />
            GitHub
          </a>
        </div>
      </div>

      <div className="detail-footer">
        <button
          className="mc-button contact-back"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}