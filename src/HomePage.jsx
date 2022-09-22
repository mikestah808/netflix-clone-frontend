import React, { useContext } from 'react'
import { UserContext } from './context/user'

function HomePage() {
  const { user } = useContext(UserContext)

  return <h3>Home Page</h3>

  

}

export default HomePage