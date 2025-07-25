const apiKey = "5efab61207f12a47b92647a0873f56c6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorText = document.querySelector(".error");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        errorText.style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    } else {
        errorText.style.display = "none";
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Wind":
            weatherIcon.src = "images/wind.png";
            break;
        case "Night":
            weatherIcon.src = "images/night.png";
            break;
        default:
            weatherIcon.src = "images/clouds.png"; // fallback
            break;
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});
