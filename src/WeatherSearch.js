import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import CardinalPoint from "./CardinalPoint";
import WeatherData from "./WeatherData";
import WeatherSpace from "./WeatherSpace";
import DailyForecast from "./DailyForecast";
import BackgroundImage from "./Background";
// import Clock from "./Clock";

import "./App.css";

export default function WeatherSearch(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: FormatDate(response.data.dt * 1000),
      time: FormatTime(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed * 3.6),
      direction: CardinalPoint(response.data.wind.deg),
      sunrise: FormatTime(response.data.sys.sunrise * 1000),
      sunset: FormatTime(response.data.sys.sunset * 1000),
      skycover: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      img: <WeatherSpace code={response.data.weather[0].icon} />,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "62ee7d33e93dd7f42d07f5c3b2b8939c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function searchCity(position) {
    let apiKey = "62ee7d33e93dd7f42d07f5c3b2b8939c";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    let newapiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&appid=${apiKey}`;
    axios.get(newapiUrl).then(DailyForecast);
  }

  function useCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCity);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              placeholder="City or Town ie Sydney"
              onChange={updateCity}
              autoComplete="off"
            />{" "}
          </div>
        </div>
        <div className="col">
          <button type="submit" id="search-Button" className="current-location">
            Search
          </button>
          <button className="current-location" onClick={useCity}>
            Current Location
          </button>
          {/* <Clock /> */}
          <small id="clock"></small>
        </div>
      </div>
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather">
        {form}
        {weather.img}
        <WeatherData data={weather} unit={unit} setUnit={setUnit} />
        <div className="forecast card-body" id="forecast">
          <Forecast city={weather.city} unit={unit} setUnit={setUnit} />
          {/* <DailyForecast /> */}
          {/* <DailyForecast data={weather.list[3]} />
          <DailyForecast data={weather.list[4]} />
          <DailyForecast data={weather.list[5]} /> */}
        </div>
      </div>
    );
  } else {
    search();
    return form;
  }
}
