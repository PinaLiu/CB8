import styles from "../auguri/auguri.module.scss";
import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import AudioPlayer from "react-audio-player";
// import happyBirthday from "../auguri/happyBirthday.mp3";

//installa npm install react-audio-player
// installa npm install react-confetti
export default function Auguri() {
  const { width, height } = useWindowSize();
  const [confettiColor, setConfettiColor] = useState("");

  const handleColorChange = (event) => {
    // Aggiorna il colore dopo il click su INVIO
    if (event.key === "Enter") {
      setConfettiColor(event.target.value);
      // Cancella l'input dopo INVIO
      event.target.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <Confetti width={width} height={height} colors={[confettiColor]} />
      <h1>Auguri! Buon compleanno!</h1>
      <input
        type="text"
        placeholder="Inserisci il colore dei confetti"
        // onChange={handleColorChange}
        onKeyUp={handleColorChange} // Per usare invio da tastiera
      />{" "}
      <br />
      {/* non funziona!! */}
      {/* <AudioPlayer
        // Il link deve essere solo audio
        src="/happyBirthday.mp3"
        autoPlay={true} // Imposta su true se vuoi che l'audio inizi automaticamente
        controls // Aggiunge i controlli dell'audio (play, pause, volume)
      /> */}
    </div>
  );
}
