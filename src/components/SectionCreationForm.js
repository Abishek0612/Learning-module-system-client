import React, { useState } from "react";
import axios from "axios";
const SectionCreationForm=()=>{
    //state variable
    const [courseName,setCourseName]=useState("");
    const [sectionName,setSectionName]=useState("");
    const [sectionDescription,setSectionDescription]=useState("");
    const [sectionVideo,setSectionVideo]=useState("");
    const [sectionVideoURL,setSectionVideoURL]=useState("");


    //create a function to handle form submit 
    const handleFormSubmit=(e)=>{
        e.preventDeafult();
        console.log("Course Name:",courseName);
        console.log("Section Title:",sectionName);
        console.log("Section Description:",sectionDescription);
        console.log("Section Video Title:",sectionVideo);
        console.log("Section Video URL:",sectionVideoURL);

        const sectionURL="http://localhost:5000/newSection";

        //make a post request
        axios.put(
            sectionURL,
            {
               course:courseName,
               section:sectionName,
               description:sectionDescription,
               video:sectionVideo, 
               url:sectionVideoURL,
            },
            {
                headers:{
                    "Content-Type":"application/json",
                }
            }
        ).then((response)=>{
            console.log(response);
            alert("Section Added  Successfully...")
        }).catch((error)=>{
            console.log(error);
            alert("Section Creation Failed....");
        })

    }
    return(
        <div className="App">
        <div class="flex flex-col text-center w-full mb-4">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add a Section
          </h1>

          <form onSubmit={handleFormSubmit}>

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

          <div className="form-group">
                <label for="sectionName" className="form-label">
                    Section Name:
                </label>
                <input 
                className="form-control"
                type="text"
                id="sectionName"
                value={sectionName}
                autoComplete="off"
                onChange={(e)=>setSectionName(e.target.value)}
                />
            </div>


              {/* create input for course Description  */}
              <div className="form-group">
                <label for="sectionDescription" className="form-label">
                    Section Description:
                </label>
                <textarea 
                id="sectionDescription"
                className="form-control"
                value={sectionDescription}
                autoComplete="off"
                onChange={(e)=>setSectionDescription(e.target.value)}    
                />
             </div>

             <div className="form-group">
                <label for="videoName" className="form-label">
                    Video Title:
                </label>
                <input 
                className="form-control"
                type="text"
                id="videoName"
                value={sectionVideo}
                autoComplete="off"
                onChange={(e)=>setSectionVideo(e.target.value)}
                />
          </div>

          <div className="form-group">
                <label for="sectionVideoURL" className="form-label">
                    Video URL:
                </label>
                <input 
                className="form-control"
                type="text"
                id="sectionVideoURL"
                value={sectionVideoURL}
                autoComplete="off"
                onChange={(e)=>setSectionVideoURL(e.target.value)}
                />
          </div>

          <div className="form-group">
                <button className="btn" type="submit">
                    Add Section
                </button>
            </div>     
          </form>
        </div>
      </div>
    )
}

export default SectionCreationForm;