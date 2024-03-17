import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import CardGenerator from "../components/CardGenerator";

import { basi, impasti, ingredienti } from "../../utils/Array";
import styles from "../creaPizza/creaPizza.module.scss";

export default function CreaPizza() {
  const [base, setBase] = useState("");
  const [impasto, setImpasto] = useState("");
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedImpasto, setSelectedImpasto] = useState(null);
  const [ingredientiSelezionati, setIngredientiSelezionati] = useState([]);
  const [carrello, setCarrello] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (id, tipo) => {
    if (tipo === "base") {
      setBase(id);
      setSelectedBase(id);
    } else if (tipo === "impasto") {
      setImpasto(id);
      setSelectedImpasto(id);
    } else if (tipo === "ingredienti") {
      if (
        ingredientiSelezionati.length < 3 &&
        !ingredientiSelezionati.includes(id)
      ) {
        setIngredientiSelezionati([...ingredientiSelezionati, id]);
      }
    }
  };

  const rimuoviIngrediente = (id) => {
    setIngredientiSelezionati(
      ingredientiSelezionati.filter((ingredienteId) => ingredienteId !== id)
    );
  };

  const addToCart = () => {
    const pizza = {
      base: basi.find((b) => b.id === base),
      impasto: impasti.find((i) => i.id === impasto),
      ingredienti: ingredientiSelezionati.map((id) =>
        ingredienti.find((i) => i.id === id)
      ),
    };

    setCarrello([...carrello, pizza]);
    setBase("");
    setImpasto("");
    setIngredientiSelezionati([]);
    setSelectedBase(null);
    setSelectedImpasto(null);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  useEffect(() => {
    const carrelloSalvato = localStorage.getItem("carrello");
    if (carrelloSalvato) {
      setCarrello(JSON.parse(carrelloSalvato));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrello", JSON.stringify(carrello));
  }, [carrello]);

  return (
    <Layout>
      <div className={styles.title}>
        <h1>Crea la Pizza</h1>
      </div>
      <CardGenerator
        title="Base"
        options={basi}
        selectedOption={selectedBase}
        handleClick={(id) => handleClick(id, "base")}
      />
      <CardGenerator
        title="Impasto"
        options={impasti}
        selectedOption={selectedImpasto}
        handleClick={(id) => handleClick(id, "impasto")}
      />

      <CardGenerator
        title="Scegli gli ingredienti"
        options={ingredienti}
        selectedOption={ingredientiSelezionati}
        handleClick={(id) => handleClick(id, "ingredienti")}
        handleRemove={rimuoviIngrediente}
      />

      <div className={styles.container}>
        <div className={styles.options}>
          <h2>La tua Pizza</h2>
          {base && <p>Base: {basi.find((b) => b.id === base).nome}</p>}
          {impasto && (
            <p>Impasto: {impasti.find((i) => i.id === impasto).nome}</p>
          )}
          {ingredientiSelezionati.length > 0 && (
            <p>
              Ingredienti:
              {ingredientiSelezionati
                .map((id) => ingredienti.find((i) => i.id === id).nome)
                .join(", ")}
            </p>
          )}
          {showMessage && <h2>Pizza aggiunta al carrello!</h2>}

          <div className={styles.option}>
            <button className={styles.addToCart} onClick={addToCart}>
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
