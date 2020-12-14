import React from "react";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row col">
        <div className=" current-date">
          <div className="City-Name">{props.data.city}</div>
          Today is: {props.data.date} <br />
          Time is: {props.data.time} <br />
          Currently:
          <Temperature celsius={props.data.temp} />
          High of:{props.data.highTemp}° <br />
          Low of: {props.data.lowTemp}° <br />
        </div>
      </div>
      <div className="information">
        <span className="col">
          Sky Cover: {props.data.skycover}
          <br />
          Humidity: {props.data.humidity}% <br />
          Wind:{props.data.wind}km/hr {props.data.direction}
          <br />
          Sunrise:{props.data.sunrise} <br />
          Sunset: {props.data.sunset}
        </span>
      </div>
    </div>
  );
}
