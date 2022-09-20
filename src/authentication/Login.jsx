import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"

function Login() {
    const {login} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        .then((res) => res.json())
        .then(user => {
          login(user)
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input 
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <label>Password: </label>
            <input 
                type="text"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
        </form>
    </div>
  )
}


export default Login;