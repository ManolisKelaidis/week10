import { useState } from "react";
const AddTodo = ({ dispatch, id }) => {
  const [text, setText] = useState("");
  console.log(text);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch({ type: "ADD_TODO", text, id });
      setText("");
      id.current += 1;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      &nbsp;
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
