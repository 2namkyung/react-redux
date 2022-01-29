import React, { useRef } from "react";

// Dumb Component, Presentational Component
function Form({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>add</button>
    </div>
  );

  function click() {
    const todo = inputRef.current.value;
    add(todo);
    inputRef.current.value = "";
  }
}

export default Form;