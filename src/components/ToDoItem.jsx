import React from "react";

function ToDoItem(props) {
  return (
    <div onClick={ () => {
      // trigger deleteNode(id)
      props.onClickDelete(props.id);
    }}>
      <li>{props.toDoItemText}</li>
    </div>
  );
}

export default ToDoItem;
