import React, { useState } from "react";
import TodoForm from "./TodoForm";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete?'todo-complete':"todo-list"}>
      <div key={todo.id}  className='todo-row'>
        {todo.text}
      </div>

      <div class="dropdown">
        <button class="dropbtn">select</button>
        <div class="dropdown-content">
          <button
            className="edit "
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            edit
          </button>
          <button className="remove " onClick={() => removeTodo(todo.id)}>
            remove
          </button>

          <button className="remove " onClick={() => completeTodo(todo.id)} >
            complete
          </button>
        </div>
      </div>

      <div className="icons"></div>
    </div>
  ));
}

export default Todo;
