const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const error = document.getElementById("error");

const API_KEY = "a74bef46cd0b1654c7b953a74b757751";

async function getWeather(city){
    try{
        error.textContent = "";
        cityName.textContent = "Loading...";
        temperature.textContent = "";
        description.textContent = "";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Condition: ${data.weather[0].description}`;

  } catch (err) {
    cityName.textContent = "";
    temperature.textContent = "";
    description.textContent = "";
    error.textContent = err.message;
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  }
});