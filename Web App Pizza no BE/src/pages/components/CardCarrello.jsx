import React from "react";
import styles from "../carrello/carrello.module.scss";

const CardCarrello = ({ title, items, onOrder, onClear }) => {
  const handleOrder = () => {
    console.log("Pagamento effettuato");

    // Chiama la funzione onOrder passata come prop
    onOrder(); // Aggiungi questa riga

    // Mostra un messaggio di conferma dell'ordine
    window.alert("Ordine effettuato con successo!");
  };
  const handleClear = () => {
    // Chiama la funzione onClear passata come prop
    onClear(); // Aggiungi questa riga

    // Mostra un messaggio di conferma
    window.alert("Carrello svuotato con successo!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <h2>{title}</h2>
        {items.map((item, index) => (
          <div key={index}>
            {/* Verifica se item.base è definito prima di accedere alla proprietà nome */}
            {item.base && <p>Base: {item.base.nome}</p>}
            {/* Verifica se item.impasto è definito prima di accedere alla proprietà nome */}
            {item.impasto && <p>Impasto: {item.impasto.nome}</p>}
            {/* Verifica se item.ingredienti è un array prima di chiamare il metodo map */}
            {item.source === "array.js" && (
              <p>
                Ingredienti:{" "}
                {Array.isArray(item.ingredienti)
                  ? item.ingredienti.map((i) => i.nome).join(", ")
                  : ""}
              </p>
            )}
            {/* Se base, impasto e ingredienti non sono presenti, mostra il nome della pizza */}
            {!item.base && !item.impasto && !item.ingredienti && (
              <p>Pizza: {item.pizza}</p>
            )}
          </div>
        ))}
        <div className={styles.option}>
          <button className={styles.addToCart} onClick={handleOrder}>
            Ordina
          </button>
          <button className={styles.addToCart} onClick={handleClear}>
            Svuota Carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarrello;
