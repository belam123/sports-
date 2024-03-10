import React, { useState } from 'react'
import './signup.css'
function Signup() {
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[passwordConfimation,setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState(false)
    const[success,SetSuccess] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/signup",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(
                {user:{
                    username,
                    email,
                    password,
                    passwordConfimation}
            })
        })
        .then((r) => {
            if(!r.ok) {
                return r.json().then((e) => setErrors(Object.values(e).toString()))
            } else {
                SetSuccess(true)
            }
        })
        console.log("clicked")
    }
  return (
    <div>
        <div className="container_signup">
            <div className="box_left">
                <div className="heading">
                    <div className="logo">
                            <img src="/images/sports-logo.png" alt="not available" />
                    </div>
                    <h1>CLUBBIE</h1>
                </div>
                <h2>Raising the bar for amatuer sport</h2>
                <div className="picture">
                    <img src="/images/picture_url.png" alt="not available" />
                </div>
            </div>
            <div className="box_right">
             <div className="heading2">
             <h1>Register</h1>
             </div>
             <form className="form">
                <input type="text" placeholder='username' />
                <input type="email" placeholder='email address' />
                <div className="eye">
                <input type="password" placeholder='password' />
                </div>
                <input type="password" placeholder='confirm password' />
              <button type="submit">Signup</button>
              <div className="log">
              <p>Have an account?</p>
              <p className='active_link' onClick={handleSignup}>Login</p>
              </div>
              <div>
              { errors ? <h5 class="text-danger">{errors}</h5> : null }
              </div>
             </form>
            </div>
        </div>
    </div>
  )
}

export default Signup