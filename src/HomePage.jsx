import React, { useContext } from 'react'
import { UserContext } from './context/user'

function HomePage() {
  const { user } = useContext(UserContext)

  // return <h3>Home Page</h3>

  if(!user ||user.error) {
    return (<h3>Please Login or Signup</h3>)
  } else {
    return (
      <div>
        <h3>{user.first_name}</h3>
      </div>
    )
  }
}

export default HomePage