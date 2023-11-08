//ESERCIZIO 1
//creo una funzione calculator
function calculator(a, b, c, callback) {
  let total = callback(a, b, c); // assegno una variabile totale che è uguale all'operazione della callback
  console.log("Risultato: " + total);
}

//funzioni con gli operatori da richiamare come callback

function addiction(a, b, c) {
  return a + b + c;
}

function subtraction(a, b, c) {
  return a - b - c;
}

function multiplication(a, b, c) {
  return a * b * c;
}

function division(a, b, c) {
  return a / b / c;
}

//prove di esempi

calculator(1, 2, 3, addiction);
calculator(10, 2, 1, subtraction);
calculator(2, 5, 8, multiplication);
calculator(100, 2, 4, division);

//ESERCIZIO 2

//CREARE array spesa che contiene id, nome, indirizzo per immagine, descrizione
//processare con map e forEach + spiegare la differenza
//stampa l'array

//Il metodo forEach è utilizzato quando si vuole scorrere un array e fare qualcosa senza modificarlo  o crearne uno nuovo.può essere usato per la stampa
//

const shoppingList = [
  {
    id: 1,
    name: "Patatine San Carlo Pomodoro",
    urlImg: "https://picsum.photos/100/100",
    description: "gusto pomodoro 180g",
  },
  {
    id: 2,
    name: "Emmental",
    urlImg: "https://picsum.photos/100/100",
    description: "100g",
  },

  {
    id: 3,
    name: "Birra",
    urlImg: "https://picsum.photos/100/100",
    description: "Paulaner",
  },
];

//forEch per aggiungere l'array il costo di ogni oggetto
shoppingList.forEach((prodotto) => {
  if (prodotto.name === "Patatine San Carlo Pomodoro") {
    prodotto.costo = 1.5;
  } else if (prodotto.name === "Emmental") {
    prodotto.costo = 2.0;
  } else if (prodotto.name === "Birra") {
    prodotto.costo = 3.0;
  } else {
    prodotto.costo = 1.0; // Un costo predefinito per altri prodotti
  }
});

// Aggiungo il campo "quantità" impostato su 2 a ciascun prodotto con forEach
shoppingList.forEach((prodotto) => {
  prodotto.quantità = 2;
});

//console.log(shoppingList);

//utilizzo map per raddoppiare gli elementi presenti nell'array. Map crea un nuovo array, senza modificare l'originale
const shoppingListFor2 = shoppingList.map((prodotto) => prodotto.costo * 2);

// Calcolo il costo totale della spesa con forEach
let costoTotaleSpesa = 0; // Inizializza una variabile per il costo totale della spesa
shoppingList.forEach((prodotto) => {
  costoTotaleSpesa += prodotto.costo; // Aggiungi il costo del prodotto al costo totale della spesa
});

console.log(shoppingList); // Stampa l'array con i costi aggiornati
console.log("Costo totale della spesa: " + costoTotaleSpesa); // Stampa il costo totale della spesa
