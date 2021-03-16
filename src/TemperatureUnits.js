import React, { useState } from "react";

export default function TemperatureUnits(props){
  const [unit, setUnit] = useState ("metric")

    function changeToFahrenheit(event){
        event.preventDefault()
        setUnit ("imperial")
    }

    function changeToCelsius(event){
        event.preventDefault()
        setUnit ("metric")
    }

  if (unit === "metric") {
    return(
    <span>
    <span className="temperature">
        {props.celsius}
        </span>
        <span className="units">
            °C | <a href="/" onClick={changeToFahrenheit}> °F</a>
            </span>
            </span>
    )
  } else {
      let fahrenheit = (Math.round(props.celsius * 9/5) + 32)
      return (
        <span>
        <span className="temperature">
            {fahrenheit}
            </span>
            <span className="units">
                <a href="/" onClick={changeToCelsius}>°C </a>| °F
                </span>
                </span>
      )
  }
}