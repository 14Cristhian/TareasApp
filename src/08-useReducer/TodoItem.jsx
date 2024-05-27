export const TodoItem = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        style={{ cursor: "pointer" }}
        onClick={() => onToggleTodo(todos.id)}
        className={`align-self-center ${
          todos.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todos.description}
      </span>
      <button
        onClick={() => onDeleteTodo(todos.id)}
        className="btn btn-danger "
      >
        Borrar
      </button>
    </li>
  );
};
