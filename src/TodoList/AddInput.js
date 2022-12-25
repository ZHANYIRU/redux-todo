import React, { useState } from "react";

function AddInput({ addTodo }) {
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
          if (addValue !== "") addTodo(addValue);
          setAddValue("");
        }}
      >
        ＋
      </button>
    </>
  );
}

export default AddInput;
