const apikey = "9b4e0559499ffbfeac6b52e31b5da432"

const weatherData = document.getElementById("weather-data")

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
        console.log(tempreture)
    } catch (error) {
        
    }
}