import "../addTodoInput/index.scss";
import { useState } from "react";

const AddTodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => setInputValue(e.target.value);

  return (
    <form className="AddTodoInput" action="">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Aggiungi qualcosa alla To Do List"
      />
      <button className="btn" type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodoInput;
