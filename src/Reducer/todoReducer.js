import * as actions from "../action/action";
const initState = [
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
];
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: Number(new Date()),
          text: action.payload.text,
          completed: false,
          edit: false,
        },
      ];
    case actions.DEL_TODO:
      return state.filter((v) => v.id !== action.payload.id);
    case actions.OK_TODO:
      const newTodo = state.map((v) => {
        if (v.id === action.payload.id) {
          return { ...v, completed: !v.completed };
        }
        return { ...v };
      });
      return newTodo;
    case actions.EDITING:
      const editTodo = state.map((v) => {
        if (v.id === action.payload.id) {
          return { ...v, edit: !v.edit };
        }
        return { ...v };
      });
      return editTodo;
    case actions.EDIT_TEXT:
      const editText = state.map((v) => {
        if (v.id === action.payload.id) {
          return { ...v, text: action.payload.text, edit: !v.edit };
        }
        return { ...v };
      });
      return editText;
    case actions.TOGGLE_TODO:
      if (action.payload.toggle === "false") {
        //找出未完成跟已完成
        const falseTodo = state.filter((v) => v.completed === false);
        const trueTodo = state.filter((v) => v.completed === true);
        //新的陣列-已完成在後方
        const newTodo = [...falseTodo, ...trueTodo];
        return newTodo;
      } else {
        //陣列依照id由小至大排序
        const copyTodo = [...state];
        const newTodo = copyTodo.sort((a, b) => {
          return a.id - b.id;
        });
        return newTodo;
      }
    default:
      return state;
  }
};
export default todoReducer;
