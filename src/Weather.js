import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png`,
      date: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row justify-content-center seekBlock">
          <div className="col-3 mt-2 location">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="col-6">
            <form action="submit" id="search-form">
              <div className="p-1 bg-light rounded rounded-pill shadow-sm searchBox">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search City"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-ligh rounded rounded-pill searchBar"
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
                        style={{ color: "#c8cfda" }}
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
              style={{ color: "#fff" }}
            />
          </div>
        </div>
        <div className="info">
          <h1>{weatherData.city}</h1>
          <h2>
            <FormattedDate date={weatherData.date} />
          </h2>
        </div>
        <div className="weather box">
          <div className=" frame">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="mainIcon"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-4 text-center maintemp">
              <h3 className="col">
                <span>{Math.round(weatherData.temperature)}</span>
                <small className="units">º C | F </small>
              </h3>
              <div className="w-100"></div>
              <h4 className="col condition">{weatherData.description}</h4>
            </div>
            <div className=" col-3 extraInformation">
              <h4 className="details">DETAILS</h4>
              <hr />
              <h4 className="temperatures">
                Feels like {Math.round(weatherData.feels)}º
              </h4>
              <h4 className=" humidity">
                Humidity {Math.round(weatherData.humidity)}%
              </h4>
              <h4 className=" wind">
                {" "}
                Wind {Math.round(weatherData.wind)} Km/h
              </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="weatherForecast">
          <h4 className="dayForecast">7-Day Forecast</h4>
        </div>
      </div>
    );
  } else {
    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const city = `London`;
    const units = `metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
