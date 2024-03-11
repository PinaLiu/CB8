import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CardCarrello from "../components/CardCarrello";

const Carrello = () => {
  const [carrello, setCarrello] = useState([]);
  const [orderKey, setOrderKey] = useState(0); // Aggiungi questo stato

  // Carica lo stato del carrello dal Local Storage quando il componente viene montato
  useEffect(() => {
    const carrelloSalvato = localStorage.getItem("carrello");
    if (carrelloSalvato) {
      setCarrello(JSON.parse(carrelloSalvato));
    }
  }, []);

  const effettuaOrdine = () => {
    console.log("Stato carrello:", carrello);

    // Svuota il carrello
    setCarrello([]);
    localStorage.removeItem("carrello");

    // Aggiorna la key dell'ordine
    setOrderKey((prevKey) => prevKey + 1); // Aggiungi questa riga
  };

  const handleClearCarrello = () => {
    // Svuota il carrello
    setCarrello([]);
    localStorage.removeItem("carrello");
  };

  return (
    <Layout>
      <CardCarrello
        key={orderKey} // Aggiungi questa prop
        title="Carrello"
        items={carrello}
        onOrder={effettuaOrdine}
        onClear={handleClearCarrello} // Aggiungi questa prop
      />
    </Layout>
  );
};

export default Carrello;
