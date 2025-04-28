const apiey = '9f8dc3d96bceaf290639878fb9d605ba'

async function getWeather(){
    const city = document.getElementById('cityInput')
    const weatherInfo = document.getElementById("weatherInfo")
    const error = document.getElementById('error')

    if(!city){
        error.textContent = "Please enter a city name"
        weatherInfo.classList.add('hidden');
        return;
    }

    try{
        error.textContent ="";
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={9f8dc3d96bceaf290639878fb9d605ba}`
        )

        if(!response.ok){
            throw new Error("City not found")
        }

        const data = await response.json();

        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`
    
        weatherInfo.classList.remove('hidden')
    } catch(err){
        weatherInfo.classList.add('hidden');
        error.textContent = err.message
    }

}