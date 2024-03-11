import React from "react";
import styles from "../creaPizza/creaPizza.module.scss";

const CardGenerator = ({ title, options, selectedOption, handleClick }) => {
  const selectedOptionArray = Array.isArray(selectedOption)
    ? selectedOption
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <h2>{title}</h2>
        {options.map((option) => (
          <div key={option.id} className={styles.option}>
            <p>
              {option.nome}
              {option.ingredienti && (
                <p className={styles.smallP}>
                  Ingredienti: {option.ingredienti}
                </p>
              )}
            </p>

            {selectedOption === option.id && <p> ✓</p>}
            <input
              className={styles.btn_option}
              type="button"
              value="+"
              onClick={() => handleClick(option.id)}
            />
            {/* {console.log("selectedOption:", selectedOption)} */}
            {selectedOptionArray.includes(option.id) &&
              title === "Scegli gli ingredienti" && (
                <input
                  className={styles.btn_option}
                  type="button"
                  value="-"
                  onClick={() => handleRemove(option.id)}
                />
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGenerator;
