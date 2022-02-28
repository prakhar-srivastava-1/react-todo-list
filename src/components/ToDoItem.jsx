import React from "react";

function ToDoItem(props) {
  const [styleCrossed, toggleCrossed] = React.useState("none");

  function updateState() {
    const newState = styleCrossed === "none" ? "line-through" : "none";
    toggleCrossed(newState);
  }

  return (
    <div onClick={updateState}>
      <li style={{ textDecoration: styleCrossed }}>{props.toDoItemText}</li>
    </div>
  );
}

export default ToDoItem;
