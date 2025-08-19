import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"


const TodoItems = ({ todoItems , onDeleteClicked }) => {
  return (
    <div id={styles.elementContainer}>
      {todoItems.map((item) => (
        <TodoItem TodoName={item.name} key = {item.name}Tododate={item.DueDate} onDeleteClicked = {onDeleteClicked}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
