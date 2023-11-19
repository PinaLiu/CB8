//creare un popup
const popupEl = () => {
  const wrapperEL = document.createElement("div");
  const textEl = document.createElement("p");
  const divBtn = document.createElement("div");
  const btnY = document.createElement("button");
  const btnN = document.createElement("button");

  wrapperEL.className = "popup";
  textEl.textContent = "Sei maggiorenne";
  divBtn.className = "divBtn";
  btnY.textContent = "SI";
  btnN.textContent = "NO";

  divBtn.append(btnY, btnN);
  wrapperEL.append(textEl, divBtn);

  //click btn si
  btnY.addEventListener("click", function () {
    const popup = document.querySelector(".popup"); //query selector selezione tt gli elementi della classe, in questo caso .popup
    popup.remove();

    //ripristinare la classe product al click si
    const productON = document.querySelectorAll(".product");

    // cambia il modo in cui l'elemento viene visualizzato, passando da display: none; a display: flex; (visualizzato come un contenitore flessibile).
    productON.forEach((product) => {
      product.style.display = "flex";
    });
  });

  //click btn no
  btnN.addEventListener("click", function () {
    window.location.href = "https://www.google.com";
  });

  return wrapperEL;
};
//pagina nascosta

setTimeout(() => {
  document.body.append(popupEl());
}, 3500);

//Eseguire una chimata di tipo fetch al seguente indirizzo https://dummyjson.com/products. Dalla risposta che ne consegue, stampare un array che contiene non tutti i valori ma solo quelli il cui prezzo (chiave price) sia inferiore a 50.

const productPriceGen = (data) => {
  const wrapperEl = document.createElement("div");
  const imgEL = document.createElement("img");
  const titleEL = document.createElement("h3");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");

  wrapperEl.className = "product";
  titleEL.textContent = data.title;
  imgEL.src = data.thumbnail; //
  imgEL.alt = data.title; //testo alternativo dell'immagine

  priceEl.textContent = data.price + "€";

  textEl.append(titleEL, priceEl); // iniziare dagli elementi più interni
  wrapperEl.append(imgEL, textEl);

  return wrapperEl;
};
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const filterPrice = data.products.filter((products) => products.price < 50);

    filterPrice.forEach((products) => {
      document.body.append(productPriceGen(products));
    });
  });
// res2.products.filter((products) => pprodocts.price < 50));
