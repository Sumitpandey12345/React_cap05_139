import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timmer from "./Timmer"

function App() {
const [flag,setflag] = useState(false)

  return (
    <>
    <button onClick={()=>setflag(true)}>Start-Timmer</button>
    {flag ? <Timmer/> : null}
    </>
  )
}

export default App
