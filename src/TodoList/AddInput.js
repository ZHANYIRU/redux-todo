import { useState } from "react";
import { addTodo } from "./action/action";
function AddInput({ dispatch }) {
  //可控表單用
  const [addValue, setAddValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={addValue}
        onChange={(e) => setAddValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (addValue !== "") dispatch(addTodo(addValue));
          setAddValue("");
        }}
      >
        ＋
      </button>
    </>
  );
}

export default AddInput;
