import { useState } from "react";

const TodoItem = ({ task, dispatch }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  const handleEdit = () => {
    if (edit) {
      console.log(text);
      dispatch({ type: "EDIT_TODO", id: task.id, text });
    }

    setEdit(!edit);
  };
  return (
    <div>
      <li key={task.id}>
        <input
          onChange={() => dispatch({ type: "TOGGLE_TODO", id: task.id })}
          type="checkbox"
          checked={task.done}
        />
        {!edit ? (
          <span>{task.text}</span>
        ) : (
          <input onChange={(e) => setText(e.target.value)} value={text} />
        )}

        <div>
          <button
            onClick={() => dispatch({ type: "REMOVE_TODO", id: task.id })}
          >
            Delete
          </button>
          &nbsp;
          <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
