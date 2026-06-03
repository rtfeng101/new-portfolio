import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h1>CONTACT</h1>
      <p>Contact info placeholder</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}