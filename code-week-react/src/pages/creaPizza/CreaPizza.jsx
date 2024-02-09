import styles from "../creaPizza/creaPizza.module.scss";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
// import Carrello from "../carrello";
import { basi, impasti, ingredienti } from "../../utils/Array";
import Link from "next/link";

export default function CreaPizza() {
  const [base, setBase] = useState("");
  const [impasto, setImpasto] = useState("");
  const [selectedBase, setSelectedBase] = useState(null); //inizialmente non mostra selezionato
  const [selectedImpasto, setSelectedImpasto] = useState(null);
  const [ingredientiSelezionati, setIngredientiSelezionati] = useState([]);
  const [carrello, setCarrello] = useState([]);

  const handleClick = (tipo, id) => {
    if (tipo === "base") {
      setBase(id);
      setSelectedBase(id); //Memorizza l'id della base selezionato
    } else if (tipo === "impasto") {
      setImpasto(id);
      setSelectedImpasto(id); // Memorizza l'id dell'impasto selezionato
    } else if (tipo === "ingredienti") {
      if (
        ingredientiSelezionati.length < 5 &&
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
    console.log("Prop carrello:", carrello);

    setCarrello([...carrello, pizza]);

    // Reset degli stati per una nuova pizza
    setBase("");
    setImpasto("");
    setIngredientiSelezionati([]);
    setSelectedBase(null);
    setSelectedImpasto(null); // Resettiamo lo stato 'ok' quando aggiungiamo al carrello
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

  const paga = () => {
    // pagamento mettere in carrello
    console.log("Pagamento effettuato");
  };

  return (
    <>
      <Layout>
        <div className={styles.title}>
          <h1>Crea la Pizza</h1>
        </div>

        {/* div che contiene impasto e basi */}
        <div className={styles.container}>
          <div className={styles.options}>
            <h2>Basi</h2>
            {basi.map((base) => (
              <div key={base.id} className={styles.option}>
                <p>{base.nome}</p>
                {/* Mostra "Selezionato!" solo per la base selezionata */}{" "}
                {selectedBase === base.id && <p>Selezionato!</p>}
                <input
                  className={styles.btn_option}
                  type="button"
                  value="+"
                  onClick={() => handleClick("base", base.id)}
                />
              </div>
            ))}
          </div>
          <div className={styles.options}>
            <h2>Impasti</h2>
            {impasti.map((impasto) => (
              <div key={impasto.id} className={styles.option}>
                <p>{impasto.nome}</p>
                {/* Mostra "Selezionato!" solo per la impasto selezionata */}
                {selectedImpasto === impasto.id && <p>Selezionato!</p>}
                <input
                  className={styles.btn_option}
                  type="button"
                  value="+"
                  onClick={() => handleClick("impasto", impasto.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* fine impasti e basi */}

        {/* div solo ingredienti */}
        <div className={styles.container}>
          <div className={styles.options}>
            <h2>Scegli gli ingredienti (max 5)</h2>
            {ingredienti.map((ingrediente) => (
              <div className={styles.option} key={ingrediente.id}>
                <p>{ingrediente.nome}</p>
                <div>
                  <input
                    className={styles.btn_option}
                    type="button"
                    value="+"
                    onClick={() => handleClick("ingredienti", ingrediente.id)}
                  />
                  {ingredientiSelezionati.includes(ingrediente.id) && (
                    <input
                      className={styles.btn_option}
                      type="button"
                      value="-"
                      onClick={() => rimuoviIngrediente(ingrediente.id)}
                    ></input>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* fine div seleziona ingredienti  */}

        {/* div "La tua Pizza" */}
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

            <div className={styles.option}>
              <button className={styles.addToCart} onClick={addToCart}>
                Aggiungi al carrello
              </button>
              <Link href="/carrello">
                <button className={styles.addToCart}>Vai al Carrello</button>
              </Link>
            </div>
          </div>

          {/* carrello */}
          {/* <div>
            <h2>Carrello</h2>
            {carrello.map((pizza, index) => (
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
            <button onClick={paga}>Paga</button>
          </div> */}
        </div>
      </Layout>
    </>
  );
}
