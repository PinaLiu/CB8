import { httpGET } from "./http.js";

//Genera singola card
const cardElGen = (cityName, data) => {
  const cardEl = document.createElement("div");
  const cityEl = document.createElement("h2");
  const imgCardEl = document.createElement("div");
  const celsiusEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const descriptionEl = document.createElement("div");
  const charEl = document.createElement("div");
  const tempElWrapper = document.createElement("div");
  const iconTempEl = document.createElement("img");
  const tempEl = document.createElement("p");
  const windElWrapper = document.createElement("div");
  const iconWindEl = document.createElement("img");
  const windEl = document.createElement("p");

  cardEl.className = "card";

  // tolgo provice of
  const cityNameW = data.name.replace("Province of ", " ");

  cityEl.textContent = cityNameW;

  imgCardEl.className = "img-card";
  // da Fahrenheit a Celsius
  const celsiusTemp = -(data.main.temp - 32) * (5 / 9);
  celsiusEl.textContent = `${celsiusTemp.toFixed(2)} °C`;
  //img
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  imgEl.src = iconUrl;

  descriptionEl.className = "description";
  charEl.className = "characteristics";

  //Temperature
  tempElWrapper.className = "temp-wrapper";
  iconTempEl.src = "https://img.icons8.com/nolan/64/temperature.png";
  iconTempEl.alt = "temperature";
  const tMin = data.main.temp_min;
  const tMax = data.main.temp_max;
  tempEl.textContent = `${tMin}/${tMax} °C`;

  //wind km/h
  windElWrapper.className = "wind-wrapper";
  iconWindEl.src = "https://img.icons8.com/nolan/64/wind.png";
  iconWindEl.alt = "wind";
  const wind = data.wind.speed * 3.6;
  windEl.textContent = `${wind.toFixed(2)} km/h`;

  tempElWrapper.append(iconTempEl, tempEl);
  windElWrapper.append(iconWindEl, windEl);
  charEl.append(tempElWrapper, windElWrapper);
  descriptionEl.appendChild(charEl);
  imgCardEl.append(celsiusEl, imgEl);
  cardEl.append(cityEl, imgCardEl, descriptionEl);

  return cardEl;
};

//array delle citta
const cityNames = [
  "Agrigento",
  "Caltanissetta",
  "Catania",
  "Enna",
  "Messina",
  "Palermo",
  "Ragusa",
  "Siracusa",
  "Trapani",
];

//New card
const cardElGenCompleted = (cityName, data) => {
  //aggiungo un nuovo div contenitore newContainerCard
  const newContainerCard = document.createElement("div");
  newContainerCard.className = "new-container-card";
  //nuova card
  const newCard = cardElGen(cityName, data);

  newCard.classList.add("new-card-properties"); //classe css per newCard
  newCard.id = "allCard"; // id per richiamare tt le card dopo la select

  //longitudine
  const coordEl = document.createElement("div");
  coordEl.className = "coord-wrapper";
  const lonEl = document.createElement("p");
  const lon = data.coord.lon;
  lonEl.textContent = `Lon: ${lon}`;
  //latitudine
  const latEl = document.createElement("p");
  const lat = data.coord.lat;
  latEl.textContent = `Lat: ${lat}`;
  //main
  // const mainEl = document.createElement("p");
  // const main = data.weather[0].main;
  // mainEl.textContent = `${main}`;
  //description
  const mainDescriptionEl = document.createElement("p");
  const mainDescription = data.weather[0].description;
  mainDescriptionEl.textContent = `${mainDescription}`;

  const charEl = newCard.querySelector(".characteristics");
  coordEl.append(lonEl, latEl);
  charEl.append(coordEl, mainDescriptionEl); //ho tolto mainEL
  newContainerCard.appendChild(newCard);

  return newContainerCard;
};

export { cardElGen, cityNames, cardElGenCompleted };
