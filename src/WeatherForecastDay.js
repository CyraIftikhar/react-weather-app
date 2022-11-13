import React from "react";

export default function WeatherForecastDay() {
  function maxTemperature() {
    let termpature = Math.round(props.data.temperature.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let termpature = Math.round(props.data.temperature.min);
    return `${temperature}°`;
  }

  function day() {
    let date = newDate(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
