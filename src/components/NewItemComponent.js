import React, { useState } from "react";

export function NewItemComponent(props) {
  const [newItemText, setNewItemText] = useState("");
  const [errroMessage, setErrorMessage] = useState("");

  function handleSubmitButton(e) {
    e.preventDefault();
    if (newItemText == "") {
      setErrorMessage("you can't have an empty todo");

      return;
    }
    props.onItemAdded(newItemText);
    setNewItemText("");
  }

  function handleTextModelChange(e) {
    setNewItemText(e.target.value);
  }
  return (
    <form onSubmit={handleSubmitButton}>
      <input type="text" value={newItemText} onChange={handleTextModelChange} />
      <input type="submit" />
      <br />
      {errroMessage}
    </form>
  );
}
