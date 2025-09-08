import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      position="top-left"
      expand={false}
      closeButton
      duration={5000}
      toastOptions={{
        style: {
          color: "#35383e",
          fontSize: "16px",
        },
      }}
    />
    <App />
  </StrictMode>
);
