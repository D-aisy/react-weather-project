import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    console.log(props.img)
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "SLEET",
        "10n": "SLEET",
        "11d": "SLEET",
        "11n": "SLEET", 
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
    }

    return (
        <ReactAnimatedWeather
        icon={codeMapping[props.img]}
        color="#4c8ee0"
        size={64}
        animate={true}
      />
    ) 
}