import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather />
        <footer>
          <a
            href="https://github.com/CyraIftikhar/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          coded by Cyra Iftikhar
        </footer>
      </div>
    </div>
  );
}
