import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.html";
import "./style/style.scss";

const rootElement = document.getElementById("main");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
