import React from "react";
import axios from "axios";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Weather() {
  function handleResponse(response) {
    alert(`Temperature in London is ${response.data.main.temp}`);
  }
  let apiKey = `8944afa6845bd7c413a687258d3211ef`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  let weatherData = {
    city: `Valencia`,
    date: `Fri, 2 June 2023, 14:20`,
    temperature: 25,
    condition: `Partly Cloudy`,
    temperatureFeel: 23,
    humidity: 30,
    wind: 5,
  };
  return (
    <div className="Weather">
      <div className="row seekBlock">
        <div className="col-3">
          <img
            className="location col"
            src="https://lh3.googleusercontent.com/Zf2589f7DDySbVIowuI6qEwGnlnT4x4Ob6_QdTB906wqmwMnSzMemWszOwQ4DOwCzVA8pVnntOkLD_tQf2DhIQsHQOwf04t6LAejH3G8"
            alt="location"
          />
        </div>
        <div className="col-6">
          <form action="submit" id="search-form">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-1 searchBox">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search City"
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-ligh searchBar"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link text-primary searchButton"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFspT3qvVuwlqyCui0ufP_iTWFuxtMXxC2Q&usqp=CAU"
            alt="refresh"
            id="refresh"
            onClick="location.reload()"
          />
        </div>
      </div>
      <div className="info">
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.date}</h2>
      </div>
      <div className="weather box">
        <div className=" frame">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="sun"
            className="mainIcon"
          />
        </div>
        <div className="row text-center justify-content-center">
          <div className="col-6">
            <h3 className="col-6">
              <span>{weatherData.temperature}</span>
              <small className="units"> ºC | F </small>
            </h3>
            <div className="w-100"></div>
            <h4 className="col-6 condition">{weatherData.condition}</h4>
          </div>
          <div className=" col-3 extraInformation">
            <h4 className="temperatures">
              Feels like {weatherData.temperatureFeel}º
            </h4>
            <h4 className=" humidity">Humidity {weatherData.humidity}%</h4>
            <h4 className=" wind"> Wind {weatherData.wind} Km/h</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="weatherForecast">
        <h4 className="dayForecast">7-Day Forecast</h4>
        <div className="forecast"></div>
      </div>
    </div>
  );
}
