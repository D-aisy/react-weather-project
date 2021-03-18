import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDisplay(props){
    return(
    <div className = "col">
    {new Date(props.data.dt * 1000).getHours()}:00
   <WeatherIcon img={props.data.weather[0].icon}/>
   {Math.round(props.data.main.temp)}°C
</div>
    )
}