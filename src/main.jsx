import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { hidePreloader } from "./utils/preloader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// The app is mounted, so the preloader can fade out once the page finishes loading.
hidePreloader();
