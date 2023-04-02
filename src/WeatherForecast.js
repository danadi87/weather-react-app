import React, { useState } from "react";
import WeatherForecast from "./weatherForecast.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
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
    const apiKey = "ea8dad867fe78e023f004dac42f9f5c2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="11%"
              />
            </div>
            <div className="forcast-max">19</div>
            <div className="forecast-min">10</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="11%"
              />
            </div>
            <div className="forcast-max">19</div>
            <div className="forecast-min">10</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="11%"
              />
            </div>
            <div className="forcast-max">19</div>
            <div className="forecast-min">10</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="11%"
              />
            </div>
            <div className="forcast-max">19</div>
            <div className="forecast-min">10</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="11%"
              />
            </div>
            <div className="forcast-max">19</div>
            <div className="forecast-min">10</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
                width="11%"
              />
            </div>
            <div className="forcast-max">19</div>
            <div className="forecast-min">10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
