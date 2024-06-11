import React from 'react'
import Dashboard from './component/Dashboard'
import Home from './component/Home'
import { Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp'
import LogIn from './component/LogIn'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>} ></Route>
       <Route path="/SignUp" element={<SignUp/>} ></Route>
       <Route path="/LogIn" element={<LogIn/>} ></Route>
      </Routes>
    </div>
  )
}

export default App