function getTemperatureStatus(temperature) {
    if (temperature > 30) {
      return "caldo";
    } else if(temperature < 15) {
      return "freddo";
    } 
  }
  
 console.log(getTemperatureStatus(6));
  

 // Creare un oggetto che vi identifichi come persona, inserite quindi almeno 5 proprietà e 1 metodo al suo interno. Andate ad eseguire l'esecuzione del metodo all'interno del programma.

 const person = {
  name: "Pina",
  surname: "Liu", 
  dateOfBirth: "23/1/1989",
  placeOfBirth: "Palermo",
  age: 34,
  hair: "ricci",
  keyWord: "'In reatà'",

  //metodo pina
  io: function(){
    return "e ogni tanto dico " + this.keyWord;

  },
 }
 console.log("Ciao, io sono " + person.name + "  " + person.surname + " ho i capelli " + person.hair + " " + person.io())


 //Esercizio Avanzato - Gestore di preferiti
// Creare un array vuoto chiamato preferiti.
// Scrivere una funzione aggiungiAPreferiti che prende una stringa come parametro (che rappresenta l'oggetto del preferito, come il titolo di un film) e aggiunge quell'elemento all'array preferiti.
// Scrivere una funzione mostraPreferiti che stampa tutti gli elementi nell'array preferiti.
// Scrivere una funzione rimuoviDaPreferiti che prende una stringa come parametro e rimuove quell'elemento dall'array preferiti, se esiste.

let preferiti = [];

function aggiungiAPreferiti() {
  preferiti.unshift("Nightmare Before Christmas");
  preferiti.push("Terminator");
  return preferiti;
}

console.log("i film aggiunti sono " + aggiungiAPreferiti());


function mostraPreferiti() {
  let preferitiString = "I film preferiti sono: ";
  for (let i = 0; i < preferiti.length; i++) {
    preferitiString += preferiti[i];
    if (i < preferiti.length - 1) {
      preferitiString += ", "; // virgola tra i film
    }
  }
  console.log(preferitiString);
}
mostraPreferiti();

function rimuoviDaPreferiti(elementoDaRimuovere){
  //aggiungere if-else xke la consegna dice se esiste
   // indexOf trova l'elemento nel'array. se non lo trova restituisce -1
    elementoDaRimuovere = preferiti.indexOf(elementoDaRimuovere);
    if (elementoDaRimuovere != -1) { 
       preferiti.splice(elementoDaRimuovere, 1);
      
      console.log("è stato rimosso l'elemento");

  } else {
    console.log("l'elemento da eliminare non è presente");
  }
 
 
}

rimuoviDaPreferiti("Terminator");
console.log("Elenco preferiti aggiornato");
mostraPreferiti();




