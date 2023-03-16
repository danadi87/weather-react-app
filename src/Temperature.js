import "./temperature.css";
import React, { useState } from "react";
import axios from "axios";

export default function Temperature() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }
  if (ready) {
    return (
      <div className="temp">
        <span className="temperature" id="temperature">
          <strong>{temperature}</strong>
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
  } else {
    const apiKey = "ff7ebdc6e7879a14c24fac0169b98522";
    let city = "Barcelona";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
