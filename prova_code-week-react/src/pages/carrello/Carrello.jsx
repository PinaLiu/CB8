import React from "react";
import Layout from "../components/Layout";
import styles from "./carrello.module.scss";
import { useState, useEffect } from "react";

const Carrello = ({}) => {
  const [carrello, setCarrello] = useState([]);

  // Carica lo stato del carrello dal Local Storage quando il componente viene montato
  useEffect(() => {
    const carrelloSalvato = localStorage.getItem("carrello");
    if (carrelloSalvato) {
      setCarrello(JSON.parse(carrelloSalvato));
    }
  }, []);

  console.log("Stato carrello:", carrello);

  const paga = () => {
    // pagamento mettere in carrello
    console.log("Pagamento effettuato");
  };
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.options}>
          <h2>Carrello</h2>
          {carrello &&
            carrello.map((pizza, index) => (
              <div key={index}>
                <p>Base: {pizza.base.nome}</p>
                <p>Impasto: {pizza.impasto.nome}</p>
                <p>
                  Ingredienti:
                  {pizza.ingredienti
                    .map((ingrediente) => ingrediente.nome)
                    .join(", ")}
                </p>
              </div>
            ))}

          <button className={styles.addToCart} onClick={paga}>
            Paga
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Carrello;
