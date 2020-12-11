import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props) {
  function Temperature() {
    let HighTemp = Math.round(props.data.main.temp_max);

    return `${HighTemp}°C`;
  }
  if (props.unit === "celsius") {
    return (
      <div className="ForecastData col">
        <WeatherIcon code={props.data.weather[0].icon} />
        <span className="temperature"> {Temperature()}</span>
      </div>
    );
  } else {
    let HighTemp = Math.round((props.data.main.temp_max * 9) / 5 + 32);
    return (
      <div className="ForecastData col">
        <WeatherIcon code={props.data.weather[0].icon} />
        <span className="temperature"> {HighTemp}°F</span>
      </div>
    );
  }
}
