import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForcastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    const units = `metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay
                  data={dailyForecast}
                  units={props.celsius}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
