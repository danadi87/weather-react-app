import WeatherConditions from "./WeatherConditions.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import React, { useState } from "react";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "a867e25f2d83db579421a57fd8e937ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="41%"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <p className="description" width="130%">
                {weatherData.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="search"
                class="form-control search-input"
                placeholder="Type a city..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
        <Search data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
