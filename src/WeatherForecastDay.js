import React from "react";
import weatherForecastDay from "./weatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="card-forecast">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img
          src={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
          id="icon"
          width="15"
        />
      </div>
      <span className="forecast-max">{maxTemperature()}</span>
      <span className="forecast-min">{minTemperature()}</span>
    </div>
  );
}
