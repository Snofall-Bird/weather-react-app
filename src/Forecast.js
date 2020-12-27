import React, { useState } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row col-12 card-body">
        <ForecastData data={forecast.list[11]} unit={props.unit} />
        <ForecastData data={forecast.list[19]} unit={props.unit} />
        <ForecastData data={forecast.list[25]} unit={props.unit} />
        <ForecastData data={forecast.list[31]} unit={props.unit} />
        <ForecastData data={forecast.list[39]} unit={props.unit} />
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = "62ee7d33e93dd7f42d07f5c3b2b8939c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
