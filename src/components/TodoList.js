import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ tasks, dispatch }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem dispatch={dispatch} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
