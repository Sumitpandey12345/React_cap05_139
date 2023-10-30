import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handelChange = (event) => {
    setText(event.target.value);
  };
  const handelClick = () => {
    const newTodo = {
      id: Math.random() + text + Date.now(),
      todos: text,
      status: false,
    };
    const addTodo = [...todos, newTodo];
    setTodos(addTodo);
    setText("");
  };

  function toggleStatus(id) {
    let updatedArr = todos.map((ele) =>
      ele.id == id ? { todos: ele.todos, status: !ele.status } : ele
    );
    setTodos(updatedArr);
  }
  function delTodo(id) {
    let  updatedArr= todos.filter((ele) => ele.id != id);
    setTodos(updatedArr);
    
  }
  return (
    <>
      <div className="head">
        <h1>Todo App</h1>
      </div>
      <div className="inpcont">
        <input
          type="text"
          value={text}
          id="input"
          placeholder="Enter Tittle"
          onChange={handelChange}
        />
        <br />
        <button onClick={handelClick}>Add</button>
      </div>
      {todos.map((ele) => (
        <div key={ele.id}>
          <p>{ele.todos}</p>
          <p>{ele.status.toString()}</p>
          <button
            onClick={() => {
              toggleStatus(ele.id);
            }}
          >
            toggle
          </button>
          <button
            onClick={() => {
              delTodo(ele.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
