import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="card-body">
        <h5>React Weather App</h5>
        <h6>Today's forecast</h6>
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt={weatherData.description}
          id="icon"
          rel="noreferrer"
          className="float-left"
        />
        <span className="description text-capitalize">
          <strong>{weatherData.description}</strong>
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
