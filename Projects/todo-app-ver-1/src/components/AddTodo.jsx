import { useState } from "react";
import styles from "./AddTodo.module.css";
import { GrFormAdd } from "react-icons/gr";

function AddTodo({ onAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); 
    onAdd(todoName, todoDate);
    setTodoDate("");
    setTodoName(""); 
  };

  return (
    <div className="container-text-center">
      <form className={`${styles.KsRow} row`}
      onSubmit={handleAddButtonClicked}>
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
          type="submit"
            className={`${styles.ksBtn} btn btn-success`}
          >
            <GrFormAdd></GrFormAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
