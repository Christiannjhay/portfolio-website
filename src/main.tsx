import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage.tsx";
import IndividualProject from "./Pages/IndividualProject.tsx";
import AboutPage from "./Pages/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/projects/:projectId",
    element: <IndividualProject />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
