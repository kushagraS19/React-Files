import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputValue = useRef(0);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    let AddValue = inputValue.current.value;
    dispatch({ type: "ADD", payload: { AddValue } });
    inputValue.current.value = "";
  };

  const handleSubstract = () => {
    let SubValue = inputValue.current.value;
    dispatch({ type: "SUBSTRACT", payload: { SubValue } });
    inputValue.current.value = "";
  };

  const handleToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >        
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={handleToggle}>
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputValue}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubstract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
