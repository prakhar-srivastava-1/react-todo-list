import React from "react";

function App() {
  // start using state
  const [item, setItem] = React.useState("");
  const [listItems, setListItem] = React.useState([]);

  function captureItem(event) {
    const { value } = event.target;
    setItem(value);
  }

  function addToList() {
    setListItem((prevValue) => {
      console.log([...prevValue, item]);
      return [...prevValue, item];
    });
  }

  function addListTags(item) {
    return <li>{item}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={captureItem} type="text" />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listItems.map(addListTags)}</ul>
      </div>
    </div>
  );
}

export default App;
