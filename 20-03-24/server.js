// per gestire le variabili d'ambiente
require("dotenv").config();

// console.log(process.env.DATABASE_URL);

const express = require("express");
const mongoose = require("mongoose");
const Pizza = require("./models/pizza");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

//DB ok o errore
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//GET pizze
app.get("/pizze", async (req, res) => {
  try {
    const pizze = await Pizza.find();
    res.json(pizze);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//POST pizza
app.post("/pizze", async (req, res) => {
  const pizza = new Pizza({
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const newPizza = await pizza.save();
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET pizza by id
app.get("/pizze/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    res.json(pizza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//PUT pizza
app.put("/pizze/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza non trovata" });
    } else {
      const { name, price } = req.body;
      pizza.name = name;
      pizza.price = price;
      const updatedPizza = await pizza.save();
      res.status(201).json(updatedPizza);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE pizza
app.delete("/pizze/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Pizza eliminata" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3001);
