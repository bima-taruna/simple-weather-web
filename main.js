import "./style.css";
import { searchIcon } from "./module/icon";
import weatherStatComp from "./module/weatherStat";
(function () {
  const weatherForm = document.querySelector(".location-form");
  const locationInput = document.getElementById("weather-location");
  const submitButton = document.querySelector("button");
  const weatherStatContainer = document.querySelector(".weather-stat");
  const loading = document.createElement("div");
  loading.textContent = "loading...";
  loading.style.display = "none";
  weatherStatContainer.appendChild(loading);
  submitButton.innerHTML = searchIcon;

  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    weatherStatContainer.classList.add("show");
    fetchWeather(locationInput.value).then((data) => {
      const weatherData = mapWeatherData(data);
      renderStatPanel(weatherData);
    });
  });

  async function fetchWeather(location) {
    loading.style.display = "block";
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }${location}/next3days?unitGroup=metric&key=${
          import.meta.env.VITE_API_KEY
        }`,
        {
          mode: "cors",
        }
      );
      if (response.ok) {
        loading.style.display = "none";
        return await response.json();
      } else {
        loading.style.display = "none";
        return "Promise resolved with HTTP status failed";
      }
    } catch (error) {
      loading.style.display = "none";
      return error;
    }
  }

  /* The `mapWeatherData` function is taking a `data` object as input, which likely contains weather
  information fetched from an API. then put it in hashtable, Inside the function: */
  function mapWeatherData(data) {
    const dataTable = {
      address: data.resolvedAddress,
      description: data.description,
      condition: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      temp: data.currentConditions.temp,
      humidity: data.currentConditions.humidity,
      windSpeed: data.currentConditions.windspeed,
    };
    return dataTable;
  }

  function renderStatPanel(params) {
    const weatherStat = weatherStatComp();
    weatherStat.render({
      address: params.address,
      description: params.description,
      condition: params.condition,
      icon: params.icon,
      temp: params.temp,
      humidity: params.humidity,
      windSpeed: params.windSpeed,
    });
    while (weatherStatContainer.children.length > 0) {
      weatherStatContainer.textContent = "";
    }
    weatherStatContainer.appendChild(weatherStat.descriptionPanel);
    weatherStatContainer.appendChild(weatherStat.iconPanel);
    weatherStatContainer.appendChild(weatherStat.statPanel);
  }
})();
