export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const OK_TODO = "OK_TODO";
export const EDITING = "EDITING";
export const EDIT_TEXT = "EDIT_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});
export const delTodo = (id) => ({
  type: DEL_TODO,
  payload: { id },
});
export const okTodo = (id) => ({
  type: OK_TODO,
  payload: { id },
});
export const editing = (id) => ({
  type: EDITING,
  payload: { id },
});
export const editText = (id, text) => ({
  type: EDIT_TEXT,
  payload: { id, text },
});
export const toggleTodo = (toggle) => ({
  type: TOGGLE_TODO,
  payload: { toggle },
});
