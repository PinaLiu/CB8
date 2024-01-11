import "./index.scss";

const TodoItem = ({ todoData }) => {
  return (
    <li className="TodoItem">
      <div className="item">
        <p>{todoData.todo}</p>
        <button>❎</button>
      </div>
      <div className="separator"></div>
    </li>
  );
};

export default TodoItem;
