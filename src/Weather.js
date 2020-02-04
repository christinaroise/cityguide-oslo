import React, {useState, Component}from 'react';
import './components/pageCss/Weather.css';



class Weather extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentWeather: "",
            currentTemp: "",
            currentIcon: "",
            openWeatherURL: "https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=" + "90bffc08d53ce7853e1b33ba0c3c2ba8"
            
        };
        this.getJSON()
      }

    getJSON = () => {
        fetch(this.state.openWeatherURL)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                currentWeather: result.weather[0].main,
                currentTemp: result.main.temp,
                currentIcon: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
            })
            console.log(result)
          },
       
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render () {
        const {currentWeather, currentTemp, currentIcon} = this.state
        return(
            <div className="weatherContainer">
              <div className="weatherInfo">
                <h3>Oslo</h3>
                <p></p>
                <img src={currentIcon}/>
                <p>{currentTemp}</p>
                <p>{currentWeather}</p>
              </div>
            </div>
        )
    }
}

export default Weather