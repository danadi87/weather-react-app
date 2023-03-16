import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="card-body">
      <h5>Weather App</h5>
      <h6>Today's forecast</h6>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Clear"
        id="icon"
        rel="noreferrer"
      />
      <span className="description">
        <strong>Cloudy</strong>
      </span>
    </div>
  );
}
