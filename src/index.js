import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import "./assets/scss/app.scss";
import "react-bootstrap";
import "./assets/css/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
