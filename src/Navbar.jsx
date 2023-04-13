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
    class="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
  <header>
     <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div class="hidden w-full md:flex md:items-center md:w-auto " id="menu">
          <ul
            class="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <button class="md:p-4 py-2 block hover:text-purple-400" to="/" component={ Link } >Home</button>
            </li>
            <li>
              <button class="md:p-4 py-2 block hover:text-purple-400" to="/genres" component={ Link }>My Genres</button>
            </li>
            <li>
              <button class="md:p-4 py-2 block hover:text-purple-400" to="/movies" component={ Link }>My Movies</button>
            </li>
            <li>
              <button class="md:p-4 py-2 block hover:text-purple-400 text-purple-500" onClick={handleLogout}>Logout</button>
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
    class="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
  <header>
     <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div class="hidden w-full md:flex md:items-center md:w-auto " id="menu">
          <ul
            class="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <button class="md:p-4 py-2 block hover:text-purple-400 text-purple-500" to="/signup" component={ Link }>Sign Up</button>
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
