import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
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
    return (
      <div className="Temperature">
        {Math.round(fahrenheit())}
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
