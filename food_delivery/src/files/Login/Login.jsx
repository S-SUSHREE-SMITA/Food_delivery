import React, { useState } from 'react'
import './Login.css'

function Login({ setShowLogin }) {

  const [currState, setCurrState] = useState("Login")

  const handleSubmit = (e) => {
    e.preventDefault()   // ✅ stop refresh
    console.log(currState) // check working
    setShowLogin(false)  // optional: close popup
  }

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>

        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <span onClick={() => setShowLogin(false)}>X</span>
        </div>

        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <input type="text" placeholder='Your name' required />
          )}

          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>By continuing, I agree to terms & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create account? 
            <span onClick={() => setCurrState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have account
            <span onClick={() => setCurrState("Login")}> Login here</span>
          </p>
        )}

      </form>
    </div>
  )
}

export default Login