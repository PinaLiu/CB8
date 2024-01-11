import "./App.scss";

import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";
function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodoInput />
      <TodoList />
    </div>
  );
}

export default App;
