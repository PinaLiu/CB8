import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import CardGenerator from "../components/CardGenerator";
import styles from "../creaPizza/creaPizza.module.scss";
import { menuClassiche, menuSpeciali } from "../../utils/Menu";

function Menu({}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (id, message) => {
    console.log(message + " " + id);
    setSelectedOption(id);
  };

  // Funzione per trovare la pizza selezionata
  const findSelectedPizza = () => {
    const selectedPizza =
      menuClassiche.find((pizza) => pizza.id === selectedOption) ||
      menuSpeciali.find((pizza) => pizza.id === selectedOption);
    return selectedPizza || null; // Ritorna l'intero oggetto pizza, non solo il nome
  };

  const aggiungiAlCarrello = () => {
    const selectedPizza = findSelectedPizza();
    if (!selectedPizza) {
      console.log("Nessuna pizza selezionata");
      return;
    }

    console.log("Pizza aggiunta al carrello:", selectedPizza.nome);

    // Creazione di un oggetto temporaneo con le proprietà attese dal componente CardCarrello
    const pizzaToAddToCart = {
      base: null, // Aggiungi la logica necessaria per determinare la base
      impasto: null, // Aggiungi la logica necessaria per determinare l'impasto
      ingredienti: null,
      pizza: selectedPizza.nome, // Utilizza gli nome della pizza selezionata
    }; // Utilizza gli nome della pizza selezionata

    // Recupera il carrello dal Local Storage
    let carrello = localStorage.getItem("carrello");
    carrello = carrello ? JSON.parse(carrello) : [];

    // Aggiungi la pizza al carrello
    carrello.push(pizzaToAddToCart);

    // Salva il carrello aggiornato nel Local Storage
    localStorage.setItem("carrello", JSON.stringify(carrello));

    // Mostra il messaggio
    setShowMessage(true);

    // Nasconde il messaggio dopo 2 secondi
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    // Cancella la pizza selezionata
    setSelectedOption(null);
  };

  return (
    <Layout>
      <h1>Le nostre Pizze</h1>
      <CardGenerator
        title={"Le classiche"}
        options={menuClassiche}
        selectedOption={selectedOption}
        handleClick={(id) => handleClick(id, "Pizza selezionata:")}
      />
      <CardGenerator
        title={"Le speciali"}
        options={menuSpeciali}
        selectedOption={selectedOption}
        handleClick={(id) => handleClick(id, "Pizza selezionata:")}
      />

      <div suppressHydrationWarning={true} className={styles.container}>
        <div className={styles.options}>
          <h2>La tua Pizza</h2>
          {findSelectedPizza() && <p>Hai scelto: {findSelectedPizza().nome}</p>}
          {showMessage && <h2>Pizza aggiunta al carrello!</h2>}
          <div className={styles.option}>
            <button className={styles.addToCart} onClick={aggiungiAlCarrello}>
              Aggiungi al carrello
            </button>

            <Link href="/carrello">
              <button className={styles.addToCart}>Vai al Carrello</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
