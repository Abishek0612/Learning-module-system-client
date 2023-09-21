import React from "react";
import {Link} from "react-router-dom";
import image from "../images/lmsimage.jpeg";
const Header=()=>{
    return(
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <img src={image} alt="lms" style={{width:"120px"}}/>
            <span class="ml-3 text-xl">E-Learning</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 hover:text-gray-900" to="/">
                Home
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/about">
                About
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/courses">
                Explore Course
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/createcourse">
                Create Course
            </Link>

            <Link class="mr-5 hover:text-gray-900" to="/contact">
                Contact
            </Link>
          </nav>
          <Link to="/register">
          <button class="inline-flex items-center rounded-md text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
            Sign Up
          </button>
          </Link>


          <Link to="/login">
          <button class="inline-flex items-center rounded-md text-white bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">
            Login
          </button>
          </Link>
         
        </div>
      </header>
      
    )
}

export default Header;