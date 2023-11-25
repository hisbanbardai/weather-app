const apikey = "d26d8781ed32aa7b9292aff0f6adeee6";

const formEle = document.querySelector("form");
const cityInputEle = document.querySelector("form > input");

formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = cityInputEle.value;
  console.log(cityName);
})