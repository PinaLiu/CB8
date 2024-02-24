const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

//Devi impostare un’applicazione che abbia una root con html come asset statico. va inserito nella cartella public
app.use(express.static("public"));

//da index.html vado a form.html oppure inserisco index.html nellla cartella public
// app.get("/form", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "form.html"));
// });

//I dati del form saranno visualizzati su un percorso denominato: /mostra-dati uso body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/mostra-dati", (req, res) => {
  console.log(req.body);

  const { nome, email } = req.body;

  if (nome && email) {
    return res
      .status(200)
      .send(`Benvenuto ${nome}. Ti sei registrato con ${email}`);
  }
  res.status(400).send("Per favore aggiungi  i DATI");
});

//Nella home ci sarà anche un link ad una pagina su percorso /dashboard
//ma su questa pagina potrà entrare solo un utente denominato admin.
app.post("/dashboard", (req, res) => {
  const utente = req.body.nome;

  if (utente === "admin") {
    res.send("Benvenuto nella dashboard, admin!");
  } else {
    res
      .status(403)
      .send(
        "Accesso negato. Solo gli utenti admin possono accedere a questa pagina."
      );
  }
});

app.listen(3000, () => console.log("server attivo sulla porta 3000"));
