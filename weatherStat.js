function weatherStatComp() {
  const iconPanel = document.createElement("img");
  const statPanel = document.createElement("section");
  const descriptionPanel = document.createElement("desc");
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
    iconPanel.src = `./assets/icon/${icon}.png`;
    console.log(iconPanel.src);
    descriptionPanel.textContent = `${description}`;
    statPanel.innerHTML = `
        <div class="temp-stat">${temp}</div>
        <div class="cond-stat">${condition}</div>
        <div class="address-stat">${address}</div>
        <div class="other-stat">
            <div class="humid-stat">${humidity}</div>
            <div class="wind-stat">${windSpeed}</div>
        </div>

    `;
  }

  return {
    render,
    statPanel,
    iconPanel,
    descriptionPanel,
  };
}

export default weatherStatComp;
