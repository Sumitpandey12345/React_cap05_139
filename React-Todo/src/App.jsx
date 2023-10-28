import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todos, setTodos]=useState([])
  const handelChange = (event)=>{
    setText(event.target.value)
  }
  const AddTodo = ()=>{
   const newTodo = {id : Math.random()+text+Date.now(), todos:text}
   const addTodo = [...todos,newTodo]
   setTodos(addTodo)
   console.log(todos)
  }
  return (
    <>
     <input type="text" value={text} id="input" placeholder='Add Todo' onChange={handelChange} />
     <button onClick={AddTodo}>Add-Todo</button>
      {todos.map(ele=>(<h1 key={ele.id}>{ele.todos}</h1>))}
    </>
  )
}

export default App
