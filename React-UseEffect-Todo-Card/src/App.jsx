import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

async function getData(url){
  try {
    let res = await axios.get(url)
    // console.log(res)
    const totalCount = Number(res.headers["x-total-count"]);
    const totalpage = Math.ceil(totalCount/10)
    return (
     {data:res?.data , totalpage:totalpage}
    )
  } catch (error) {
    throw error
  }
}

function App() {
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const [userdata,setUserdata]=useState([])
  const [page,setPage] = useState(1)
  const [totalpage,setTotalpage]=useState(1)
  const [text,setText]=useState("")

  useEffect(()=>{
    fetchUserData(page)
  },[page])
  async function fetchUserData(page){
   setLoading(true)
   try {
    let result = await getData(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
    
    const {data,totalpage}=result
    // console.log(result)
    console.log(data)
    setUserdata(data)
    setTotalpage(totalpage)
    console.log(totalpage)
    setLoading(false)
   } catch (error) {
    setError(true)
    setLoading(false)
   }
  }
    if(loading){
      return(
        <h1>Loading...</h1>
      )
    }
    if(error){
      return(
        <h1>Something Went Wrong..</h1>
      )
    }
    const addUserData = async()=>{
      if(text.trim()!==""){
        try {
          const result = await axios.post(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`,{
            title : text,
            completed : false
          })
          const {data,totalpage}=result
          setUserdata([...userdata,data])
          setTotalpage(totalpage)
          setText("")
        } catch (error) {
          console.log(error)
        }
      }
    }
    const toggleStatus = async(id)=>{
      try {
        const updatedUserData = userdata.map((ele)=>ele.id==id?{...ele,completed:!ele.completed}:ele)
        setUserdata(updatedUserData)
        await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}?_limit=10&_page=${page}`,{
          completed : !userdata.find((ele)=>ele.id==id).completed
        })
      }
      catch (error) {
        console.log(error)
      }
    }
    const deleteTodo = async(id)=>{
      try {
        const filterUserData= userdata.filter((ele)=>ele.id!==id)
        setUserdata(filterUserData)
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}?_limit=10&_page=${page}`)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add New Tack'/>
   <div className='firstButton'>
   <button onClick={addUserData}>Add-Todo</button>
    <button disabled={page==1} onClick={()=>{setPage(page-1)}}>Previous</button>
    <button disabled={page==totalpage} onClick={()=>setPage(page+1)}>Next</button>
   </div>
    <div className='parent'>
      {userdata.map((ele)=>(
        <div key={ele.id} className='main'>
          <h2>{ele.id}. {ele.title}</h2>
          <p>{ele.completed? "Completed" : "Not-Completed"}</p>
          <div className='second_button'>
          <button onClick={()=>{toggleStatus(ele.id)}}>Toggle-Status</button>
          <button onClick={()=>deleteTodo(ele.id)}>Delete-Todo</button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
