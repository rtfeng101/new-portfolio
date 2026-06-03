import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h1>RESUME</h1>

      <p>Resume placeholder screen</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}