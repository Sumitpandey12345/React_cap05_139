import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const  [todos,setTodos]=useState([])
 const handelChange = (event)=>{
    setText(event.target.value)
 }
const handelClick = ()=>{
  const newTodo = {id : Math.random()+text+Date.now(),todos:text}
  const addTodo = [...todos,newTodo]
  setTodos(addTodo)
}

  return (
    <>
      <div className='head'><h1>Todo App</h1></div>
     <div className='inpcont'>
     <input type="text" value={text} id="input"  placeholder='Enter Tittle' onChange={handelChange}/><br />
      <button onClick={handelClick}>Add</button>
     </div>
     {todos.map((ele)=>(
      <h4 key={ele.id}>{ele.todos}</h4>
     ))}
    </>
  )
}

export default App
