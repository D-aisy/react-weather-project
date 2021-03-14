import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    console.log(props.img)
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "O1n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "O2n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "O3n": "CLOUDY",
        "04d": "CLOUDY",
        "O4n": "CLOUDY",
        "09d": "RAIN",
        "O9n": "RAIN",
        "010d": "SLEET",
        "O10n": "SLEET",
        "011d": "SLEET",
        "O11n": "SLEET", 
        "013d": "SNOW",
        "O13n": "SNOW",
        "050d": "FOG",
        "O50n": "FOG",
    }

    return (
        <ReactAnimatedWeather
        icon={codeMapping[props.img]}
        color="#43a073"
        size={64}
        animate={true}
      />
    ) 
}