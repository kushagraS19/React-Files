import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div id={styles.elementContainer}>
      {todoItems.map((item) => (
        <TodoItem
          TodoName={item.name}
          key={item.name}
          Tododate={item.DueDate}
         
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
