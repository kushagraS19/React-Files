import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import EmptyMsg from "./components/emptyMsg";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const handleAddButton = (itemName, itemDueDate) => {
    

    setTodoItems((currValue) => 
     [
      ...currValue,
      { name: itemName, DueDate: itemDueDate },
    ]
  );
  };

  const handleOnDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onAdd={handleAddButton} />
        <TodoItems
          todoItems={todoItems}
          onDeleteClicked={handleOnDelete}
        ></TodoItems>
        {todoItems.length === 0 && <EmptyMsg></EmptyMsg>}
      </center>
    </>
  );
}

export default App;
