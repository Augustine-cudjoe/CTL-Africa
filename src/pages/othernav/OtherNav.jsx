import React,{useState} from 'react'

import {  Popover } from '@headlessui/react'
import { BsSearch } from "react-icons/bs";
import { NavLink,Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import "./otherNav.css"
function OtherNav() {
   const [toggle , setToggle]=useState(false)
   let [open,setOpen]=useState(false);
    const navigation = {
        
        pages: [
          { id:"courses", name: 'Courses', href: '/courses' },
          { name: 'Library', href: '/library' },
          { name: 'Event', href: '/events' },
          { name: 'Pricing', href: '/prices' },
          { name: 'Blog', href: '/blog' },
        ],
      }
  return (
    <div className='otherNav'>
       {/*mobile view */}
       <div className='shadow-md w-full fixed  bg-white z-[150] block md:hidden'>
      <div className='md:flex items-center justify-between  py-4 md:px-10 px-0'>
      <div className="flex ">
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
         <div className="relative z-20">
              <Link to="/" id='nav-link'>
                <img src="https://jazzy-llama-392a85.netlify.app/assets/logo-ctl-f8b7acd2.png" alt="mobile-logo" className="w-32" />
              </Link>
            </div>
      </div>
      
      <div  className='text-3xl  absolute right-8 top-6 cursor-pointer md:hidden z-20 text-[#531554] ' onClick={()=>setOpen(!open)}>
      {
              !open?( <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"  >
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>):( <p className='flex flex-row items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"  >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
             <span className='text-xs' > close</span>
            </p>)
             }
      </div>
      </div>

        {
          open?( <div  className='md:hidden w-full h-screen mt-2 z-[100]'>
            <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row  bg-[#D9D9D9] w-full">
              <ul className="px-6 pt-10 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 ">
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="/library"  style={{textDecoration:"none"}}>
                     <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                     <MdOutlineDashboard  className='me-3'/> 
                     <span className="relative font-semibold ">   Dashboard</span>
                     </p>
                  </Link>
                </li>
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="/courses" style={{textDecoration:"none"}}>
                     <p className=" flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                    
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" 
                className="bi bi-book-fill me-3 " viewBox="0 0 16 16">
               <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
               </svg> 
               <span className="relative font-semibold "> My Courses</span>
              
                     </p>
                  </Link>
                </li>
              
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="#"  style={{textDecoration:"none"}}>
                     <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                      viewBox="0 0 256 256" className=" ms-md-0 ps-md-0 me-3" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34ZM54,78h52V178H54Zm2-32h48a2,2,0,0,1,2,2V66H54V48A2,2,0,0,1,56,46Zm48,164H56a2,2,0,0,1-2-2V190h52v18A2,2,0,0,1,104,210Zm125.7-15L196.51,37.16a14,14,0,0,0-16.63-10.85L133.07,36.37A14.09,14.09,0,0,0,122.3,53l33.19,157.81a14,14,0,0,0,6.1,8.9,13.85,13.85,0,0,0,7.57,2.26,13.55,13.55,0,0,0,3-.32l46.81-10.05A14.09,14.09,0,0,0,229.7,195Zm-82.81-83.32,50.73-10.9,14.12,67.16L161,178.81Zm-6.63-31.56L191,69.19,195.15,89l-50.73,10.9Zm-4.66-32,46.8-10.05a2.18,2.18,0,0,1,.42,0,1.89,1.89,0,0,1,1.05.32,2,2,0,0,1,.89,1.31l3.75,17.82L137.79,68.34l-3.74-17.78A2.07,2.07,0,0,1,135.6,48.1Zm80.81,151.8L169.6,210a1.92,1.92,0,0,1-1.47-.27,2,2,0,0,1-.89-1.31l-3.75-17.82,50.72-10.9L218,197.43A2.07,2.07,0,0,1,216.41,199.9Z">
                           </path>
                           </svg> 
                      <span className="relative font-semibold ">   Library</span>
              
                     </p>
                  </Link>
                </li>
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="#" style={{textDecoration:"none"}}>
                     <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people me-3" viewBox="0 0 16 16">
                       <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                           </svg>
                      <span className="relative font-semibold ">Community </span>
              
                     </p>
                  </Link>
                </li>
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="#"  style={{textDecoration:"none"}}>
                     <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star me-3" viewBox="0 0 16 16">
                   <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                     </svg>
                      <span className="relative font-semibold "> Reviews </span>
              
                     </p>
                  </Link>
                </li>
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="#" style={{textDecoration:"none"}} >
                     <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person me-3" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                          </svg> 
                      <span className="relative font-semibold ">  My Payments </span>
              
                     </p>
                  </Link>
                </li>
                <li className='text-base text-[#86868B] font-normal pl-4'>
                  <Link to="#"  style={{textDecoration:"none"}}>
                     <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                     <svg stroke="currentColor" fill="none" strokeWidth="2" 
                      viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" 
                      className="me-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7h-9"></path><path d="M14 17H5"></path>
                        <circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    
                      <span className="relative font-semibold "> Settings  </span>
              
                     </p>
                  </Link>
                </li>
                <li className='flex  pl-4'>
                  <Link to="#" style={{textDecoration:"none"}} >
                     <p className="flex justify-start items-center gap-2 text-base font-medium cursor-pointer text-[#C01F1F]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-box-arrow-right text-base font-medium " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                     <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                       </svg>
                      <span className="relative font-semibold ">  LOGOUT </span>
              
                     </p>
                  </Link>
                </li>
              </ul>

             
            </div>
      </div>):(null)
        }
      </div>
      </div>
       {/*mobile view */}
      <header className="relative bg-white fixed  ">
        

        <nav  className="z-[100] mx-0  lg:mx-auto max-w-7xl px-0  lg:px-16  bg-white w-full fixed md:block hidden ">
          
            <div className="flex h-16  justify-between items-center px-0 mx-0">
            

             <div className="md:flex items-center hidden ">
                {/* Logo */}
              <div className=" flex ml-0">
                <NavLink to="/">
                  
                  <img
                    className="md:w-[130px] md:h-[50px] w-[120px] h-[45px] md:mt-2"
                    src="https://jazzy-llama-392a85.netlify.app/assets/logo-ctl-f8b7acd2.png"
                    alt=""
                  />
                </NavLink>
              </div>

              {/* Flyout menus */}
             
                <div className={` flex h-full space-x-2 lg:space-x-8 ${toggle? " hidden":" "}`}>
                  

                  {navigation.pages.map(page => (
                    <NavLink to={page.href} key={page.name} id='navLink'>
                      <p
                      
                      
                      className="flex items-center text-sm font-semibold text-black hover:text-gray-800 "
                    >
                      {page.name}
                    </p>
                    </NavLink>
                  ))}
                </div>
              
             </div>

              <div className={`md:ml-[1px] lg:ml-auto flex items-center ${toggle? "w-[11/12] flex justify-end items-end ":" "}`}>
                <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                 
                  {!toggle && ( 
          
                <a className="text-sm font-medium text-black hover:text-gray-800  " href="#"   aria-disabled="true" onClick={() =>setToggle(!toggle)}><BsSearch /></a>
                 )
            }   {
              toggle && (
                <div className=" relative w-full ml-0">
                <input type="text " className="border border-[#E9E9E9] w-full p-2 rounded-md outline-none" placeholder="Search..."/>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-x-circle text-[#531554] absolute right-3 top-3" viewBox="0 0 16 16" onClick={() =>setToggle(!toggle)}>
                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
               <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
               
                </div>
              )
            }
                </div>
                
  
                <div className="md:ml-1 lg:ml-8  lg:flex">
                  <NavLink to="/login" className="flex items-center font-semibold text-black hover:text-gray-800" style={{textDecoration:" none"}}>
                   Login
                    
                  </NavLink>
                </div>

                {/* dashboard */}
                <div className=" hidden md:flex lg:ml-6">
                  <NavLink to="/dashboard" className="p-2 text-black hover:text-gray-500 font-semibold text-sm lg:text-base" style={{textDecoration:" none"}}>
                     Dashboard
                    
                  </NavLink>
                </div>

                {/* member */}
                <div className="ml-2 md:mr-2 flow-root md:block hidden lg:ml-6 pr-2">
                  <button href="#" className="group -m-2 flex  bg-[#531554] text-white w-[200px] items-center p-2 text-sm lg:text-base ">
                    <span className='mx-auto'> Become a member</span>
                
                  </button>
                </div>
              </div>
            </div>
         
        </nav>
      </header>
    </div>
  )
}

export default OtherNav;