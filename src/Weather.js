import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(){
    let [weatherData, setWeatherData] = useState({});
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        console.log(response)
        setWeatherData({
            temperature: (Math.round(response.data.main.temp)),
            date: "Tuesday 9th March",
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: (Math.round(response.data.wind.speed)),
            image: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        })
        setLoaded(true)
        
    }

    
    if (loaded) { return(
        <div className="Weather">
            <h1>Bristol</h1>
            <form>
                <div className="row">
                   <div className="col-9">
                <input type="search" placeholder="Enter City Here.." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="button" value="Search" className="btn btn-light"/>
                </div>
                </div>
            </form>
            <ul className="text-capitalize">
                <li>{weatherData.date}</li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="clearfix">
            <div className="row">
                <div className="col-6">
                    
                    <img src={weatherData.image} alt="sunny" className="float-left"/>
                    <span className="temperature">{weatherData.temperature}</span><span className="units">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}Mph</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )} else {

            const apiKey = "25b58b176730ecf9c68eb2712c7b4ee2";
            let city = "London";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        
            return (
                <Loader
                type="Bars"
                color="#4a9bc4"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )
    }
}