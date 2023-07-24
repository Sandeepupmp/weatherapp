const apikey = "9b4e0559499ffbfeac6b52e31b5da432"

const weatherDataEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-intput")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
 event.preventDefault()
 const cityValue = cityInputEl.value
 getWeatherData(cityValue)
}
)
async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&unite=metric`)

        if(!response.ok){
            throw new error("Response is not ok try again ")
        }
        const data = await response.json()
        const tempreture = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherDataEl.querySelector(".temperature").textContent =`${tempreture}°C`
        weatherDataEl.querySelector('.description').textContent = description

        weatherDataEl.querySelector(".details").innerHTML = 
        details.map((details)=> `<div>${details}</div>`).join("")
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = ""
        weatherDataEl.querySelector(".temperature").textContent =""
        weatherDataEl.querySelector('.description').textContent = "An error happend plese try agai later"

        weatherDataEl.querySelector(".details").innerHTML = ""
       
    }
}
