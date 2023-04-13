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
          if (!user.error) {
            login(user)
          } else {
            setEmail("")
            setPassword("")
            setError("Invalid Email or Password")
          }
        })
    }

    return (
<div class="w-full max-w-xs">
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" >
      Email
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" label="Email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <p class="text-red-500 text-xs italic">{error}</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Sign In
    </button>
  </div>
</form>
</div>
    );


}


export default Login;
