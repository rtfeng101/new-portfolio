import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h1>EXPERIENCE</h1>
      <p>Work history placeholder</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}