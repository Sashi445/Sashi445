import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import Clarity from "@microsoft/clarity";

const projectId = import.meta.env.VITE_MICROSOFT_CLARITY_API_KEY;

if (projectId) {
  Clarity.init(projectId);
}

createRoot(document.getElementById("root")!).render(<App />);
