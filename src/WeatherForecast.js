import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
  const longitude = props.coordinates.longitude;
  const latitude = props.coordinates.latitude;
  const units = `metric`;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
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
