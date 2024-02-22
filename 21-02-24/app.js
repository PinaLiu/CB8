const express = require("express");
const path = require("path");

const books = require("./catalogo.json");

const app = express();
const port = 3000;

//impostare un’applicazione che abbia una pagina statica html come home page.
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

//• Elenco completo delle risorse mostra l'elenco di tutto il catalogo
app.get("/api/catalogo", (req, res) => {
  res.json(books);
});

//• Visualizzazione delle risorse con scelta di alcuni campi titolo e movie adaptation is true
app.get("/api/filmbooks", (req, res) => {
  const filmbooks = books
    .filter((book) => book.movieAdaptation === true)
    .map((book) => {
      return {
        titolo: book.title,
        adattamento: book.movieAdaptation,
      };
    });
  res.json(filmbooks);
});

//Ricerca per id
app.get("/api/catalogo/:bookID", (req, res) => {
  const { bookID } = req.params;
  const singleBook = books.find((book) => book.id === Number(bookID));
  if (!singleBook) {
    return res.status(404).send("Libro non presente");
  }
  return res.json(singleBook);
});

//• Filtro di ricerca per parola in un campo significativo
app.get("/api/catalogo/search/:keyword", (req, res) => {
  const { keyword } = req.params;
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  );

  //
  let message = `Hai cercato libri con la parola chiave '${keyword}'. <br>
  Ecco l'elenco dei libri che contengono questa parola nel titolo:<br>  `;
  filteredBooks.forEach((book) => {
    message += `- ${book.title} <br>`;
  });

  res.send(message);
});

app.listen(port, () => console.log(`Server attivo nella porta:  ${port}!`));
