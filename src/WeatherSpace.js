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
    "01d": <img src={sun} alt="sun" />,
    "01n": <img src={sun} alt="sun" />,
    "02d": <img src={sun} alt="partly clouds" />,
    "02n": <img src={sky} alt="partly clouds" />,
    "03d": <img src={sky} alt="clouds" />,
    "03n": <img src={cloud} alt="clouds" />,
    "04d": <img src={cloud} alt="clouds" />,
    "04n": <img src={cloud} alt="clouds" />,
    "09d": <img src={rain} alt="rain" />,
    "09n": <img src={rain} alt="rain" />,
    "10d": <img src={rain} alt="rain" />,
    "10n": <img src={rain} alt="rain" />,
    "11d": <img src={storm} alt="sleet" />,
    "11n": <img src={storm} alt="sleet" />,
    "13d": <img src={snow} alt="snow" />,
    "13n": <img src={snow} alt="snow" />,
    "50d": <img src={fog} alt="fog" />,
    "50n": <img src={fog} alt="fog" />,
  };

  return <img src={iconCode[props.code]} alt=" " />;
}
