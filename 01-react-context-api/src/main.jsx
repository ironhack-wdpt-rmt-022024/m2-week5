import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import ThemeContext from "./context/theme.context";
import { ContextWrapper } from "./context/theme.context";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>

      {/* Set up the context and provide some values via context */}
      <ContextWrapper>
        <App />
      </ContextWrapper>

    </Router>
  </React.StrictMode>
);

