import React, {useState} from "react";
import axios from "axios";

import "./WeatherForecast.css"
import WeatherForecastDisplay from "./WeatherForecastDisplay"

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
             <WeatherForecastDisplay data={forecast.list[0]}/>
             <WeatherForecastDisplay data={forecast.list[1]}/>
             <WeatherForecastDisplay data={forecast.list[2]}/>
             <WeatherForecastDisplay data={forecast.list[3]}/>
             <WeatherForecastDisplay data={forecast.list[4]}/>
             <WeatherForecastDisplay data={forecast.list[5]}/>
        </div>
    )
        } else {
            let apiKey = "25b58b176730ecf9c68eb2712c7b4ee2"
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
            axios.get(url).then(handleForecastResponse)

            return null
        }
}