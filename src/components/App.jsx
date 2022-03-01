import React from "react";

// import ToDoItem component
import ToDoItem from "./ToDoItem.jsx";
// import Input component
import Input from "./Input.jsx";

function App() {
  // start using state
  const [listItems, setListItem] = React.useState([]);

  // add the captured value to existing array
  function addToList(item) {
    // prevValue holds current array
    setListItem((prevValue) => {
      return [...prevValue, item];
    });
  }

  // function to delete the clicked item
  // takes in id and returns array without that element
  function deleteNote(id) {
    const newList = listItems.filter((value, index) => {
      return index !== id;
    });
    setListItem(newList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <Input addItem={addToList} />
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
