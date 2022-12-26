export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const OK_TODO = "OK_TODO";
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
export const toggleTodo = () => ({});
