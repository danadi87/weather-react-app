import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CSS from "./index.css";
import App from "./App";
import Search from "./Search";
import Temperature from "./Temperature";
import WeatherConditions from "./WeatherConditions";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Search />
    <Temperature />
    <WeatherConditions />
  </StrictMode>
);
