import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap Icons CSS
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Bootstrap JS
import "bootstrap";
// Import popperjs et JS bootstrap
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
