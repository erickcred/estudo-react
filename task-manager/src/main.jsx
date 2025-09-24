import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import TaskDetails from "./pages/TaskDetails.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/task/:taskId",
    element: <TaskDetails />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
