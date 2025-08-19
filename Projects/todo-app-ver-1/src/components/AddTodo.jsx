import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onAdd(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container-text-center">
      <div className={`${styles.KsRow} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To-Do Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>

        <div className="col-2">
          <button
            type="button"
            className={`${styles.ksBtn} btn btn-success`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
