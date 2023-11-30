// navbar mobile
const navbarGen = () => {
  const divSearchEl = document.createElement("div");
  const imgNavEl = document.createElement("img");
  const inputEl = document.createElement("input");
  const linksEl = document.createElement("div");
  const ulLinksListEl = document.createElement("ul");
  const liTV = document.createElement("li");
  const liMovies = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  // class
  divSearchEl.className = "search";

  linksEl.className = "links";
  ulLinksListEl.className = "links-list";
  //imgNavbar
  imgNavEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  imgNavEl.alt = "netflix-clone-logo";
  //input
  inputEl.type = "text";
  inputEl.placeholder = "Search";
  //li
  liTV.textContent = "TV Shows";
  liMovies.textContent = "Movies";
  //label
  labelEl.for = "categories";
  labelEl.textContent = "Categories ";
  //select
  selectEl.name = "categories";
  selectEl.id = "categories";
  //option al momento nessun valore
  optionEl.value = "prova";
  optionEl.textContent = " prova";

  selectEl.appendChild(optionEl);
  ulLinksListEl.append(liTV, liMovies, labelEl, selectEl);
  linksEl.appendChild(ulLinksListEl);
  divSearchEl.append(imgNavEl, inputEl);

  return [divSearchEl, linksEl];
};

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

export { navbarGen, cardElGen, cardsListElGen, listsContainerElGen };
