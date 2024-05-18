import "./App.css";
import { useReducer, useState, useRef } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { tasksReducer } from "./helpers/tasksReducer";
function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const id = useRef(0);

  const removeAllTodos = () => {
    dispatch({ type: "DELETE_ALL" });
  };
  return (
    <>
      <h1>Todo List</h1>
      <div className="todo-container">
        <AddTodo id={id} dispatch={dispatch} />
        <TodoList tasks={tasks} dispatch={dispatch} />

        <button onClick={removeAllTodos}>Remove all Tasks</button>
      </div>
    </>
  );
}

export default App;
