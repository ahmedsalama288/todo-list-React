import React from "react";

function Options(props) {
  const [selected, setSelected] = React.useState("all");
  function handleSelected(event) {
    setSelected(event.target.id)
  }

  return (
    <li className="options">
      <p>
        <span>{props.itemsNums}</span> items lift
      </p>
      <div className="options-functions">
        <span
          id="all"
          className={`${selected === "all"? "selected-op": ""}`}
          onClick={(event) => {
            props.displayAll();
            handleSelected(event);
          }}
        >
          All
        </span>
        <span
          id="active"
          className={`${selected === "active"? "selected-op": ""}`}
          onClick={(event) => {
            handleSelected(event);
            props.displayActive();
          }}
        >
          Active
        </span>
        <span
          id="completed"
          className={`${selected === "completed"? "selected-op": ""}`}
          onClick={(event) => {
            props.displayCompleted();
            handleSelected(event);
          }}
        >
          Completed
        </span>
      </div>
      <span
        id="clear-completed"
        onClick={(event) => {
          props.clearCompleted();
          handleSelected(event);
        }}
      >
        Clear Completed
      </span>
    </li>
  );
}

export default Options;
