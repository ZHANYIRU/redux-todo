import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style/Todo.scss";
import AddInput from "./AddInput";
import TodoItem from "./TodoItem";
import TodoBar from "./TodoBar";
import ToggleTodo from "./ToggleTodo";
function TodoList() {
  const todoInit = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();
  const matter = useRef(null);
  useEffect(() => {
    //todo數量增加時觸發
    matter.current?.scrollIntoView({ behavior: "smooth" });
  }, [todoInit.length]);
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <p>Add things to do</p>
        <div className="main">
          <TodoBar todoInit={todoInit} />
          <div
            className="matterWrap"
            style={{ paddingRight: todoInit.length <= 3 && "40px" }}
          >
            <TodoItem dispatch={dispatch} todoInit={todoInit} />
            {/* 給scrollbar的定位 */}
            <div ref={matter}></div>
          </div>
        </div>
        <div className="switch">
          <p>Move done things to end?</p>
          <ToggleTodo dispatch={dispatch} />
        </div>
        <div className="add">
          <p>Add to list</p>
          <div>
            <AddInput dispatch={dispatch} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
