import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style/Todo.scss";
import AddInput from "./AddInput";
import TodoItem from "./TodoItem";
import TodoBar from "./TodoBar";
import ToggleTodo from "./ToggleTodo";
function TodoList() {
  const todoInit = useSelector((state) => state);
  const dispatch = useDispatch();
  //todo的資料
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Learn React.js",
      completed: false,
      edit: false,
    },
    {
      id: 2,
      text: "Learn Golang",
      completed: false,
      edit: false,
    },
    {
      id: 3,
      text: "Learn Docker",
      completed: false,
      edit: false,
    },
    {
      id: 4,
      text: "Learn soming else",
      completed: false,
      edit: false,
    },
  ]);
  //開關切換
  const [toggle, setToggle] = useState(false);
  const matter = useRef(null);
  const toggleTodo = (toggle) => {
    const newToggle = !toggle;
    if (newToggle) {
      //找出未完成跟已完成
      const falseTodo = todo.filter((v) => v.completed === false);
      const trueTodo = todo.filter((v) => v.completed === true);
      //新的陣列-已完成在後方
      const newTodo = [...falseTodo, ...trueTodo];
      setTodo(newTodo);
    } else {
      //陣列依照id由小至大排序
      const newTodo = todo.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      });
      setTodo(newTodo);
    }
    setToggle(newToggle);
  };
  useEffect(() => {
    //todo數量增加時觸發
    matter.current?.scrollIntoView({ behavior: "smooth" });
  }, [todoInit.length, toggle]);
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
          <ToggleTodo toggle={toggle} toggleTodo={toggleTodo} />
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
