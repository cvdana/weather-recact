import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="  mainIcon">
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
        <div className="row justify-content-center ">
          <div className="col-sm-4  text-center  maintemp">
            <WeatherTemperature celsius={props.data.temperature} />

            <div className="w-100"></div>
            <h4 className="col-sm condition">{props.data.description}</h4>
          </div>
          <div className=" col-3 d-none d-md-block extraInformation ">
            <h4 className="details d-none d-md-block	 ">DETAILS</h4>
            <hr />
            <h4 className="temperatures d-none d-md-block">
              Feels like {Math.round(props.data.feels)}º
            </h4>
            <h4 className=" humidity d-none d-md-block">
              Humidity {Math.round(props.data.humidity)}%
            </h4>
            <h4 className=" wind d-none d-md-block">
              Wind {Math.round(props.data.wind)} Km/h
            </h4>
          </div>
        </div>
        <div className=" row text-center extraInformation ">
          <h4 className="col temperatures d-md-none p-0 ">
            Feels like {Math.round(props.data.feels)}º
          </h4>
          <h4 className="col  humidity d-md-none p-0">
            Humidity {Math.round(props.data.humidity)}%
          </h4>
          <h4 className="col wind d-md-none p-0 ">
            Wind {Math.round(props.data.wind)} Km/h
          </h4>
        </div>
      </div>
      <hr />
      <div className="weatherForecast">
        <h4 className="dayForecast">7-Day Forecast</h4>
      </div>
    </div>
  );
}
