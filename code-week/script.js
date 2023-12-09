import { httpGET } from "./modules/http.js";

import {
  cardElGen,
  cityNames,
  cardElGenCompleted, //New card
} from "./modules/components.js";

const containerCard = document.querySelector(".container-card");
// tutte le città presenti nell'array cityNames
const arrayList = Promise.all(
  cityNames.map(async (cityName) => {
    const data = await httpGET(cityName);
    containerCard.appendChild(cardElGen(cityName, data));
  })
);

//select

const citySelect = document.getElementById("citySelect");
const idContainerCard = document.getElementById("idContainerCard");

citySelect.addEventListener("change", async () => {
  const selectedCity = citySelect.value;

  //seleziona una città
  const data = await httpGET(selectedCity);
  const newCard = cardElGenCompleted(selectedCity, data);

  //rimuove carte in più
  idContainerCard.innerHTML = "";

  idContainerCard.appendChild(newCard);

  //click da newCard a allCard
  newCard.addEventListener("click", async () => {
    idContainerCard.innerHTML = "";

    await Promise.all(
      cityNames.map(async (cityName) => {
        const data = await httpGET(cityName);
        containerCard.appendChild(cardElGen(cityName, data));
      })
    );
  });
});
