import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";

export default function ForecastData(props) {
  function ForecastDate() {
    let forecastDay = FormatDate(props.data.dt * 1000);
    return forecastDay;
  }
  function Temperature() {
    let TempC = Math.round(props.data.main.temp);
    if (props.unit === "celsius") {
      return `${TempC}°C`;
    } else {
      let TempF = Math.round((TempC * 9) / 5 + 32);
      return `${TempF}°F`;
    }
  }

  return (
    <div className="ForecastData col">
      <span className="ForecastDate"> {ForecastDate()}</span>
      <WeatherIcon code={props.data.weather[0].icon} />
      <span className="temperature"> {Temperature()}</span>
    </div>
  );
}
