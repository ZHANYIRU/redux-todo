import * as actions from "../action/action";
const initState = [
  {
    id: 1,
    text: "Learn React.js",
    completed: false,
  },
  {
    id: 2,
    text: "Learn Golang",
    completed: false,
  },
  {
    id: 3,
    text: "Learn Docker",
    completed: false,
  },
  {
    id: 4,
    text: "Learn soming else",
    completed: false,
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
      const index = state.findIndex((v) => v.id === action.payload.id);
      const newTodo = [...state];
      if (newTodo[index].completed) {
        newTodo[index].completed = false;
      } else {
        newTodo[index].completed = true;
      }
      return newTodo;
    default:
      return state;
  }
};
export default todoReducer;
