import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div id='sign'>
      <p  id='links'><Link to='/' style={{textDecoration:"none", color:"white",fontSize:"18px", fontWeight:"bold", fontFamily:"sans-serif"}}>Home</Link></p>
      <p  id='links'><Link to='/SignUp' style={{textDecoration:"none", color:"white",fontSize:"18px", fontWeight:"bold", fontFamily:"sans-serif"}}>Sign Up</Link></p>
      <p id='link'><Link  to='/LogIn'  style={{textDecoration:"none", color:"white",fontSize:"18px", fontWeight:"bold" , fontFamily:"sans-serif"}}>Log In</Link></p>
      <p id='link'><Link  to='/about'  style={{textDecoration:"none", color:"white",fontSize:"18px", fontWeight:"bold" , fontFamily:"sans-serif"}}>About </Link></p>
     </div>

    </>
  )
}

export default Navbar