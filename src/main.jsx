import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import GlobalFunc from "./GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalFunc>
      <App />
    </GlobalFunc>
  </BrowserRouter>
);
