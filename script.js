const apikey = "d26d8781ed32aa7b9292aff0f6adeee6";

const formEle = document.querySelector("form");
const cityInputEle = document.querySelector("form > input");
const weatherBasicInfo = document.getElementsByClassName("basic-info")[0];
const weatherDetails = document.getElementsByClassName("details")[0];
const tempElement = document.createElement("h1");
const imgElement = document.createElement("img");
const mainElement = document.createElement("div");

formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = cityInputEle.value;
  getWeatherData(cityName);
});

async function getWeatherData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const weatherIcon = data.weather[0].icon;
    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    tempElement.textContent = `${temperature}°C`;

    imgElement.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
    imgElement.alt = "Weather-icon";

    mainElement.textContent = `${weatherDescription}`;

    weatherBasicInfo.appendChild(tempElement);
    weatherBasicInfo.appendChild(imgElement);
    weatherBasicInfo.appendChild(mainElement);

    weatherDetails.innerHTML = details
      .map((detail) => `<section><span>${detail}<span></section>`)
      .join("");
  } catch (error) {
    weatherBasicInfo.innerHTML = ``;
    weatherDetails.innerHTML = `An error occurred. Please check your input or try again later.`;
  }
}
