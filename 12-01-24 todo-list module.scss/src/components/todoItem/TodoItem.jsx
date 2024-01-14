// import "./index.scss";
import styles from "./index.module.scss";

const TodoItem = ({ todoItemData, setTodoList }) => {
  const { id, todo, completed, userId } = todoItemData;

  const onHandleDelete = () => {
    const confirmIt = confirm("Sei sicuro di voler cancellare?");

    if (confirmIt) {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <li className={styles.TodoItem}>
      <div className={styles.item}>
        <p>{todo}</p>
        <button onClick={onHandleDelete}>❎</button>
      </div>
      {/* <div className={styles.separator}></div> */}
    </li>
  );
};

export default TodoItem;
