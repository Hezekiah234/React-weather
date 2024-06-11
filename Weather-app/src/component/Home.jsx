import React from 'react'
import background from '../assets/background 3.jpg'


const Home = () => {
  return (
    <>


    <div id='pack' >
      <div id='back'>
    <img id='back' src={background} alt="" />
      </div>
      <p id='intro' style={{fontSize:"25px", fontWeight:"bolder", color:"white", textAlign:"center", width:"500px" , fontFamily:'sans-serif'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis minus molestiae sit pariatur, repellendus, adipisci veritatis asperiores officiis rerum delectus eveniet et maxime id molestias fugit repudiandae natus debitis saepe.</p>
    <button id='start'>GET STARTED</button>
    </div>

    </>
  )
}

export default Home