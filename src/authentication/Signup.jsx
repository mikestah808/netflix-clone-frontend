import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

    
  // return (
  //       <div className='max-w-[1-4-px] m-auto md:pl-20 p-4 py-16'>
  //       <h1 className='text-4xl font-bold text-center'>Create an Account!</h1>
  //     <Box
  //       onSubmit={handleSubmit}
  //       component="form"
  //       sx={{
  //         '& > :not(style)': { m: 1, width: '25ch' },
  //       }}
  //       noValidate
  //       autoComplete="off"
  //     >
  //       <br />
  //       <TextField type="text" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined" />
  //       <br />
  //       <TextField type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="outlined" />
  //       <br />
  //       <TextField type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
  //       <br />
  //       <TextField type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
  //       <br />
  //       <Button type='submit' variant="outlined">Sign Up</Button>
  //     </Box>
  //       <p>
  //           {errorsList}
  //       </p>
  //     </div>
  // )
  return (
    <div className="w-full max-w-xs">
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
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  </div>
  )
}

export default Signup