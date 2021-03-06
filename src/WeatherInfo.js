import React from "react";
import FormatDate from "./FormatDate"
import WeatherIcon from "./WeatherIcon";
import TemperatureUnits from "./TemperatureUnits"; 

export default function WeatherInfo(props){

    return (
    <div>
       <h1>{props.data.city}</h1>
          
            <ul className="text-capitalize">
                <li>last updated: <FormatDate date={props.data.date}/> </li>
                <li>{props.data.description}</li>
            </ul>
            <div className="clearfix">
            <div className="row">
                <div className="col-6">
                    <div className="float-left"/>
                    <WeatherIcon img={props.data.icon}/>
                    <TemperatureUnits celsius={props.data.temperature}/>
                </div>
                

                <div className="extras col-6">
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