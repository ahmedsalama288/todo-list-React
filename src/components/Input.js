import React from "react";
import { nanoid } from "nanoid";

function Input(props) {
  // [#] Function To Handle When The User Press On Enter Key
  // Add The Item To The Todo List
  function handleEnterPress(event) {
    // Get The Value Of The Input And Create The Item
    if (event.key === "Enter") {
      const value = event.target.value;
      event.target.value = "";
      props.setTodoList((prevList) => [
        ...prevList,
        {
          value,
          id: nanoid(),
          isDone: false,
          display: true,
        },
      ]);
    }
  }

  return (
    <div className="input-con">
      <span></span>
      <input type="text" name="todo item" onKeyPress={handleEnterPress} />
    </div>
  );
}

export default Input;
