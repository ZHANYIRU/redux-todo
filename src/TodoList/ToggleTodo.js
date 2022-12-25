import React from "react";

function ToggleTodo({ toggle, toggleTodo }) {
  return (
    <>
      <input
        type="checkbox"
        id="btn"
        checked={toggle}
        onChange={() => toggleTodo(toggle)}
      />
      <label htmlFor="btn"></label>
    </>
  );
}

export default ToggleTodo;
