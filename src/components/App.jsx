import React from "react";

// import ToDoItem component
import ToDoItem from "./ToDoItem.jsx";

function App() {
  // start using state
  const [item, setItem] = React.useState("");
  const [listItems, setListItem] = React.useState([]);

  // Capture what has been passed to text field
  function captureItem(event) {
    const { value } = event.target;
    setItem(value);
  }

  // add the captured value to existing array
  function addToList() {
    // prevValue holds current array
    setListItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  // function to delete the clicked item
  // takes in id and returns array without that element
  function deleteNote(id) {
    console.log(id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={captureItem} type="text" value={item} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* Render all items as <li>'s */}
          {listItems.map((todoItem, index) => (
            <ToDoItem key={index} id={index} toDoItemText={todoItem} onClickDelete={deleteNote} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
