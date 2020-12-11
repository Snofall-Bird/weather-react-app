import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(response) {
  return (
    <div class="col-2">
      <h6>${FormatDate(response.data.daily[1].dt * 1000)}</h6>
      <WeatherIcon code={response.data.daily[1].weather[0].icon} />
      <br />
      <h6>`{Math.round(response.data.daily[1].temp)}`</h6>
    </div>
  );
}

//         <DailyForecast data={forecast.list[2]} unit={props.unit} />
//         <DailyForecast data={forecast.list[3]} unit={props.unit} />
//         <DailyForecast data={forecast.list[4]} unit={props.unit} />
//         <DailyForecast data={forecast.list[5]} unit={props.unit} /> */
