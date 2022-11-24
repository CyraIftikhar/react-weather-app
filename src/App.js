import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const now = new Date();
    console.log(now);
    if (now.getHours() >= 18 || now.getHours() <= 6) {
      setBackground("bg-dark");
    } else {
      setBackground("bg-light");
    }
  }, []);

  return (
    <div className={`App ${background}`}>
      <div className="container">
        <Weather defaultCity="London" />
        <footer className="text-center">
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
