import WeatherConditions from "./WeatherConditions.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              id="icon"
            />
          </div>
          <div className="col-6">
            <p className="description">{weatherData.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <form className="search">
              <input
                type="search"
                class="form-control search-input"
                placeholder="Type a city..."
                autoComplete="off"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-3 p-0">
            <button
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            >
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1 id="city">
              <strong>{weatherData.city}</strong>
            </h1>
            <h3>
              <FormattedDate date={weatherData.date} />
            </h3>

            <div className="temp">
              <span className="temperature" id="temperature">
                <strong>{weatherData.temperature}</strong>
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
          </div>
          <div className="col-md-6">
            <div className="conditions">
              <ul>
                <li>
                  <strong>🌥️ Feels like:</strong> 28ºC
                </li>
                <li>
                  <strong>💦 Humidity:</strong> {weatherData.humidity}%
                </li>
                <li>
                  <strong>💨 Wind:</strong> {Math.round(weatherData.wind)} km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
