import React,{useState,useEffect} from "react";
import Accordion from "../components/Accordion";
import { getCoursesById } from "../features/getCourses";
import { useParams } from "react-router-dom";

const CourseDetail=()=>{

    //get the id parameter
    const {id}=useParams();
    //state variable
    const[course,setCourse]=useState([]);


    //Fetching the data from the 
    useEffect(()=>{
        getCoursesById(id).then((res)=>{
            setCourse(res);
        })
    },[id])

    //alert msg handleAlert
    const handleAlert=()=>{
        alert("You have Sucessfully enrolled for this course....");
    }
    return(
       <>
           <div class="bg-gray-900 text-gray-200">
        <div class="container px-5 py-16 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 class="title-font font-medium text-3xl text-gray-100">
                   {course.course_name}
                </h1>
                <p class="leading-relaxed mt-4">{course.course_details}</p>
            </div>
            <div class="lg:w-3/12 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-fit mt-10 md:mt-0">
                <button onClick={handleAlert} class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg">
                    Enroll Now
                </button>
            </div>
        </div>
    </div>
    <div class="container px-5 py-16 mx-auto flex flex-wrap items-center">
        <h1 class="title-font font-medium text-3xl pb-16">Syllabus</h1>
        {course.sections?(
            <Accordion items={course.sections}/>
        ):(
            <p>No content</p>
        )}
    </div>
       </>
    )
}

export default CourseDetail;