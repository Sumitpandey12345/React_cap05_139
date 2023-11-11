import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timmer(){
  const [count,setCount] = useState(60)
  useEffect(()=>{
   setTimeout(()=>{
      // console.log("interval is running")
       setCount((prev)=>{
        return prev - 1;
       })
    },1000)
  },[count])
  
  return (
    <>
    <h1>Timmer</h1>
    <h1>{count}</h1>
    </>
  )
}

function App() {
  const [flag, setFlag] = useState(false)

  return (
    <>
      <button onClick={()=>setFlag(true)}>Start-Timmer</button>
      {flag ? <Timmer/> : null}
    </>
  )
}

export default App
