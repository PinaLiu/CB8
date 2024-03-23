// per gestire le variabili d'ambiente
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
//jsonwebtoken e bcrypt
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Pizza = require("./models/pizza");
const Auth = require("./models/auth");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

//DB ok o errore
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//Esercitazione 20-03-2024
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

//Esercitazione 22-03-2024
//integrare una chiamata di tipo POST all'interno del vostro server, che effettui la registrazione di un nuovo utente. Ricordate di utilizzare jsonwebtoken e bcrypt.
//registrazione utente
app.post("/register", async (req, res) => {
  try {
    //generare hash e poi accesso tramite token

    //password codificata
    const hashedPassword = await bcrypte.hash(req.body.password, 10);

    const user = new Auth({
      username: req.body.username,
      password: hashedPassword,
    });
    const newUser = await user.save();
    res.status(201).json({ message: "Utente registrato", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: " la registrazione non è andata a buon fine" });
  }
});

//avanzato
//All'esercizio 1 aggiungere anche la chiamata POST per /login e il middleware che effettua la convalida del TOKEN generato all'atto di login stesso. Restituire quindi qualcosa se l'autenticazione va a buon fine (es. la lista delle pizze tramite GET autorizzata). ............

//login utente
app.post("/login", async (req, res) => {
  const user = await Auth.findOne({ username: req.body.username });

  if (user === null) {
    return res.status(400).json({ message: "Utente non trovato" });
  }
  //se l'utente c'è allora confronto la password
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      //genero il token
      const token = jwt.sign({ user }, process.env.SECRET_KEY);
      res.json({ message: "Login effettuato", token: token });
      //se il login viene effettuato correttamente, allora restituire la lista delle pizze
      app.get("/pizze", async (req, res) => {
        try {
          const pizze = await Pizza.find();
          res.json(pizze);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Password errata" });
  }
});
app.listen(3001);
