import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="select-city">
      <form className="search-form" id="search-form">
        <input
          type="search"
          id="city-input"
          placeholder="Type a city..."
          autoComplete="off"
          autoFocus="on"
        />
        <button type="submit" className="search" value="Search">
          Search
        </button>
        <button type="submit" className="current-location" value="search">
          Current location
        </button>
      </form>

      <h1 id="city">
        <strong>Barcelona</strong>
      </h1>
      <h3>Sunday 15:32</h3>
    </div>
  );
}
