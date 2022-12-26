import { useState } from "react";
import { toggleTodo } from "../action/action";
function ToggleTodo({ dispatch }) {
  const [toggle, setToggle] = useState("false");
  return (
    <>
      <input
        type="checkbox"
        id="btn"
        checked={toggle === "true"}
        onChange={() => {
          dispatch(toggleTodo(toggle));
          if (toggle === "true") return setToggle("false");
          return setToggle("true");
        }}
      />
      <label htmlFor="btn"></label>
    </>
  );
}

export default ToggleTodo;
