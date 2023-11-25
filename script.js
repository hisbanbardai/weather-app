const apikey = "d26d8781ed32aa7b9292aff0f6adeee6";

const formEle = document.querySelector("form");
const cityInputEle = document.querySelector("form > input");
const weatherBasicInfo = document.getElementsByClassName("basic-info")[0];

formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = cityInputEle.value;
  getWeatherData(cityName);
});


async function getWeatherData(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}&units=metric`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);

  const weatherIcon = data.weather[0].icon;
  const temperature = Math.round(data.main.temp);
  const weatherDescription = data.weather[0].description;
  const details = [
    `Feels like: ${data.main.feels_like}°C`,
    `Humidity: ${data.main.humidity}%`,
    `Wind speed: ${data.wind.speed}m/s`
  ];

  
}