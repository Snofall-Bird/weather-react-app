import React from "react";

export default function Temperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className="Temperature">
        {Math.round(props.celsius)}
        <span className="unit">
          <small>
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </small>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        {Math.round(fahrenheit)}
        <span className="unit">
          <small>
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </small>
        </span>
      </div>
    );
  }
}
