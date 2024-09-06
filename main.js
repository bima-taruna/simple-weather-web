import "./style.css";
import { searchIcon } from "./module/icon";
(function () {
  const weatherForm = document.querySelector(".location-form");
  const locationInput = document.getElementById("weather-location");
  const submitButton = document.querySelector("button");
  const weatherStat = document.querySelector(".weather-stat");
  submitButton.innerHTML = searchIcon;

  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchWeather(locationInput.value).then((data) => {
      const weatherData = mapWeatherData(data);
      console.log(weatherData);
    });
  });

  async function fetchWeather(location) {
    let loading = true;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${location}/next3days?key=${
          import.meta.env.VITE_API_KEY
        }`,
        {
          mode: "cors",
        }
      );
      if (response.ok) {
        loading = false;
        return await response.json();
      } else {
        loading = false;
        return "Promise resolved with HTTP status failed";
      }
    } catch (error) {
      loading = false;
      return error;
    }
  }

  function mapWeatherData(data) {
    const dataMap = new Map();
    dataMap.set("address", data.resolvedAddress);
    dataMap.set("description", data.description);
    dataMap.set("condition", data.currentConditions.conditions);
    dataMap.set("icon", data.currentConditions.icon);
    dataMap.set("temp", data.currentConditions.temp);
    dataMap.set("humidity", data.currentConditions.humidity);
    dataMap.set("windSpeed", data.currentConditions.windspeed);
    return dataMap;
  }
})();
