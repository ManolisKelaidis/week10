export function tasksReducer(tasks, action) {
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
