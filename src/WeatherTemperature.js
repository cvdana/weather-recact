import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (units === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <h3 className="col">
          <span>{Math.round(props.celsius)}</span>
          <small className="units">
            º C |
            <a href="/" onClick={convertToFahrenheit}>
              º F
            </a>
          </small>
        </h3>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h3 className="col">
          <span>{Math.round(fahrenheit())}</span>
          <small className="units">
            <a href="/" onClick={convertToCelsius}>
              º C
            </a>
            | º F
          </small>
        </h3>
      </div>
    );
  }
}
