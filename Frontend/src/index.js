import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // or any other theme you prefer
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Wrap from "./Wrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrap />
  </React.StrictMode>
);
