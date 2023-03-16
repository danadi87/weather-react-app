import "./weather-conditions.css";
import React, { useState } from "react";
import axios from "axios";

export default function WeatherConditions() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name[0],
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="conditions">
        <ul>
          <li>
            {" "}
            🌥️ Description:{" "}
            <span id="looks-like" className="description">
              {weatherData.description}
            </span>
          </li>
          <li>
            {" "}
            💦 Humidity:{" "}
            <span id="humidity" className="numbers">
              {weatherData.humidity}
            </span>
            <span className="units">%</span>
          </li>
          <li>
            {" "}
            💨 Wind:{" "}
            <span id="wind" className="numbers">
              {weatherData.wind}
            </span>
            <span className="units">km/h</span>
          </li>
        </ul>
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
