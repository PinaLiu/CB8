import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "./components/Layout";
//crea un cardGenerator per ogni blocco

export default function Home() {
  return (
    <>
      <Layout>
        <div className="header">
          <h2>Crea la TUA Pizza in 3 passaggi</h2>
          <p>Scegli l’impasto, la base e la farcitura.</p>
        </div>

        <div className="container-main animation move description">
          <img
            className="img_number"
            src="https://img.freepik.com/premium-vector/doodle-number-one-background-cream_409898-385.jpg"
            alt="1"
          />
          <h4>SCEGLI L’IMPASTO</h4>{" "}
          <img
            className="img"
            src="https://static.vecteezy.com/ti/vettori-gratis/p3/17587912-impasto-pane-farina-pizza-impostato-cartone-animato-vettore-illustrazione-vettoriale.jpg"
            alt="Base"
          />{" "}
        </div>
        <div className="container-main animation move description">
          <img
            className="img_number"
            src="data:image/jpeg;base64,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"
            alt="2"
          />
          <h4>SCEGLI LA BASE</h4>
          <img
            className="img"
            src="https://img.freepik.com/premium-vector/base-pizza-set-making-about-collecting-pizza-raw-cooked-dough-with-toppings-cheese-tomato-sauce-mayonnaise-vector-cartoon-illustration_454120-146.jpg?w=740"
            alt="Impasto"
          />
        </div>
        <div className="container-main animation move description">
          <img
            className="img_number"
            src="https://img.freepik.com/premium-vector/doodle-number-three-background-cream_409898-402.jpg?w=360"
            alt="3"
          />

          <h4>SCEGLI GLI INGREDIENTI</h4>

          <img
            className="img"
            src="https://img.freepik.com/free-vector/set-pizza-with-different-toppings-round-base_107791-11892.jpg"
            alt="Base"
          />
        </div>

        <div className="toolbar">
          <Link href="/creaPizza">
            <input type="button" class="ok" value="Crea la Pizza" />
          </Link>
        </div>
      </Layout>
    </>
  );
}
