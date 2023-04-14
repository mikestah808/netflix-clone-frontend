import React, { useContext } from 'react';
import { UserContext } from './context/user';
import { Link } from 'react-router-dom';


function NavBar() {
  const {user, logout} = useContext(UserContext)
 

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(() => {
      logout()
    })
  }
   
    if(user.id){
      return (
        <body
    className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
  <header>
     <nav
        className="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-black
      "
      >
        <h4 className='text-red-600 font-bold items-center'>MOVIE KEEPER</h4>
        {/* <h4 className='text-red-600 font-bold'>Welcome, {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}!</h4> */}
        <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1" id="menu">
          <ul
            className="
              text-base text-stone-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <Link className="md:p-4 py-2 block text-red-600 font-bold  hover:text-white" to="/">Home</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block text-red-600 font-bold  hover:text-white" to="/genres">My Genres</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block text-red-600 font-bold  hover:text-white" to="/movies">My Movies</Link>
            </li>
            <li>
              <button className="md:p-4 py-2 block text-red-600 font-bold  hover:text-white" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
    </nav>
  </header>
</body>
      );
    } else {
      return (
         <body
         className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
  <header>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-black
        "
      >
        <h4 className='text-red-600 font-bold items-center'>MOVIE KEEPER</h4>
        <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1" id="menu">
          <ul
            className="
              text-base text-stone-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              {/* <button className="md:p-4 py-2 block text-red-600 hover:text-white" to="/signup" component={ Link }>Sign Up</button> */}
              <Link className="md:p-4 py-2 block text-red-600 font-bold hover:text-white" to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block text-red-600 font-bold hover:text-white" to="/">Login</Link>
            </li>
          </ul>
        </div>
    </nav>
  </header>
</body>
      );
    }
  }


export default NavBar;
