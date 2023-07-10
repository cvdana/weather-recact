import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    const maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}º`;
  }
  function minTemperature() {
    const minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}º`;
  }

  function day() {
    const date = new Date(props.data.time * 1000);
    const day = date.getDay();
    const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
    return days[day];
  }

  return (
    <div className="border border-1  rounded  mb-4">
      <div className="WeatherForecast-day ">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={50} />
      <div className="WeatherForecast-temperatures ">
        <span className="WeatherForecast-maxtemp">{maxTemperature()}</span> |
        <span className="WeatherForecast-mintemp">{minTemperature()}</span>
      </div>
    </div>
  );
}
