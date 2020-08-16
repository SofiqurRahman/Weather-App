document.getElementById('submit-button').addEventListener('click', function () {
  const cityName = document.getElementById('input-city-name').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + `${cityName}` + `&appid=3f54d30502ad1eadac795a0e1f8139fa`)
    .then(response => response.json())
    .then(data => {
      const temperatureData = data.main.temp;
      document.getElementById('temperature').innerText = `${temperatureData}\xB0C`;
      document.getElementById('city-name').innerText = data.name;
      document.getElementById('feelsLike-temp').innerText = `Feels Like ${data.main.feels_like}\xB0C`;
      document.getElementById('weather-description').innerText = data.weather[0].description;
      document.getElementById('humidity').innerText = `Humidity ${data.main.humidity}%`;
      document.getElementById('wind-speed').innerText = `Wind Speed ${data.wind.speed}km/h`;
    })
})