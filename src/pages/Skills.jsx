import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h1>SKILLS</h1>
      <p>Skills placeholder</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}