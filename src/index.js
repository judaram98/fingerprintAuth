import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SystemRoutes from "./Routes/SystemRoutes";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FpjsProvider
    loadOptions={{
      apiKey: "xTa6pK8l8gy9vN3eoqUA",
    }}
  >
    <SystemRoutes />
  </FpjsProvider>
);
