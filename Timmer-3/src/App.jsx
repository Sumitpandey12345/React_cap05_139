import { useState, useEffect } from 'react'
import './App.css'

function Timer(){
  let [count, setCount] = useState(0);

  useEffect(()=>{
    let timer = setInterval(()=>{
      setCount((prevCount)=>{
        return prevCount + 1
      })
    }, 1000)

    return ()=>{
      clearInterval(timer)
    }
  },[])
  
  return(
    <>
    <h1>Time is : {count}.Sec</h1>
    </>
  )
  
  
}


function App() {
  let [flag, setFlag] = useState(true);

return(
  <>
  <h1>Timer</h1>
  {flag? <Timer /> : null}
  <button onClick={()=>{setFlag(!flag)}}>{flag? "Hide Timer": "Show Timer"}</button>
  </>
)

}

export default App