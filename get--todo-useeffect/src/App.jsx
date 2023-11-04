import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

async function getdata(url){
  try {
    let result = await axios.get(url);
    return (
      result?.data?.data
    )
  } catch (error) {
    console.log(error)
  }
}


function App() {
 const [error,setError] = useState(false)
 const [userdata,setUserdata] = useState([])
 const [loading,setLoading] = useState(false)
 const [page,setPage] = useState(1)

  useEffect(()=>{
    fetchAndUpdateData(page)
  },[page])
 async function fetchAndUpdateData(page){
  setLoading(true)
  try {
    let res  = await getdata(`https://reqres.in/api/users?page=${page}`)
    console.log(page)
    setUserdata(res)
    setLoading(false)
  } catch (error) {
    setError(true)
    setLoading(false)
  }
 }
 if(loading){
  return (
    <h1 style={{textAlign:"center"}}>Loading...</h1>
  )
}
if(error){
  return(
    <h1>Something Went Wrong...</h1>
  )
}
 console.log(userdata)
  return (
    <div className='main'>
     <div className='button'>
     <h1>Get Todo on Button clicks</h1>
     <button disabled={page===1} onClick={()=>{setPage(page-1)}}>Previous</button>
     <button disabled={page===2} onClick={()=>{setPage(page+1)}}>Next</button>
     </div>
     <div className='child'>
        {userdata && userdata.length>0 &&  userdata.map((ele)=>(
         <div key={ele.id} >
          <h1>{ele.first_name} {ele.last_name}</h1>
           <p>{ele.email}</p>
          <img src={ele.avatar} alt={ele.first_name} />
          </div>      
       ))
      }
     </div>
    </div>
  )
}

export default App
