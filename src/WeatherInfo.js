import React, {useState} from "react";
import FormatDate from "./FormatDate"

export default function WeatherInfo(props){
    const [city, setCity] = useState(props.city)

    function handleSubmit(event){
        event.preventDefault()
        // search city
    }

    function searchCity(event){

    }

    return (
    <div>
       <h1>{props.data.city}</h1>
          
            <ul className="text-capitalize">
                <li> <FormatDate date={props.data.date}/> </li>
                <li>{props.data.description}</li>
            </ul>
            <div className="clearfix">
            <div className="row">
                <div className="col-6">
                    
                    <img src={props.data.image} alt="sunny" className="float-left"/>
                    <span className="temperature">{props.data.temperature}</span><span className="units">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind}Mph</li>
                    </ul>
                </div>
                </div>
            </div>
    </div>
    )
}