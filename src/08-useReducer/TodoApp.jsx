import { UseTodos } from "../hooks/UseTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  } = UseTodos();

  return (
    <>
      <h1>
        Tareas {todosCount}
        <small> Tareas Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Tareas</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
