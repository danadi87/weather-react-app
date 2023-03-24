import React from "react";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-md-6">
          <h1 id="city">
            <strong>{props.data.city}</strong>
          </h1>
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>

          <div className="temp">
            <span className="temperature" id="temperature">
              <strong>{props.data.temperature}</strong>
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
  );
}
