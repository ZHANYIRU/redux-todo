import { useState } from "react";

function EditTodo({ id, text, editText, dispatch }) {
  const [editTextValue, setEditTextValue] = useState(text);
  return (
    <input
      type="text"
      className="text"
      value={editTextValue}
      onChange={(e) => {
        setEditTextValue(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") dispatch(editText(id, editTextValue));
      }}
    />
  );
}

export default EditTodo;
