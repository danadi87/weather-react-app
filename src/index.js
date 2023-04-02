import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WeatherConditions from "./WeatherConditions";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className="page">
    <div className="container">
      <div className="data">
        <App />
        <WeatherConditions defaultCity="Barcelona" />
      </div>
    </div>
    <div className="footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/44312-mirela-daniela-dragulescu"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mirela Dragulescu
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/danadi87/weather-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  </React.StrictMode>
);
reportWebVitals();
