import React from "react";
import { Link } from "react-router-dom";
const NotFound=()=>{
    return(
    <div class="flex flex-col justify-center items-center py-56">
        <h1 class="text-3xl">Oops! You seem to be lost.</h1>
        <br/>
        <p class="text-xl">Here are some helpful links:</p>
        <Link to="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Home</Link>
        <Link to="/about" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">About</Link>
        <Link to="/courses" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Explore Courses</Link>
    </div>
    
    )
}

export default NotFound;