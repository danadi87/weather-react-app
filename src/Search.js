import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import search from "./search.css";
import Card from "react-bootstrap/Card";

export default function Search(props) {
  return (

    <div className="Search">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="summary">
              <h1 id="city">
                <strong>{props.data.city}</strong>
              </h1>
              <h3>
                <FormattedDate date={props.data.date} />
              </h3>

              <div className="temp">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="conditions">
            <div className="card">
              <h1>
                <strong>More</strong>
              </h1>
              <ul>
                <li>
                  <strong>🌥️ Feels like:</strong>{" "}
                  {Math.round(props.data.feelsLike)}ºC
                </li>
                <li>
                  <strong>💦 Humidity:</strong> {props.data.humidity}%
                </li>
                <li>
                  <strong>💨 Wind:</strong> {Math.round(props.data.wind)} km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
