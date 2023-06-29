import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="info">
        <h1>{props.data.city}</h1>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
      </div>
      <div className="weather box">
        <div className=" frame">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="mainIcon"
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-4 text-center maintemp">
            <h3 className="col">
              <span>{Math.round(props.data.temperature)}</span>
              <small className="units">º C | F </small>
            </h3>
            <div className="w-100"></div>
            <h4 className="col condition">{props.data.description}</h4>
          </div>
          <div className=" col-3 extraInformation">
            <h4 className="details">DETAILS</h4>
            <hr />
            <h4 className="temperatures">
              Feels like {Math.round(props.data.feels)}º
            </h4>
            <h4 className=" humidity">
              Humidity {Math.round(props.data.humidity)}%
            </h4>
            <h4 className=" wind"> Wind {Math.round(props.data.wind)} Km/h</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="weatherForecast">
        <h4 className="dayForecast">7-Day Forecast</h4>
      </div>
    </div>
  );
}