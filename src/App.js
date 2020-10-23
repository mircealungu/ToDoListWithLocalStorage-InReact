import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToDoList } from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList name="Personal" />
      <ToDoList name="Work" />
    </div>
  );
}

export default App;
