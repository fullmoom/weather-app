import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?",weather)
    
    let tempF = weather?.main.temp *1.8 + 32;
    
  return (
    <div className="weather-box">
        <h2> 지역 : {weather?.name } (
              {weather?.coord.lat } /
              {weather?.coord.lon }
        )
        </h2>
        <h2> 기온 : {weather?.main.temp}C / {tempF}F </h2>
        <h2> 날씨 : {weather?.weather[0].description} </h2>
    </div>
  )
}

export default WeatherBox