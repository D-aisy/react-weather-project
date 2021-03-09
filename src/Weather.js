import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
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
            <ul>
                <li>Tuesday, 9th March</li>
                <li>Clear Sky</li>
            </ul>
            <div className="clearfix">
            <div className="row">
                <div className="col-6">
                    
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" className="float-left"/>
                    <span className="temperature">6</span><span className="units">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: 44%</li>
                        <li>Wind: 4 Mph</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}