import React from "react";

function Input(props) {

  const [item, setItem] = React.useState("");

  // Capture what has been passed to text field
  function captureItem(event) {
    const { value } = event.target;
    setItem(value);
  }

  return (
    <div className="form">
      <input onChange={captureItem} type="text" value={item} />
      <button onClick={ () => {
        props.addItem(item);
        setItem("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
