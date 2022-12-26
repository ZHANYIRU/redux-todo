import TodoList from "./TodoList/TodoList";
import { Provider, useSelector } from "react-redux";
import store from "./TodoList/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
