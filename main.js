import { icon } from "@fortawesome/fontawesome-svg-core";
import "./style.css";
import { searchIcon } from "./module/icon";
(function () {
  const weatherForm = document.querySelector(".location-form");
  const locationInput = document.getElementById("weather-location");
  const submitButton = document.querySelector("button");
  submitButton.innerHTML = searchIcon;

  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchWeather(locationInput.value).then((data) => {
      console.log(data);
      // let conditionPanels = conditionPanel({day:dat})
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
})();
