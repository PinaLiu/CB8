// ESERCIZIO 1 Async/Await
// Endpoint: https://picsum.photos/v2/list
// console log che presenti i soli valori contenuti dentro la chiave download_url

// fetch("https://picsum.photos/v2/list")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//async/await
const arrayGET = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data;
};

//console.log(arrayGET()); // mi ritorna una promise
//arrayGET().then((res) => console.log(res));

//syso solo valori download_url
arrayGET().then((res) => {
  const filterUrl = res.map((risultato) => risultato.download_url);
  console.log(filterUrl);
});

//ESERCIZIO 2 aggiungi un immagine e un testo
// const img1 = {
//   id: "0",
//   author: "Alejandro Escamilla",
//   download_url: "https://picsum.photos/id/0/5000/3333",
// };

const imgGeneretion = (dataImg) => {
  //dataImg racchiuderà i singoli elementi di id author e download_url
  const divImg = document.createElement("div");
  const titleEL = document.createElement("h2");
  const imgEL = document.createElement("img");
  const authorEL = document.createElement("p");

  divImg.className = "divImg";
  titleEL.textContent = "Immagini";
  imgEL.src = dataImg.download_url;
  authorEL.textContent = dataImg.author;

  divImg.append(titleEL, imgEL, authorEL);

  return divImg;
};

//document.body.appendChild(imgGeneretion(img1)); //esercizio 2

//esercizio avanzato
arrayGET().then((res) => {
  res.map((imgData) => {
    const imgElement = imgGeneretion(imgData);
    document.body.appendChild(imgElement);
  });
});
