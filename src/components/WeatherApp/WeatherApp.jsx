import React from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/clouds.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {

    // const apiKey = "33c106e542eebad9e91fc36cf6a08fce";

    // const search = async() =>{
    //     const element = document.getElementsByClassName("cityInput");
    //     if(element[0].value===""){
    //         return 0;
    //     }
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${apiKey}`;

    //     let response = await fetch(url);
    //     let data = await response.jspn();

    //     const humidity = document.getElementsByClassName('humidity-percent')
    //     const wind = document.getElementsByClassName('wind-rate') 
    //     const temprature = document.getElementsByClassName('weather-temp') 
    //     const location = document.getElementsByClassName('weather-location') 

    //     humidity[0].innerHTML =data.main.humidity;
    //     wind[0].innerHTML = data.wind.speed;
    //     temprature[0].innerHTML = data.main.temp;
    //     location[0].innerHTML = data.name;

        

    // }

    const apiKey = "33c106e542eebad9e91fc36cf6a08fce";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
   
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
   const weatherIcon = document.querySelector(".weather-icon");
   
    async function checkWheather(city){
       const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
     
        if(response.status == 404){
           document.querySelector(".error").style.display = "block";
           document.querySelector(".weather").style.display = "none";
        }
        else{
           var data = await response.json();
   
      
   
           document.querySelector(".city").innerHTML=data.name;
           document.querySelector(".temp").innerHTML= Math.round(data.main.temp ) +"°c";
           document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
           document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
       
           if(data.weather[0].main == "Clouds"){
             weatherIcon.src = "images/clouds.png";
           }
           else if(data.weather[0].main == "Clear"){
               weatherIcon.src = "images/clear.png";
             }
             else if(data.weather[0].main == "Rain"){
               weatherIcon.src = "images/rain.png";
             }
             else if(data.weather[0].main == "Drizzle"){
               weatherIcon.src = "images/drizzle.png";
             }
             else if(data.weather[0].main == "Mist"){
               weatherIcon.src = "images/mist.png";
             }
       
             document.querySelector(".weather").style.display ="block"
             document.querySelector(".error").style.display = "none";
        }
   
   
        
    }
   
    searchBtn.addEventListener("click",()=>{
       checkWheather(searchBox.value);
    })

  return (
<div class="card">
        <div class="search">
            <input type="text" placeholder="Enter city name" spellcheck="false"/>
            <button><img src={search_icon}/></button>
        </div>
<div class="error">
    <p>Invalid city name</p>
</div>
<div class="weather">
    <img src={rain_icon} class="weather-icon"/>
    <h1 class="temp">22°c</h1>
    <h2 class="city">Delhi</h2>
    <div class="details">
        <div class="col">
            <img src={humidity_icon}/>
            <div>
                <p class="humidity">50%</p>
                <p>Humidity</p>
            </div>
        </div>

        <div class="col">
            <img src={wind_icon}/>
            <div>
                <p class="wind">15 km/h</p>
                <p>Wind speed</p>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default WeatherApp
