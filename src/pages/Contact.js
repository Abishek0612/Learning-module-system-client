// import React from "react";
// import { FaMapSigns } from "react-icons/fa";
// import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
// import { FaPaperPlane } from "react-icons/fa";

// const Contact=()=>{
//     const formTab = [{ name: "" }, { email: "" }, { address: "" }, { mobileno: "" }];
//     const contactTab = [
//       {
//         icon: <FaMapSigns className="text-4xl" />,
//         title: "Address",
//         desription: `198 West 21th Street, Mumbai`,
//       },
//       {
//         icon: <BsFillTelephoneFill className="text-4xl" />,
//         title: "Contact Number",
//         desription: `+91-912345678901`,
//       },
//       {
//         icon: <FaPaperPlane className="text-4xl" />,
//         title: "Email Address",
//         desription: `lms@gmail.com`,
//       },
//       {
//         icon: <BsGlobeAmericas className="text-4xl" />,
//         title: "Website",
//         desription: "www.lms.edu",
//       },
//     ];
//     return(
//         <>
//         <div>
//           {" "}
//           <div className="md:w-96 mx-auto text-center my-24">
//             <div className="text-2xl font-bold">Contact Me</div>
//             <div className="text-xl">
//             Our Online Learning Platform offers expert-led courses to master new skills. 
//             Join us now to achieve your goals through interactive methods, 
//             24/7 access and community support.
//             </div>
//           </div>
//           {/* Cards */}
//           <div className="container mx-auto my-12 h-auto">
//             <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
//               {contactTab.map((x, index) => {
//                 return (
//                   <div key={index} className="card w-full  shadow-xl h-auto ">
//                     <div className="card-body items-center flex-grow-0  text-center">
//                       <h2 className="card-title">{x.icon}</h2>
//                       <p className="text-lg font-bold my-3">{x.title}</p>
//                       <div className="">
//                         <p className=" text-lg font-semibold">{x.desription}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
//           <div className="lg:w-1/2 w-full p-4">
//             <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
//               <div className="flex  flex-col">
//                 {formTab.map((x, index) => {
//                   return (
//                     <div key={index} className="mx-auto form-control w-full">
//                       <label className="label">
//                         <span className="label-text">What is your name?</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Type here"
//                         className="input input-bordered w-full  "
//                       />
//                     </div>
//                   );
//                 })}
//                 <div className="w-full my-4 flex justify-end ">
//                   <button className="btn rounded-full w-full">
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="lg:w-1/2 w-full   p-4">
//             <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
//               <iframe
//                 title="myFrame"
//                 className="absolute inset-0 w-full h-full"
//                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </>
  
//     )
// }

// export default Contact;


import React from 'react'
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const Contact=()=> {
    const contactTab = [
        {
          icon: <FaMapSigns className="text-4xl" />,
          title: "Address",
          desription: `123, Suite 721 Chennai  100016`,
        },
        {
          icon: <BsFillTelephoneFill className="text-4xl" />,
          title: "Contact Number",
          desription: `+91-7550259062`,
        },
        {
          icon: <FaPaperPlane className="text-4xl" />,
          title: "Email Address",
          desription: `lms@gmail.com`,
        },
        {
          icon: <BsGlobeAmericas className="text-4xl" />,
          title: "Website",
          desription: "www.lms.edu",
        },
      ];
    
  return (
   <>
    <div>
        {" "}
        <div className="md:w-96 mx-auto text-center my-24">
          <div className="text-2xl font-bold"> 
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h1>
          </div>
          <div className="text-md">
          Our Online Learning Platform offers expert-led courses to master new skills.
           Join us now to achieve your goals through interactive methods, 
          24/7 access and community support.
          </div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    <section class="text-gray-600 body-font relative">
    <div class="px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
       
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Contact us for any questions or concerns you may have.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto rounded-md text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              <a href="mailto:odysseylms@gmail.com">Send</a>
            </button>
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a class="text-blue-500" href="mailto:odysseylms@gmail.com">
              lms@gmail.com
            </a>
            <p class="leading-normal my-5">
              ABC Main Rd
              <br />
              Delhi,  560076
            </p>
            <span class="inline-flex">
              <span class="text-gray-500">
                <a href="/contact">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              </span>
              <span class="ml-4 text-gray-500">
                <a href="/contact">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </span>
              <span class="ml-4 text-gray-500">
                <a href="/contact">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
              <span class="ml-4 text-gray-500">
                <a href="/contact">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Contact