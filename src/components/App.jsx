import React from "react";

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
          {listItems.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
