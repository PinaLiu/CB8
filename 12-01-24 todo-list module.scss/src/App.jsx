import { useEffect, useState } from "react";
import styles from "./App.module.scss";

import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";
function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>To-Do List</h1>
      <AddTodoInput setTodoList={setTodoList} />
      <TodoList todoListData={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
