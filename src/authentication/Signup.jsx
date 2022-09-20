import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const {signup} = useContext(UserContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(user => {
            if(!user.errors) {
                signup(user)
            } else {
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                const errorsLis = user.errors.map(error => <li>{error}</li>)
                setErrorsList(errorsLis)
            }
        })
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>First Name: </label>
            <input 
                type="text"
                id="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            /> <br />
            <label>Last Name: </label>
            <input 
                type="text"
                id="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            /> <br />
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
            {/* <label>Confirm Password: </label> */}
            {/* <input 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> <br /> */}
            <input type="submit"/>
        </form>
        <ul>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup