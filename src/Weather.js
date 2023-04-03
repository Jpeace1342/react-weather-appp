import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      feels_like: response.data.temperature.feels_like,
      icon_url: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",

    });

  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li> 
            <FormattedDate date={weatherData.date}/>
            </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>

                <img
                  className="float-left"
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like:{Math.round(weatherData.feels_like)}</li>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind:{Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "42ba0b3b90cb71o34dfbt8899738ed50";
    let city = "Kansas city";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}