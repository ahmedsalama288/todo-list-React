import React from "react";
import iconCheck from "../images/iconCheck.svg";

function Item(props) {
  function handleClick() {
    // [#] Update The isDone prop
    props.updateIsDone(props.id);
  }

  function deleteTheItem() {
    props.deleteItem(props.id)
  }

  return (
    <li className="item">
      <span
        className={`completed ${props.isDone ? "active-span" : ""}`}
        onClick={handleClick}
      >
        <span>{props.isDone && <img src={iconCheck} alt="iconCheck" />}</span>
      </span>

      <p onClick={handleClick}>{props.value}</p>
      <span onClick={deleteTheItem} className="delete"></span>
    </li>
  );
}

export default Item;
