const apiKey = "766f8c4c4669d34f342acbbb6caa9edd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-img");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(await data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].description == "overcast clouds") {
        weathericon.src = "images/cloudy.png";
    }
    else if (data.weather[0].description == "light rain ") {
        weathericon.src = "images/rain.png";
    }
    else if (data.weather[0].description == "clear sky ") {
        weathericon.src = "images/sun.png";
    }
    else if (data.weather[0].description == "snow") {
        weathericon.src = "images/snow.png";
    }
    else if (data.weather[0].description == "mist","haze") {
            weathericon.src = "images/mist.png";
        }
        }
    
    searchbtn.addEventListener("click", () => {
        checkWeather(searchbox.value);
    });
