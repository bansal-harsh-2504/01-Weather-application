const apiKey = "8afc39dff06111a2aba35732760d8aac";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }else{document.querySelector(".error").style.display = "none";
    var data = await response.json();
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerText = data.main.humidity+"%";
    document.querySelector(".wind").innerText = data.wind.speed+"km/hr";

    const weather = data.weather[0].main;
    const weatherIcon = document.querySelector(".weather-icon");
    if(weather=="Clouds"){
        weatherIcon.src= "images/clouds.png";;
    }else if(weather=="Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(weather == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(weather == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(weather == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}    
}
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", ()=>{
    const input = document.querySelector("input").value;
    checkWeather(input);
});