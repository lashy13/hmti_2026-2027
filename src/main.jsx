import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/hmti.css";
import "./styles/divisions.css";
import "./styles/contact.css";
import "./styles/events.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);