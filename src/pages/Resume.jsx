import { useNavigate } from "react-router-dom";
import "../styles/DetailPage.css";
import "../styles/Resume.css";

const RESUME_PDF = "/files/FengResume.pdf";
const BLURB = "A brief blurb about yourself and your resume here. Feel free to mention your focus area, years of experience, or what you're currently looking for.";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="detail-screen">
      <div className="detail-header">
        <h1 className="detail-title">Resume</h1>
      </div>

      <div className="detail-content">
        <div className="detail-section text-block">
          <p>{BLURB}</p>
        </div>

        <div className="detail-section resume-viewer-section">
          <iframe
            src={RESUME_PDF}
            className="resume-iframe"
            title="Resume PDF"
          />
        </div>

        <div className="resume-actions">
          <a
            href={RESUME_PDF}
            download="resume.pdf"
            className="mc-button resume-download"
          >
            Download Resume
          </a>

          <button
            className="mc-button resume-back"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}