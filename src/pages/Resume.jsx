import { useNavigate } from "react-router-dom";
import "../styles/DetailPage.css";
import "../styles/Resume.css";

const RESUME_PDF = "/files/FengResume.pdf";
const BLURB = "I graduated from UW-Madison in May 2026 with two B.S. degrees in Computer Science and Data Science with a minor in Math. \
  I am currently seeking full-time software engineering or data science related opportunities. Take a look at my resume and if you're interested, this website has extensive detail about everything and more! \
  ";

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