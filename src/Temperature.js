import "./temperature.css";
import React from "react";

export default function Temperature() {
  return (
    <div className="temp">
      <span className="temperature" id="temperature">
        <strong>28</strong>
      </span>
      <span className="units">
        <a href="#" id="celsius-link">
          ºC
        </a>{" "}
        |
        <a href="#" id="fahrenheit-link">
          ºF
        </a>
      </span>
    </div>
  );
}
