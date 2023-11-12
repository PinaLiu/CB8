const fullScreen = (title, description, btnText) => {
  const headerEL = document.createElement("header");
  const divEl = document.createElement("div");
  //   const imgEl = document.createElement("img");
  const titleEl = document.createElement("h1");
  const parEL = document.createElement("p");
  const btnEl = document.createElement("button");

  headerEL.setAttribute("class", "main");
  //   imgEl.setAttribute("src", imgUrl);
  //   imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  parEL.textContent = description;
  btnEl.textContent = btnText;

  // Aggiungo gli elementi al div interno all'header
  divEl.append(titleEl, parEL, btnEl);
  // Aggiungo il div all'header
  headerEL.appendChild(divEl);

  //esercizio2
  btnEl.addEventListener("click", () => {
    headerEL.classList.add("click"); //aggiungo la classe click all'header
  });

  return headerEL; //restituisco l'elemento creato che contiete tt gli altri elementi della funzione
};

document.body.append(
  fullScreen(
    "Lorem ipsum dolor sit",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "Cliccami!"
  )
);

//esercizio 3
//creare div che deve contenere la gallery
//div class=gallery - h3 Gallery
//imageGeneretor(id, imgUrl, altText)
const galleryEl = document.createElement("div");
galleryEl.setAttribute("class", "gallery");
galleryEl.classList.add("gallery");

const titleGalleryEl = document.createElement("h3");
titleGalleryEl.textContent = "Galleria";

const galleryContainerEl = document.createElement("div");
galleryContainerEl.classList.add("gallery-container");

document.body.append(galleryEl);
galleryEl.append(titleGalleryEl);
galleryEl.append(galleryContainerEl);

//
const imageGeneretor = (id, imgUrl, altText) => {
  const imgEl = document.createElement("img");

  imgEl.setAttribute("id", id);
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", altText);

  galleryContainerEl.appendChild(imgEl);

  return imgEl;
};
// le immagini risultano attaccate, cosa manca? non avevo appeso tt l'array -.-
const img1 = imageGeneretor(
  "1",
  "https://picsum.photos/200/200?1",
  "Immagine alternativa 1"
);

// document.body.append(img1);

const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

for (let i = 0; i < imageList.length; i++) {
  const { id, imgUrl, altText } = imageList[i];
  imageGeneretor(id, imgUrl, altText);
}
document.body.append(galleryEl);
