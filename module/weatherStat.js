import { dropletIcon, windIcon } from "./icon";

function weatherStatComp() {
  const iconPanel = document.createElement("img");
  const statPanel = document.createElement("section");
  const descriptionPanel = document.createElement("desc");
  const humidityIcon = document.createElement("span");
  const windSpeedIcon = document.createElement("span");
  humidityIcon.innerHTML = dropletIcon;
  windSpeedIcon.innerHTML = windIcon;
  statPanel.classList.add("stat-panel");
  descriptionPanel.classList.add("desc-stat");
  function render({
    address,
    description,
    condition,
    icon,
    temp,
    humidity,
    windSpeed,
  }) {
    iconPanel.src = `./icon/${icon}.png`;
    descriptionPanel.textContent = `${description}`;
    statPanel.innerHTML = `
        <div class="temp-stat">${temp}°C</div>
        <div class="cond-stat">${condition}</div>
        <div class="address-stat">${address}</div>
        <div class="other-stat">
            <div class="humid-stat">
            ${humidity}%</div>
            <div class="wind-stat">${windSpeed} Km/h</div>
        </div>

    `;
    const humidStat = statPanel.querySelector(".humid-stat");
    const windStat = statPanel.querySelector(".wind-stat");
    humidStat.prepend(humidityIcon);
    windStat.prepend(windSpeedIcon);
  }

  return {
    render,
    statPanel,
    iconPanel,
    descriptionPanel,
  };
}

export default weatherStatComp;
