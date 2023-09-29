import React,{useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
const Register=()=>{
    const navigate=useNavigate();
    //define state variablle
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        rePassword:""
    });

    const {name,email,password,rePassword}=formData;

    //handleChange
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();

        //check if the password and confirm password is same or not
        if(password!==rePassword){
            alert("Password do not match");
            return;//no further execution from here 
        }
        console.log(formData);
        // const regURL="http://localhost:5000/api/users/register";
        const regURL="https://lmsapp.onrender.com/api/users/register";
        
        axios.post(regURL,{
         name,
         email, 
         password,
        }).then((response)=>{
            console.log(response);
            alert("Registration Successful...");
            navigate("/login");
        }).catch((error)=>{
            console.log(error);
            alert("Registration failed");
        })




    }
    return(
    <section className="text-gray-600 body-font">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register in to your account</h2>
        </div>
    
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form  onSubmit={handleSubmit} class="space-y-6" action="#">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
            Sign Up
          </h2>

          <div>
            <label for="fullname" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
            <div class="mt-2">
            <input
            id="full-name" 
            name="name"
            value={name}
            type="text"
            onChange={handleChange}
            autocomplete="off" 
            required class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email:</label>
            <div class="mt-2">
            <input
            id="email" 
            name="email"
            type="email"
            value={email}
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
              value={password}
              onChange={handleChange}
              autocomplete="off" 
              required 
              class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            </div>
            <div class="mt-2">
              <input 
              id="rePassword" 
              name="rePassword" 
              type="password" 
              value={rePassword}
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
          Already have an Account?
          <Link to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login here.
        </Link>
        </p>
      </div>
    </div>
    </section>   
    )
}

export default Register;