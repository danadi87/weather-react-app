import CSS from "./weather-conditions.css";

export default function WeatherConditions() {
  return (
    <div className="conditions">
      <li>
        {" "}
        🌥️ Feels like:{" "}
        <span id="feels-like" className="numbers">
          28
        </span>
        <span className="units">ºC</span>
      </li>
      <li>
        {" "}
        💦 Humidity:{" "}
        <span id="humidity" className="numbers">
          80
        </span>
        <span className="units">%</span>
      </li>
      <li>
        {" "}
        💨 Wind:{" "}
        <span id="wind" className="numbers">
          9
        </span>
        <span className="units">km/h</span>
      </li>
    </div>
  );
}
