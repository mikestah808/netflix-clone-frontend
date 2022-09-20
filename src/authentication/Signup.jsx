import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const {signup} = useContext(UserContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((resp) => resp.json())
        .then((user) => {
            if(!user.errors) {
                signup(user)
                // history.push("/")
            } else {
                setEmail("")
                setPassword("")
                setPasswordConfirmation("")
                const errorsLis = user.errors.map(error => <li>{error}</li>)
                setErrorsList(errorsLis)
            }
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
            /> <br />
            <label>Confirm Password: </label>
            <input 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> <br />
            <input type="submit"/>
        </form>
        <ul>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup