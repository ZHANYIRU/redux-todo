import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style/Todo.scss";
import AddInput from "./AddInput";
import TodoItem from "./TodoItem";
import TodoBar from "./TodoBar";
import ToggleTodo from "./ToggleTodo";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
function TodoList() {
  const todoInit = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();
  const matter = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    //todo數量增加時觸發
    matter.current?.scrollIntoView({ behavior: "smooth" });
  }, [todoInit.length]);
  return (
    <>
      <button onClick={() => i18n.changeLanguage("zh")}>中文</button>
      <button onClick={() => i18n.changeLanguage("en")}>英文</button>
      <div className="container">
        <h1>{t("TodoList")}</h1>
        {/* Add things to do */}
        <p>{t("addTitle")}</p>
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
          <p>{t("toggle")}</p>
          <ToggleTodo dispatch={dispatch} />
        </div>
        <div className="add">
          {/* Add to list */}
          <p>{t("addList")}</p>
          <div>
            <AddInput dispatch={dispatch} t={t} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
