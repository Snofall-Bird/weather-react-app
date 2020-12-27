import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";

export default function ForecastData(props) {
  function TemperatureC() {
    let HighTemp = Math.round(props.data.main.temp_max);

    return `${HighTemp}°C`;
  }
  function Forecast() {
    let forecastDay = FormatDate(props.data.dt * 1000);
    return forecastDay;
  }
  if (props.unit === "celsius") {
    return (
      <div className="ForecastData col">
        <span className="ForecastDate"> {Forecast()}</span>
        <WeatherIcon code={props.data.weather[0].icon} />
        <span className="temperature"> {TemperatureC()}</span>
      </div>
    );
  } else {
    let HighTemp = Math.round((props.data.main.temp_max * 9) / 5 + 32);
    return (
      <div className="ForecastData col">
        <span className="ForecastDate"> {Forecast()}</span>
        <WeatherIcon code={props.data.weather[0].icon} />
        <span className="temperature"> {HighTemp}°F</span>
      </div>
    );
  }
}
