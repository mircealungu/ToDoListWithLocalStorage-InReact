import React, { useState, useEffect } from "react";
import "./ToDoList.css";
import { NewItemComponent } from "./NewItemComponent";
import { ToDoItem } from "./ToDoItem";

export function ToDoList(props) {
  var itemsInList = ["buy groceries", "drink more water"];
  var itemsInLocalStorage = localStorage.getItem(props.name);
  if (itemsInLocalStorage) {
    itemsInList = JSON.parse(itemsInLocalStorage);
  }

  const [items, setItems] = useState(itemsInList);

  useEffect(() => {
    console.log("use effect called " + props.name);
    localStorage.setItem(props.name, JSON.stringify(items));
  });

  function newItemAdded(newItemText) {
    setItems([...items, newItemText]);
  }

  function itemDeleted(toDeleteItemText) {
    console.log(`about to delete ${toDeleteItemText}`);
    setItems(items.filter((x) => x != toDeleteItemText));
  }

  return (
    <div className="todoList">
      <h1>{props.name}</h1>
      <ul>
        {items.map((x) => (
          <ToDoItem name={x} onItemDeleted={itemDeleted} />
        ))}
      </ul>
      <NewItemComponent onItemAdded={newItemAdded}></NewItemComponent>
    </div>
  );
}
