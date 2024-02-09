import React from "react";
import styles from "../creaPizza/creaPizza.module.scss";

const CardGenerator = ({ items, selectedId, type, handleClick }) => {
  return (
    <div className={styles.options}>
      <h3>{type}</h3>
      {items.map((item) => (
        <div key={item.id} className={styles.option}>
          <p>{item.nome}</p>
          {selectedId === item.id && <p>Selezionato!</p>}
          <input
            className={styles.btn_option}
            type="button"
            value="+"
            onClick={() => handleClick(type, item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGenerator;
