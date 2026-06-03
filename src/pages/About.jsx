import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h1>ABOUT</h1>
      <p>About Me page</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}