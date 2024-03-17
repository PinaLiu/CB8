const express = require("express");
const bodyParser = require("body-parser");

const books = require("./server.js");
const app = express();

// bodyParser per gestire i dati del form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add-book", (req, res) => {
  res.send(`
  <form action="/books" method="post">
    <input type="text" name="title" placeholder="Title">
    <input type="text" name="author" placeholder="Author">
    <button type="submit"> Add Book </button>
    </form>`);
});

app.post("/books", (req, res) => {
  let newBook = {
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.redirect("/books");
});

app.get("/books", (req, res) => {
  res.send(`
      <h1>Libri preferiti</h1>
      ${books.map((book) => `<p>${book.title} di ${book.author}</p>`).join("")}
      <a href="/add-book">Aggiungi un altro libro</a>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
