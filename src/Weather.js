import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`Temperature in London is ${response.data.main.temp}`);
  }
  let apiKey = `8944afa6845bd7c413a687258d3211ef`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from weather</h2>;
}
