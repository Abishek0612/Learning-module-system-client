import axios from "axios";

// const API_URL="http://localhost:5000/api/courses/";
const API_URL="https://lmsapp.onrender.com/api/courses/";
//replace url with render


export const getCourses=async(category)=>{
    const response=await axios.get(API_URL+category);
    return response.data;
}

//id 
export const getCoursesById=async(id)=>{
    const response=await axios.get(API_URL+id);
    return response.data;
}