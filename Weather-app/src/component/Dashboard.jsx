import React, {useState} from 'react'
import axios  from 'axios';




const Dashboard = () => {
  const [city, setCity] = useState("")
  let apiKey = "ee26ec43891666e8d4e8069a734cddff" 
  const url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
  const Check  = () =>{
    axios.get(url1)
    .then((res)=>{
      console.log(res.data);
      setCity(res.data)
       document.getElementById("inp").value=''
    })
   }

  return (
    <>
    <div id='fetch'>
    <input id='inp' placeholder="Search" onChange={(e)=>{setCity(e.target.value)}} type="text" />
    <button onClick={Check}>Search</button>
    </div> 

    </>
  )
}

export default Dashboard