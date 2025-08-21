import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import EmptyMsg from "./components/emptyMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItemsContextProvider from "./store/todoItemsStore";


function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems></TodoItems>
        <EmptyMsg></EmptyMsg>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
