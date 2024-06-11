import React from 'react'
import img from '../assets/image/signUp.svg'
const SignUp = () => {
  return (

    <>

      <div id='SUcontainer'>
        <img id='SUimage' src= {img}  alt="" />
      <div id='SUregister'>
      <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="inputs"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="inputs"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="inputs"/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Log in</a> </p>
</form>
      </div>

      </div>
    </>
  )
}

export default SignUp