import styles from "../addTodoInput/index.module.scss";
import { useState } from "react";

const AddTodoInput = ({ setTodoList }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999) * new Date(),
      completed: false,
      userId: 404,
      todo: inputValue,
    };

    e.preventDefault();
    setTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.AddTodoInput} action="">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Aggiungi qualcosa alla To Do List"
      />
      <input className={styles.btn} type="submit" value="ADD" />
    </form>
  );
};

export default AddTodoInput;
