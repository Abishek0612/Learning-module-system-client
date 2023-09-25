import React, { useState } from "react";
import axios from "axios";
const CourseCreationForm=()=>{
    //Define all required state variable to hold the input values
    const [courseName,setCourseName]=useState("");
    const [courseDescription,setCourseDescription]=useState("");
    const [authorName,setAuthorName]=useState("");
    const [level,setLevel]=useState("");
    const [categoryName,setCategoryName]=useState("");
    const [courseImage,setCourseImage]=useState("");

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        //login all the values
        console.log("Course Name:",courseName);
        console.log("Course Description:",courseDescription);
        console.log("Author Name:",authorName);
        console.log("Level:",level);
        console.log("Category Name:",categoryName);
        console.log("Course Image:",courseImage);

        //define a post request for creating a new course 
        const courseURL="http://localhost:5000/newCourse";

        //make post request 
        axios.post(courseURL,{
            course:courseName,
            description:courseDescription,
            author:authorName,
            level:level,
            category:categoryName,
            courseImage:courseImage
        }).then((response)=>{
            console.log(response);
            alert("Course Created Successfully...");
        }).catch((error)=>{
            console.log(error);
            alert("Course Creation Failed...")
        });
    };
    return(
    <div className="App">
        <div class="flex flex-col text-center w-full mb-4">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
           Create a Course
          </h1>
        </div>
        
        <form onSubmit={handleFormSubmit}>
            {/* create input for course name  */}
            <div className="form-group">
                <label for="courseName" className="form-label">
                    Course Name:
                </label>
                <input 
                className="form-control"
                type="text"
                id="courseName"
                value={courseName}
                autoComplete="off"
                onChange={(e)=>setCourseName(e.target.value)}
                />
            </div>

             {/* create input for course Description  */}
             <div className="form-group">
                <label for="courseDescription" className="form-label">
                    Course Description:
                </label>
                <textarea 
                id="courseDescription"
                className="form-control"
                value={courseDescription}
                autoComplete="off"
                onChange={(e)=>setCourseDescription(e.target.value)}
                
                />
            </div>

            {/* create input for author Name  */}
            <div className="form-group">
                <label for="authorName" className="form-label">
                    Author:
                </label>
                <input 
                className="form-control"
                type="text"
                id="authorName"
                value={authorName}
                autoComplete="off"
                onChange={(e)=>setAuthorName(e.target.value)}
                />
            </div>

            {/* create input for author Name  */}
            <div className="form-group">
                <label for="level" className="form-label">
                    Level:
                </label>
                <input 
                className="form-control"
                type="text"
                id="level"
                value={level}
                autoComplete="off"
                onChange={(e)=>setLevel(e.target.value)}
                />
            </div>

              {/* create input for categoryName   */}
            <div className="form-group">
                <label for="categoryName" className="form-label">
                    Category:
                </label>

                <select
                 className="form-control"
                 onChange={(e)=>setCategoryName(e.target.value)}
                 >
                <option value="Business">Business</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Data Science">Data Science</option>
                <option value="Engineering">Engineering</option>
                <option value="Web Development">Web Development</option>
                <option value="Health">Health</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Personal Development">Personal Development</option>
                </select>
            </div>


             {/* create input for course Description  */}
             <div className="form-group">
                <label for="courseImage" className="form-label">
                    Course Image:
                </label>
                <input
                className="form-control"
                type="text" 
                id="courseImage"
                value={courseImage}
                autoComplete="off"
                onChange={(e)=>setCourseImage(e.target.value)}
                />
            </div>

            <div className="form-group">
                <button className="btn" type="submit">
                    Create Course
                </button>
            </div>     
        </form>
    </div>
  
    );
};

export default CourseCreationForm;