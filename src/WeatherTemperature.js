import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h3 className="col">
        <span>{Math.round(props.celsius)}</span>
        <small className="units">º C</small>
      </h3>
    </div>
  );
}
