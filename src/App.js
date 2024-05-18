import "./App.css";
import { useReducer, useState, useRef } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.id);
      return [
        ...tasks,
        { id: action.id.current, text: action.text, done: false },
      ];

    case "REMOVE_TODO":
      return tasks.filter((task) => task.id !== action.id);

    case "EDIT_TODO":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case "TOGGLE_TODO":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );

    case "DELETE_ALL":
      return [];
    default:
      return tasks;
  }
}
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
