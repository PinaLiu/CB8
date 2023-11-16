//esercizio del 14-11-23

const sectionEL = document.createElement("section");
const titleEl = document.createElement("h3");
const divList = document.createElement("div");

sectionEL.setAttribute("class", "reccomended");
sectionEL.classList.add("reccomended");
titleEl.textContent = "Recommeded 4 You";
divList.setAttribute("class", "robo-list");
divList.classList.add("robo-list");

//appendo
document.body.append(sectionEL);
sectionEL.append(titleEl);
sectionEL.append(divList);

//array di oggetti da caricare
const mockData = [
  {
    id: 1,
    roboName: "Pina",
    price: 445,
    imageUrl: "https://robohash.org/Pina",
  },
  {
    id: 2,
    roboName: "Giusi",
    price: 1000,
    imageUrl: "https://robohash.org/Giusi",
  },
  {
    id: 3,
    roboName: "Giuseppina",
    price: 30,
    imageUrl: "https://robohash.org/Giuseppina",
  },
  {
    id: 4,
    roboName: "Peppa",
    price: 50,
    imageUrl: "https://robohash.org/Peppa",
  },
];

const roboGeneretion = (roboData) => {
  //roboData oggetto che racchiuderà il singolo elemento con id, url, alt

  const divRobo = document.createElement("div");
  const imgEL = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const roboNameEl = document.createElement("h4");

  divRobo.className = "robo"; // dare il nome alla classe
  imgEL.src = roboData.imageUrl; // <img src="https://robohash.org/casi" alt="Pina" />
  imgEL.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "€";
  roboNameEl.textContent = roboData.roboName;

  textEl.append(priceEl, roboNameEl); // iniziare dagli elementi più interni
  divRobo.append(imgEL, textEl);

  return divRobo;
};
const roboListEl = document.querySelector(".robo-list");
//stampo gli elementi dell'array
mockData.map((elemento) => roboListEl.appendChild(roboGeneretion(elemento)));

//Esercizio 2
//ho replicato la funzione roboGeneration e a questa applico il try e cath

const roboGeneretion2 = (roboData) => {
  //roboData oggetto che racchiuderà il singolo elemento con id, url, alt

  const divRobo = document.createElement("div");
  const imgEL = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const roboNameEl = document.createElement("h4");

  divRobo.className = "robo"; // dare il nome alla classe
  imgEL.src = roboData.imageUrl; // <img src="https://robohash.org/casi" alt="Pina" />
  imgEL.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = "Nuovo Prezzo: " + roboData.price * 2 + "€"; // Esempio di modifica
  roboNameEl.textContent = "Nuovo Nome: " + roboData.roboName; // Esempio di modifica

  textEl.append(priceEl, roboNameEl); // iniziare dagli elementi più interni
  divRobo.append(imgEL, textEl);

  return divRobo;
};
//applico il try e catch non dichiarando la varibile roboListEl2
try {
  roboListEl2 = document.querySelector(".robo-list");
} catch (e) {
  //aggiiungo ReferencesError xk la variabile non è dichiarata
  if (e instanceof ReferenceError) {
    console.error("La variabile non è stata dichiarata");
  } else {
    console.error("C'è un errore");
  }
}

mockData.map((elemento) => roboListEl2.appendChild(roboGeneretion2(elemento)));
