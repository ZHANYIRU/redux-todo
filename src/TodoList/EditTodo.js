import { useState } from "react";

function EditTodo({ id, text, edit }) {
  const [editText, setEditText] = useState(text);
  return (
    <input
      type="text"
      className="text"
      value={editText}
      onChange={(e) => {
        setEditText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") edit(id, editText);
      }}
    />
  );
}

export default EditTodo;
