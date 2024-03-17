const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

//
let pizze = [
  {
    id: 1,
    name: "Margherita",
    price: 5.5 + "€",
    photo:
      "https://www.pizzapronto.com/wp-content/uploads/2020/05/margherita-pizza.jpg",
  },
  {
    id: 2,
    name: "Marinara",
    price: 6.5 + "€",
    photo:
      "https://www.pizzapronto.com/wp-content/uploads/2020/05/marinara-pizza.jpg",
  },
];

app.get("/pizze", (req, res, next) => {
  res.json(pizze);
});

app.post("/pizze", (req, res, next) => {
  const body = req.body;
  console;
  if (body.name && body.price && body.photo) {
    pizze.push(body);
    res.status(201).send("Pizza added to the menu");
  } else {
    res.status(400).send("Invalid input");
  }
});

app.delete("/pizze/:id", (req, res, next) => {
  const id = req.params.id;
  pizze = pizze.filter((pizza) => pizza.id != id);
  res.status(200).send("Pizza removed from the menu");
});

app.put("/pizze/:id", (req, res, next) => {
  //valori su dove dobbiamo fare la modifica
  const id = Number(req.params.id);
  const body = req.body;
  const index = pizze.findIndex((pizza) => pizza.id === id);

  if (index === -1) {
    res.status(400).send("Non ho trovato la pizza");
  } else {
    pizze[index] = body;
    res.send("La pizza  è stato modificato!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
