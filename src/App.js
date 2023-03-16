import "./App.css";

export default function App() {
  return (
    <div className="card-body">
      <h5>WeatherTime</h5>
      <h6>Today's forecast</h6>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Clear"
        id="icon"
      />
      <span className="description">
        <strong>Cloudy</strong>
      </span>
    </div>
  );
}
