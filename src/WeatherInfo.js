import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="current-description">
        <li>
          {" "}
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="container">
        <div className="row mt-3">
          <div className="col-4 float-right">
            <WeatherTemperature
              unit={unit}
              setUnit={setUnit}
              celsius={props.data.temperature}
            />
          </div>
          <div className="col-4">
            <div className="clearfix">
              <div className="text-capitalize text-center">
                {props.data.description}
              </div>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left current-icon"
              ></img>
            </div>
          </div>

          <div className="col-4">
            {unit === "celsius" ? (
              <ul className="conditions">
                <li>
                  Feels like:{" "}
                  <strong>{Math.round(props.data.feelsLike)}°C</strong>
                </li>
                <li>
                  Humidity: <strong>{props.data.humidity}%</strong>
                </li>
                <li>
                  Wind: <strong>{Math.round(props.data.wind)} mph</strong>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  Feels like:{" "}
                  <strong>
                    {Math.round((props.data.feelsLike * 9) / 5 + 32)}
                    °F
                  </strong>
                </li>
                <li>
                  Humidity: <strong>{props.data.humidity}%</strong>
                </li>
                <li>
                  Wind: <strong>{Math.round(props.data.wind)} mph</strong>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
