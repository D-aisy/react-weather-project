import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    let [weatherData, setWeatherData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState(props.city);

    function handleResponse(response){
        setWeatherData({
            temperature: (Math.round(response.data.main.temp)),
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: (Math.round(response.data.wind.speed)),
            icon: response.data.weather[0].icon,
            city: response.data.name
        })
        setLoaded(true)
        
    }

    function search(){
        const apiKey = "25b58b176730ecf9c68eb2712c7b4ee2";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    
    }

    function handleSubmit(event){
        event.preventDefault()
        search()
    }

    function changeCity(event){
        setCity(event.target.value)
    }

    let form = (
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Enter City Here.." className="form-control" autoFocus="on" onChange={changeCity}/>
        </div>
        <div className="col-3">
            <input type="button" value="Search" className="btn btn-light" />
        </div>
        </div>
    </form>
    )
    
    if (loaded) { return(
        <div className="Weather">
           {form}
     <WeatherInfo data={weatherData}/>
     </div>

    )} else {
        search()

            return (
                <Loader className="loader"
                type="Bars"
                color="#4a9bc4"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )
    }
}