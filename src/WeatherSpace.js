import React from "react";
import cloud from "./cloud.png";
import fog from "./fog.png";
import rain from "./rain.png";
import sky from "./sky.png";
import snow from "./snow.png";
import storm from "./storm.png";
import sun from "./sun.png";

export default function WeatherSpace(props) {
  const iconCode = {
    "01d": sun,
    "01n": sun,
    "02d": sun,
    "02n": sky,
    "03d": sky,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": storm,
    "11n": storm,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": fog,
  };

  return (
    <div className="weatherSpace">
      <img src={iconCode[props.code]} alt=" " />
    </div>
  );
}
