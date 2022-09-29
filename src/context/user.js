import React, { useState, useEffect } from 'react'

//Create context 
const UserContext = React.createContext();

//Create a provider component 
function UserProvider({ children }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/me")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("user", data)
      setUser(data)
    })
  },[])


  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }


  const signup = (user) => {
    setUser(user)
  }


    return (
      <UserContext.Provider value={{user,login, logout, signup}}>{children}</UserContext.Provider>
    );
}


export { UserContext, UserProvider }