import React, { useContext } from 'react'
import { UserContext } from './context/user'
import Movies from './Movies'

function HomePage() {
  const { user } = useContext(UserContext)


  return (
    <>
    <h3>Your Movies</h3>
    <Movies/>
    </>
  )

  

}

export default HomePage