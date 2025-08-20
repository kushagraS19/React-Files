import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { GrFormAdd } from "react-icons/gr";

function AddTodo({ onAdd }) {
  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onAdd(todoName, todoDate);
  };

  return (
    <div className="container-text-center">
      <form className={`${styles.KsRow} row`} onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter To-Do Here"
          />
        </div>

        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>

        <div className="col-2">
          <button type="submit" className={`${styles.ksBtn} btn btn-success`}>
            <GrFormAdd></GrFormAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
