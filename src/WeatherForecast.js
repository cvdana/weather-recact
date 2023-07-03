import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <WeatherIcon code="shower-rain-day" size={50} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-maxtemp">19º</span> |
            <span className="WeatherForecast-mintemp"> 10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
