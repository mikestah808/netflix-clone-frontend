import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"

function Signup() {
    const {signup} = useContext(UserContext)

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
            } else {
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                const errorsLis = user.errors.map(e => <h4>{e}</h4>)
                setErrorsList(errorsLis)
            }
        })
    }

  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-3xl text-red-600 font-bold'>SIGN UP</h1>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name 
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" label="First Name" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name 
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" label="Last Name" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" label="Email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className="text-red-500 text-xs italic">{errorsList}</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-black text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Create Account
        </button>
      </div>
    </form>
  </div>
  )
}

export default Signup