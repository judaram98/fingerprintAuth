import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SystemRoutes from "./Routes/SystemRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SystemRoutes />
  </React.StrictMode>
);
