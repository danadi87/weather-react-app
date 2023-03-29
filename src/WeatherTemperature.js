import React, { useState } from "react";
import weatherTemperature from "./weatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature">
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="units">ºC</span> |
        <a href="/" onClick={convertToFahrenheit} id="fahrenheit-link">
          ºF
        </a>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature">
          <strong>{Math.round(fahrenheit())}</strong>
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            ºC
          </a>
        </span>
      </div>
    );
  }
}
