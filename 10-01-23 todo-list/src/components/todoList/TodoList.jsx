import { useState } from "react";
import { list } from "../mocks";
import "./index.scss";
import TodoItem from "../todoItem/TodoItem";

const TodoList = () => {
  const [listData, setListData] = useState(list);

  return (
    <div className="TodoList">
      {listData.map((item) => (
        <TodoItem todoData={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
