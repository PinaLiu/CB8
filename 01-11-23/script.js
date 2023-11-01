// Sulla base dela lezione del giorno, creare un array contenente una lista di 8 animali diversi. Iterare ogni singolo elemento dell'array e stampare in console qualcosa del genere per ogni animale:

// ```javascript
// 1: Lepre
// 2: Corvo
// 3: Serpente
// ...
// ```

// Dove il numero ne rappresenta l'indice.

let animals = [
  "lepre",
  "Corvo",
  "Serpente",
  "Ragno",
  "Topo",
  "Cane",
  "Gatto",
  "Geco",
];

for (let i = 0; i <= animals.length - 1; i++) {
  console.log(i + 1 + ":" + animals[i]);
}
