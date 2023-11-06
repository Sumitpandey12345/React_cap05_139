import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  {document.title=  `Clicked ${count} times`}
  const handelclick = ()=>{
    setCount((prev)=>prev+1)
  }
  return (
    <>
      <h1>Count is {count}</h1>
      <button style={{backgroundColor:"tomato"}} onClick={handelclick}>Increase Count</button>
    </>
  )
}

export default App

