import styles from "./EmptyMsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore"

function EmptyMsg() {

  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <h4 className={styles.heading}>There is nothing to do now!</h4>;
}

export default EmptyMsg;
