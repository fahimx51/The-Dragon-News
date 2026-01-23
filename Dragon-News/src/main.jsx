import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </StrictMode>
);
