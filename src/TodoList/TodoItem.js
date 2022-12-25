import EditTodo from "./EditTodo";
import { HiX } from "react-icons/hi";
function TodoItem({ todo, setTodo, delTodo, okTodo }) {
  const editing = (id) => {
    const newTodo = todo.map((v) => {
      if (v.id === id) {
        return { ...v, edit: true };
      }
      return { ...v };
    });
    setTodo(newTodo);
  };
  const edit = (id, text) => {
    const newTodo = todo.map((v) => {
      if (v.id === id) {
        return { ...v, text: text, edit: false };
      }
      return { ...v };
    });
    setTodo(newTodo);
  };
  return todo.map((el, i) => {
    return (
      <div className="matter" key={el.id}>
        <div>
          <input
            type="checkbox"
            checked={el.completed}
            onChange={() => okTodo(el.id)}
            id={el.id}
          />
          <label htmlFor={el.id}></label>
          {el.edit ? (
            <EditTodo id={el.id} text={el.text} edit={edit} />
          ) : (
            <p
              style={{ textDecoration: el.completed && "line-through" }}
              onDoubleClick={() => editing(el.id)}
            >
              {el.text}
            </p>
          )}
        </div>
        <HiX onClick={() => delTodo(el.id)} />
      </div>
    );
  });
}

export default TodoItem;
