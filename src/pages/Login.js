import React,{useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"

//Define a Login Component
const Login=()=>{
    const navigate=useNavigate();

    //create a state variable
    const[formData,setFormData]=useState({
        email:"",
        password:"",
    });
    //Destructureize the formData
    const {email,password}=formData;

    //Define a logic handleChange to update the form Data 
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    //Define a function to handleSubmit 
    const handleSubmit=async (e)=>{
        e.preventDefault();//prevent the default form submission behaviour
        console.log(formData);

        //define login api endpoint
        const loginURL="http://localhost:5000/api/users/login";
        //send a data using post ->email,password
        axios.post(loginURL,{
            email,
            password
        }).then((response)=>{
            console.log(response);
            alert("Login Successfully...");
            navigate("/");//redirect to home page
        }).catch((error)=>{
            alert("Login failed...");
            console.log(error);
        });
    };
    return(
<section className="text-gray-600 body-font">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  onSubmit={handleSubmit} class="space-y-6" action="#">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
        Login
      </h2>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
        <input
        id="email" 
        name="email"
        type="email"
        onChange={handleChange}
        autocomplete="off" 
        required class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input 
          id="password" 
          name="password" 
          type="password" 
          onChange={handleChange}
          autocomplete="off" 
          required 
          class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Don't have an Account?
      <Link to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Here</Link>
    </p>
  </div>
</div>
</section>   
    )
}

export default Login;