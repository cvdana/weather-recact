import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);

  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
    setReady(true);
  }
  function search() {
    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const units = `metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const units = `metric`;
    const apiUrlLocation = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
    axios.get(apiUrlLocation).then(handleResponse);
  }
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row justify-content-center seekBlock">
          <div className="col-3 mt-2 location" onClick={getCurrentPosition}>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2xl"
              style={{ color: "#005086" }}
            />
          </div>
          <div className="col-6">
            <form action="submit" onSubmit={handleSubmit}>
              <div className="p-1 bg-transparent border border-warning rounded rounded-pill shadow-sm searchBox">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search City"
                    aria-describedby="button-addon1"
                    className="form-control border-0  bg-transparent rounded rounded-pill searchBar"
                    onChange={handleCityChange}
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link text-primary searchButton"
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlassLocation}
                        size="xl"
                        style={{ color: "#005086" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-3 mt-2  refresh"
            onClick={() => window.location.reload(false)}
          >
            <FontAwesomeIcon
              icon={faRotate}
              size="2xl"
              style={{ color: "#005086" }}
            />
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
