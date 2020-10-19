import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="text"
          placeholder="type a city"
          autofocus="on"
          id="input-city-form"
        />
        <input type="submit" id="search-submit" value="Search" />
      </form>
      <button>Current location</button>
    </div>
  );
}
