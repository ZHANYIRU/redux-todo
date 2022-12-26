import EditTodo from "./EditTodo";
import { HiX } from "react-icons/hi";
import { delTodo, okTodo, editing, editText } from "../action/action";
function TodoItem({ todoInit, dispatch }) {
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
            <EditTodo
              id={el.id}
              text={el.text}
              editText={editText}
              dispatch={dispatch}
            />
          ) : (
            <p
              style={{ textDecoration: el.completed && "line-through" }}
              onDoubleClick={() => dispatch(editing(el.id))}
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
