import React, {useState} from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
    const [ready, setReady] = useState (false);
    const [forecast, setForecast] = useState (null);

    function handleForecastResponse(response){
        setForecast (response.data)
        setReady (true)
        console.log (response.data)
    }

   

    if (ready){
        return (
         <div className="WeatherForecast row">
             <div className = "col">
                 {new Date(forecast.list[0].dt * 1000).getHours()}:00
                <WeatherIcon img={forecast.list[0].weather[0].icon}/>
                {Math.round(forecast.list[0].main.temp)}°C
            </div>
        </div>
    )
        } else {
            let apiKey = "25b58b176730ecf9c68eb2712c7b4ee2"
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
            axios.get(url).then(handleForecastResponse)

            return null
        }
}