import React from "react";

function TodoBar({ todo }) {
  const todoBar = todo.filter((v) => v.completed === true).length;
  return (
    <div className="progressBar">
      <p>{todoBar === 0 ? 0 : Math.round(100 * (todoBar / todo.length))}%</p>
      <div className="barBack">
        <div
          className="bar"
          style={{
            width: `${
              todoBar === 0 ? 0 : Math.round(100 * (todoBar / todo.length))
            }%`,
          }}
        />
      </div>
    </div>
  );
}

export default TodoBar;
