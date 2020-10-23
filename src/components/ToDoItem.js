import React, { useState, useEffect } from "react";

export function ToDoItem(props) {
  function handleDelete(ev) {
    props.onItemDeleted(props.name);
  }

  return (
    <li>
      {props.name}
      &nbsp; <button onClick={handleDelete}>-</button>
    </li>
  );
}
