import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              width="50px"
              className="float-left"
            ></img>
          </div>
          <div className="col-6 float-left">
            <WeatherTemperature
              unit={unit}
              setUnit={setUnit}
              celsius={props.data.temperature}
            />
          </div>
          {unit === "celsius" ? (
            <ul>
              <li>Feels like: {Math.round(props.data.feelsLike)}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          ) : (
            <ul>
              <li>
                Feels like: {Math.round((props.data.feelsLike * 9) / 5 + 32)}
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
