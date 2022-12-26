import EditTodo from "./EditTodo";
import { HiX } from "react-icons/hi";
import { delTodo, okTodo } from "./action/action";
function TodoItem({ todoInit, dispatch }) {
  // const editing = (id) => {
  //   const newTodo = todo.map((v) => {
  //     if (v.id === id) {
  //       return { ...v, edit: true };
  //     }
  //     return { ...v };
  //   });
  //   setTodo(newTodo);
  // };
  // const edit = (id, text) => {
  //   const newTodo = todo.map((v) => {
  //     if (v.id === id) {
  //       return { ...v, text: text, edit: false };
  //     }
  //     return { ...v };
  //   });
  //   setTodo(newTodo);
  // };
  const editing = () => {};
  const edit = () => {};
  return todoInit.map((el, i) => {
    return (
      <div className="matter" key={el.id}>
        <div>
          <input
            type="checkbox"
            checked={el.completed}
            onChange={() => dispatch(okTodo(el.id))}
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
        <HiX onClick={() => dispatch(delTodo(el.id))} />
      </div>
    );
  });
}

export default TodoItem;
