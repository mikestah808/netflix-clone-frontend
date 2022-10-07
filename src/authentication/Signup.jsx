import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"
import {useNavigate} from "react-router-dom"

function Signup() {
    const {signup} = useContext(UserContext)

    //navigates to home page after user signs up
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errorsList, setErrorsList] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup',{
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate("/")
            } else {
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                const errorsLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorsLis)
            }
        })
    }

    
  return (
    <div>
        <h1>Create an Account!</h1>
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
            <input type="submit"/>
        </form>
        <p>
            {errorsList}
        </p>
    </div>
  )
}

export default Signup