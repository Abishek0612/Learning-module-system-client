import { useState,useEffect } from "react";

//create a function getWindowDimension to get width and height 
function getWindowDimension(){
    //Destructing of window object
    const {innerWidth:width,innerHeight:height}=window;
    //return object height and width 
    return {
        width,
        height
    };
};

//function with custom hook  useWindowDimension

export default function useWindowDimensions() {
    //initialize state variable 
   const [windowDimensions,setWindowDimensions]=useState(getWindowDimension());


   //use effect hook to mount for every 
   useEffect(()=>{
    //function handleSize 
    function handleResize(){
        setWindowDimensions(getWindowDimension());
    }
    //add an event listerner 
    window.addEventListener('resize',handleResize);

    //clean up those event by unmounting
    return () => window.removeEventListener('resize', handleResize);
}, []);

return windowDimensions;

}