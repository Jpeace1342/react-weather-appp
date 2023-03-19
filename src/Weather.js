import React, { useState } from 'react';
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name
    });

    setReady(true);
  }
  if (ready) {
  return(
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
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>{weatherData.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
         
           <div className="float-left">
          <span className="temperature">{Math.round (weatherData.temperature)}</span>
          <span className="unit">°C</span>

          <img className="float-left"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Mostly Cloudy"/>
          </div>
        </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind:{weatherData.wind} Km/h</li>
            </ul>
            
        </div>
      </div>
    </div>
  );
} else {
 const apikey = "42ba0b3b90cb71o34dfbt8899738ed50";
  let city = "New York";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&appid=${apikey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return "Loading...";
}
}
 