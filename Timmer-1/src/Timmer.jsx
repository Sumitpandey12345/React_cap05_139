import { useState ,useEffect} from "react"

const Timmer=()=>{
  const[count,setCount]=useState(0)
  const time = null;
  useEffect(()=>{
    const time = setInterval(()=>{
        setCount((prev)=>prev+1)
    },1000)
  },[])
  console.log(count)
 
  return (
    <>
     <h1>Timmer</h1>
     <h1>{count}</h1>
    </>
  )
}

export default Timmer