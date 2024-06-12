import React,{useState,useEffect} from "react"
import { MdOutlineDashboard } from "react-icons/md";

import { BsSearch } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./navbar.css"
import Footer from "../footer/Footer";
import { NavLink,Link } from "react-router-dom";
const navigation = {
  
  pages: [
    { id:"courses", name: 'Courses', href: '/courses' },
    { name: 'Library', href: '/library' },
    { name: 'Event', href: '/events' },
    { name: 'Pricing', href: '/prices' },
    { name: 'Blog', href: '/blog' },
  ],
}

const testimonial=[
    {
        id:1,
        name:"Kebs Water",
        img:" https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png",
        profile:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life."
    },
    {
        id:2,
        name:"Sammi Tang",
        img:" https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png",
        profile:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life."
    },
    {
        id:3,
        name:"Joyce Abeyie",
        img:" https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png",
        profile:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life."
    },
    {
        id:4,
        name:"Jocab Jones",
        img:" https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png",
        profile:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life."
    }
    ,  
    {
        id:5,
        name:"Guy Hawkins",
        img:" https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png",
        profile:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life."
    },
    {
        id:6,
        name:"Esther Howard",
        img:" https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png",
        profile:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life."
    }
]

const items=[
  {
      "id": 0,
      "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
      "name":"Joy Abeyie",
      "img": "https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
  },

  {
      "id": 1,
      "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
      "name":"Jocab Jones",
      "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
  },

  {
      "id": 2,
      "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
      "name":"Guy Hawkins",
      "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
  },

  {
      "id": 3,
      "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
      "name":"Esther Haword",
      "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
  },
  {
      "id": 4,
      "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
      "name":"Kebs Water",
      "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
  },
  {
      "id": 5,
      "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
      "name":"Sammi Tang",
      "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
  }

];



export default function HomeComponent() {

  const [toggle , setToggle]=useState(false)

    var settings = {
      dots: true,
        
      infinite: true,
       arrows:false,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
         
        ]
      };
      const [open,setOpen]=useState(false);
  return (
    <div className="">
      {/* Mobile menu */}
      <div className='shadow-md w-full fixed top-0 left-0 z-30 block md:hidden'>
      <div className='md:flex items-center justify-between   md:px-10 '>
      <div className="flex items-center bg-[#531554] w-screen px-0 mx-0 py-4">
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
         <div className="relative z-20">
              <Link to="/" style={{textDecoration:"none"}}>
                <img src="https://jazzy-llama-392a85.netlify.app/assets/logo-ctl-f8b7acd2.png" alt="mobile-logo" className="w-32" />
              </Link>
            </div>
      </div>
      
      <div  className='text-3xl  absolute right-8 top-6 cursor-pointer md:hidden z-20 text-white' onClick={()=>setOpen(!open)}>
      {
              !open?( <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-list " viewBox="0 0 16 16"  >
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>):( <p className='flex flex-row items-center' >
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="0.5em" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"  >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
             <span className='text-xs' > close</span>
            </p>)
             }
      </div>
      </div>

       {
        open?( <div className={`  `}>
        <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row ">
          <ul className="px-6 pt-10 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 bg-[#f6f6f6] ">
            <li className='text-base text-[#86868B] font-normal pl-4'>
              <Link to="/" style={{textDecoration:"none"}}>
                 <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                 <MdOutlineDashboard  className='me-3'/> 
                 <span className="relative font-semibold ">   Dashboard</span>
                 </p>
              </Link>
            </li>
            <li className='text-base text-[#86868B] font-normal pl-4'>
              <Link to="/courses" style={{textDecoration:"none"}} >
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
              <Link to="/library" style={{textDecoration:"none"}} >
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
              <Link to="/blog" style={{textDecoration:"none"}} >
                 <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people me-3" viewBox="0 0 16 16">
                   <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                       </svg>
                  <span className="relative font-semibold ">Community </span>
          
                 </p>
              </Link>
            </li>
            <li className='text-base text-[#86868B] font-normal pl-4'>
              <Link to="/events"  style={{textDecoration:"none"}}>
                 <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star me-3" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                 </svg>
                  <span className="relative font-semibold "> Reviews </span>
          
                 </p>
              </Link>
            </li>
            <li className='text-base text-[#86868B] font-normal pl-4'>
              <Link to="/prices" style={{textDecoration:"none"}} >
                 <p className="flex flex-row  justify-start items-center gap-2 text-base font-medium text-[#1D1D1F]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person me-3" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                      </svg> 
                  <span className="relative font-semibold ">  My Payments </span>
          
                 </p>
              </Link>
            </li>
            <li className='text-base text-[#86868B] font-normal pl-4'>
              <Link to="#" style={{textDecoration:"none"}}>
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
              <Link to="/" style={{textDecoration:"none"}} >
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


      <header className="relative bg-[#531554] fixed md:block hidden ">
        

        <nav  className=" mx-auto max-w-7xl md:px-0 px-6 lg:px-16  bg-[#531554] w-full fixed z-[100]">
          
            <div className="flex h-16 items-center lg:gap-0 md:gap-5 justify-between  home-nav">
            

              {/* Logo */}
            
              <div className="md:flex items-center hidden ">
                {/* Logo */}
              <div className=" flex ml-0">
                <NavLink to="/">
                  
                  <img
                    className="md:w-[130px] md:h-[50px] w-[120px] h-[45px] md:mt-2"
                    src="https://jazzy-llama-392a85.netlify.app/assets/logo-c69ebcda.png"
                    alt=""
                  />
                </NavLink>
              </div>

              {/* Flyout menus */}
             
                <div className={` flex h-full space-x-2 lg:space-x-8 ${toggle? " hidden":" "}`}>
                  

                  {navigation.pages.map(page => (
                    <NavLink to={page.href} key={page.name} id='navLink'>
                      <p
                      
                      
                      className="flex items-center text-sm font-semibold text-white hover:text-gray-800 "
                    >
                      {page.name}
                    </p>
                    </NavLink>
                  ))}
                </div>
              
             </div>

              {/* left menus */}
              
              <div className={`md:ml-[1px] lg:ml-auto flex items-center ${toggle? "w-10/12 flex justify-end items-end ":" "}`}>
                <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                 
                  {!toggle && ( 
          
                <a className="text-sm font-medium text-white hover:text-gray-800  " href="#"   aria-disabled="true" onClick={() =>setToggle(!toggle)}><BsSearch /></a>
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
                  <NavLink to="/login" className="flex items-center font-semibold text-white hover:text-gray-800" style={{textDecoration:" none"}}>
                   Login
                    
                  </NavLink>
                </div>

                {/* dashboard */}
                <div className=" hidden md:flex lg:ml-6">
                  <NavLink to="/dashboard" className="p-2 text-white hover:text-gray-500 font-semibold text-sm lg:text-base" style={{textDecoration:" none"}}>
                     Dashboard
                    
                  </NavLink>
                </div>

                {/* member */}
                <div className="ml-2 md:mr-2 flow-root md:block hidden lg:ml-6 pr-2">
                  <button href="#" className="group -m-2 flex   text-white w-[200px] items-center p-2 text-sm lg:text-base ">
                    <span className='mx-auto'> Become a member</span>
                
                  </button>
                </div>
              </div>
            </div>
          
        </nav>
      </header>

      <main className="overflow-hidden">
        <section className="bg-[url('https://jazzy-llama-392a85.netlify.app/assets/hero-c73e31a5.png')]  min-h-screen  flex flex-col justify-center  items-center bg-cover bg-no-repeat" id="home-hero">
            <div className="badges-holder pb-20 md:pt-40  pt-20 flex justify-center">

            <div className=" flex items-center justify-between  md:h-[53px] h-[35.2px] md:w-[567px] w-11/12 bg-access px-2 py-4 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 rounded-full">
            <button className="md:text-sm text-xs py-2 me-2 bg-[#531554] px-4 text-white rounded-full"> resources</button>  
             <p className="text-[#531554] flex align-center md:text-sm text-[7.41px] text-left">
               <span> Access our Library of resources on coaching and leadership </span>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right mx-2 text-dark" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
               </svg>
              
               </p>
             </div>
            </div>
           <div id="home-content md:w-[905px] w-343px space-y-5 ">
              <h1 className="text-center md:text-6xl font-bold text-[30px] orange-color md:px-0 px-10"> Elevate Your Leadership Skills</h1>
           </div>
            <div className="pt-2 mb-5 px-8">
                <p className="text-white md:text-xl text-sm font-semibold text-center">Join Our Coaching Community for Personalized Guidance and Collaborative
  
               </p>
               < p className="text-white md:text-xl text-sm font-medium text-center">Growth on Your Path to Becoming a Remarkable Leader</p>
            </div>
             <div className="flex items-center justify-center w-[179px] pt-5 ">
                <button className="bg-white px-4 py-2 bg-[#ffffff]"> Become a member </button>
             </div>
             <div className="hero-imgs md:grid grid-cols-3 md:mt-20 mt-10 md:pb-14 md:gap-y-4 gap-x-4 md:px-16  px-8">
                <div className=" flex md:flex-col md:justify-items-end md:items-end items-end gap-2 flex-row  mb-2">
                    <div>
                        <img src="https://jazzy-llama-392a85.netlify.app/assets/heroimg1-84a0dda6.png" alt=".."/>
                    </div>
                    <div>
                        <img src="https://jazzy-llama-392a85.netlify.app/assets/heroimg2-61453036.png" alt="..."/>
                    </div>

                </div>
                 <div className="mb-2">
                    <img className="h-full " src="https://jazzy-llama-392a85.netlify.app/assets/heroimg3-ed822c73.png" alt=".."/>
                 </div>
                 <div className=" flex md:flex-col md:justify-items-start md:items-start items-start gap-2 flex-row ">
                    <div>
                        <img src="https://jazzy-llama-392a85.netlify.app/assets/heroimg4-960e3c0e.png" alt=".."/>
                    </div>
                    <div>
                        <img src="https://jazzy-llama-392a85.netlify.app/assets/heroimg5-b3f7a87b.png" alt="..."/>
                    </div>

                </div>

             </div>
        </section >
        <section className="bg-[#FFFDF4] md:h-[248px] h-600px ">
             <p className="text-extrabold text-base  pt-5 text-center mb-10">
             OUR TRUSTED PARTNERS
             </p>
             <div className="grid md:flex md:flex-row justify-center items-center  md:gap-[90x] md:mx-16 mx-8 grid-cols-2  gap-10">
                <div>
                    <img src="data:image/png;base64,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"/>
                </div>
                <div>
                    <img src="data:image/png;base64,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"/>
                 </div>
                 <div>
                    <img src="data:image/png;base64,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"/>
                 </div>
                 <div>
                    <img src="data:image/png;base64,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"/>
                 </div>
                 <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAA9CAYAAABx0z3EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXtSURBVHgB7Z1bVuNGEIb/9ph5dlYQZQXxrGDECkKehwRrBTArGFgBZgUSGXgOWcEoKxizgigrGJ4NuKfKahl7fNGlL7qY7xyOAMu2qv/q6uqWVAJe6QQCFgnDcAD0fSHEe/oqD5D0IwbpduUwEvrfA2+lnN3TP2LgaRIEwQMaDNvX6709lVIeLdnGdkzIjmvgOSYbEhgiDD8fUVt+ol+H9JPQ79HJyYcLfs24kGScR8adkHE+/elDj9hGg+jyIuDsLBVvK+SYuAqC4zG0v/OvkRC9cMNL0Wh0HBgTkrzFV97iwwrijhqOGuWPGDXCjirEwd9Ie0VB+NingU6EiaKb/2jjbXqNOs2htpD2BVyDeqm8qENQJeIXbGnQHCjcPh5WEZMjAH3vt22vk4MHfVREGcVd3Ydb2HF88tCIGubCZcjVEJEZ0vsvaRugPIO8HXqowPX17akQ/a9wL+IyI25YHjvgALKZo44HPUZheHMGC5QSkrt4FN2GFNrGOYO8KzxOAFQjW4OjD9l8DgMIgU/8eTBMYSFfxgc5QsPgRqZQ+yWd7phHhVRT8Hhn3PEKCbk0yJfI1Jzjp6HWrJgqdHswy4iTRBgkV0jNTM01Q9NiUug+gQUoYTP6uTuFVGlvW0TMGKp5njZkP0cgH3Y4MulwO4VU6bKH9sHTk0toQvafwh4k4sEIhtgqJE8xaDNCeznjtUno4cMilMH+BkNsFDJNt2fnaDk0DoVVw5dKRjzYxTcVXjcKKcTby4bME3UZqOGhNKaTke2YCa9rQqbpttQNSU2iaqrvaqrlwwBrQlK6bXWVpA7Uon5hVLhzIiSNk+9hgBUhLU1+m4Bfrlf2S+yrzeD29vZnaLIipK3JbxMg28pMJZyuYE2nz4fQZCGkWsj10Vlk4QyRwt2vcMobbcdZ6pEHXUpwNlFiAi48OOXHa5jKsxCSvLCzYTWjxATcaWg1EQHmQqqw2uQzG6YY5oVXG+cKC+BBE9Uj+/sgIjPIt7XvoQZ0M9cstO6LkITIs7WWFa3pFD9Bg7mQ7rO0+si3tVfT0uRM63tVjxQe9gQp8zx/5qEW9DLXnokPaRNdjT5Zj+zCmY69ptJ1rR2nlU79KmRHeBVynco32tRJNkYm2B9aKVQeWdbaSeO20FBbhdZxzYWUUt5jT5BS5NjaS1AP+kKio+FmMzJBI+kZETLG3iAnu1+fJaiFaQINlJBPMfaDh/w7nZ8S1IBu4Yve0ofE6Di0zvpv3j41FZ2YQJPFPJISnlwj28/srth+bqdj5GD/Q5OlBYGnMTrPc0EhZ9o9pBz6jrMQcg/Ca1R0HKIpiuPoNIuhycoSHZc9QUfhCiAl9k7gFP2564qQKqOL0T2ickmM0yw+CYIP5pKdjC72ynK9cTHMOBknKdExsqq2JmQHe2VUZUrhLosvmknvZuNpLPLgoCML6UnZ3riEkQbO5zmGATYKyR7chRBLNnysOsFPI5N1ZzZW9XLrieUg+HNMDXGFlqIKD2r1Khq/rmGRtISpGXZeIUANcQZHg75ZxB0d+zn0sRxezYRVJvdSDy5NSZsE7WHCtVFhAMuJX2RyXTdXSE7FWyRm5Zqo27CVK2gkYRspdPFVmvw8vkODwyyPZ6ZFZCz1SqO9kSlceFc10Lsw/DwWQtisCFUaldicwxLkIB+FOPgKMySmeyNT+nJIToC49DKaEWp5mnRoU0SGnHhiKsRS21mp+lzpulaamnAZ6kMyzmp6vgs6Q3HF4d5VbXPlLDE04GPmtoMFKtc0V141CsNwrKpL+XCDKk5/HMMx5Di/qxDroSQ8htPi+BmqkTvuG31cBOZ1xm2U/pIPanJ+14DHRQxUGVG/6HvSnlhZxDlRdMMONNz8+Y+/GBMyI70H/42vavb4qEz2RBv8AzxGQcOeykOOe66c1tu+FzsgLxPqh1P1WI61ktyZkxgXctMBpLd7S48OhO9NHKS38WV36C6u55yonnfPlyzW3fOKsOq0wkttmtszSc+emHXAl2esyCF/Dy+hZk/5+Q6bdZtBk8tTdwAAAABJRU5ErkJggg=="/>
                 </div>
             </div>
        </section>
        <section className=" bg-[#FFFFFF] md:h-[1386px] h-[2117px] ">
          <div className="flex flex-col justify-center items-center  ">
          <p className="md:text-5xl text-2xl font-extrabold text-[#100B26]  md:py-10  md:w-[1063px] w-[343px] leading-9" id="discover">
          Discover Courses Thoughtfully Crafted to Awaken Your Full Potential
          </p>
          <div className="flex items-center justify-center ">
            <p className="text-[#3C0644] text-xl font-semibold"> Explore more courses</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
               </svg>
          </div>
          </div>
           <div className=" flex items-center justify-center mt-10 ">
             <div className="md:grid md:grid-cols-3 gap-5 my-16   flex flex-col justify-center items-center py-5 md:mx-0 mx-3 " id="emotional">
                <Link to="/singleHome"  style={{textDecoration:"none"}}>
                <div className="max-w-sm  flex flex-col items-start   md:h-[400.62px] md:bg-white border-2 border-gray-200 rounded-lg shadow emotional">
                  <img className="rounded-t-lg md:w-[484.51px] md:h-[214.73px] h-[172px] w-full" src="https://jazzy-llama-392a85.netlify.app/assets/cimg1-d51343e1.png " loading="lazy"/>
                   <div className="p-5 indent-0 text-left">
                    <h5 className=" mb-2 md:text-xl text-lg text-wrap font-medium text-gray-900"> Leading with Emotional Intelligence</h5>
                   <p className=" text-left mb-3 font-normal text-[#5E5D61] text-[17px] "> Name of instructor</p>
                    
                   </div>
                   <p className="font-medium px-4 text-lg text-[#3C0644] underline underline-off-2 text-start"> See pricing </p>
                </div> 
                </Link>  
                <Link to="/singleHome"  style={{textDecoration:"none"}}>
                <div className=" max-w-sm emotional  flex flex-col items-start   md:h-[400.62px] md:bg-white border-2 border-gray-200 rounded-lg shadow">
                  <img className="rounded-t-lg md:w-[484.51px] md:h-[214.73px] h-[172px] w-full" src="https://jazzy-llama-392a85.netlify.app/assets/cimg2-2d400e79.png " loading="lazy"/>
                   <div className="p-5 indent-0 text-left">
                    <h5 className=" mb-2 md:text-xl text-lg text-wrap font-medium text-gray-900"> Strategic Leadership and Decision Making</h5>
                   <p className=" text-left mb-3 font-normal text-[#5E5D61] text-[17px] "> Name of instructor</p>
                    
                   </div>
                   <p className="font-medium px-4 text-lg text-[#3C0644] underline underline-off-2 text-start"> See pricing </p>
                </div> 
                </Link> 
                <Link to="/singleHome"  style={{textDecoration:"none"}}>
                <div className="max-w-sm emotional flex flex-col items-start   md:h-[400.62px] md:bg-white border-2 border-gray-200 rounded-lg shadow">
                  <img className="rounded-t-lg md:w-[484.51px] md:h-[214.73px] h-[172px] w-full" src="https://jazzy-llama-392a85.netlify.app/assets/cimg3-15aefd1b.png " loading="lazy"/>
                   <div className="p-5 indent-0 text-left">
                    <h5 className=" mb-2 md:text-xl text-lg text-wrap font-medium text-gray-900"> Transformational Leadership for the 21st Century</h5>
                   <p className=" text-left mb-3 font-normal text-[#5E5D61] text-[17px] "> Name of instructor</p>
                    
                   </div>
                   <p className="font-medium px-4  text-lg text-[#3C0644] underline underline-off-2 text-start"> See pricing </p>
                </div> 
                </Link> 
                
             </div>
           </div>
          <div className="flex items-center justify-center  ">
               <div className="md:w-[1198px] md:h-[488px] md:grid md:grid-cols-2 flex flex-col justify-center items-center md:py-5 py-2 md:mx-0 mx-3 md:bg-white border-2 border-gray-200 rounded-lg shadow  " id="montor">
               <div className="md:p-12 p-4" id="left-hold">
                     
                     <h6 className="text-[#6C6C6C] md:text-[36px] text-[20px] font-semibold text-start mb-5"> Mastering Menstorship</h6>
                     <p className="text-[#6C6C6C] text-base md:text-[20px] md:font-medium font-normal  text-start my-5">
                     Grow your career through mentoring, whether you’re a manager, leader, subject matter expert , or individual contributor
                     </p>
                        <p className="text-left"> <small> By Martin Dokidis</small></p>
                        <div className="flex flex-row  items-center ">
                           <p className="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock me-3" viewBox="0 0 16 16">
                               <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                          </svg> Duration: 7hr 30m</p>
                          <p> 12 videos</p>
                        </div>
                       <div className="flex items-start my-5">
                       <button className="w-[180px] text-sm rounded-sm font-bold text-white py-3 bg-[#531554]  ">
                      Register now
                     </button>
                       </div>
                </div>
               <div className="md:pl-14" id="right-hold">
                <img className="rounded-t-lg md:w-[458.08px] md:h-[440px]" src="https://jazzy-llama-392a85.netlify.app/assets/cimg4-7c8e5db5.png"/>
               </div>
              
               

               </div>
              
               
          </div>
        </section>
        <section className="embrace bg-[#FFFDF4] md:h-[1312px] h-[2093px] ">
          <div className="flex flex-col justify-center items-center">
          <p className="md:text-5xl text-[24px] font-extrabold text-[#100B26]  pt-10 md:py-8 md:w-[769px] w-[293px] leading-9">
          Embrace Leadership Growth at Our Coaching Events!
          </p>
          <div className="flex items-center justify-center ">
            <p className="text-[#531554] text-xl font-semibold"> See all upcoming events</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
               </svg>
          </div>
          </div>
          <div className="flex items-center justify-center mt-10 mb-5">
               <div className="md:w-[1198px] md:h-[488px] md:grid md:grid-cols-2 flex flex-col justify-center items-center py-5 md:mx-0 mx-3 md:bg-white md:border md:border-gray-200 rounded-lg md:shadow " id="embrace-content">
               <div className="md:pl-14" id="embrace-content-images">
                <img className="rounded-t-lg md:w-[458.08px] md:h-[440px]" src="https://jazzy-llama-392a85.netlify.app/assets/heroimg3-ed822c73.png"/>
               </div>
               <div>
                <p className=" text-base bg-[#DCD6FD] w-[128px] text-xs md:my-0 my-5 px-2 py-1  font-bold text-[#3C0644] rounded-xl"> LIVE2LEAD 2023</p>
                <h6 className="text-[#6C6C6C] md:text-[36px] text-[20px] font-semibold text-start mb-5 py-2"> LEADING FOR LEGACY</h6>
                <p className="text-[#6C6C6C] text-base md:text-[20px] md:font-medium font-normal  text-start my-5">Live2Lead is a full-day leadership and personal growth event broadcasting live from Atlanta, Georgia, on October 6, 2023. This simulcast event is an annual leadership gathering developed by The John Maxwell Company.</p>
                
                  <div className="flex items-start my-5">
                  <button className="w-[180px] text-sm rounded-sm font-bold text-white py-3 bg-[#531554]  ">
                 Register now
                </button>
                  </div>
               </div>
               

               </div>
              
               
          </div>
          <div className=" flex items-center justify-center  ">
             <div className="md:grid md:grid-cols-3 gap-5 md:mt-16 my-5 md:mx-0 mx-2  flex flex-col justify-center items-center  md:mx-0 mx-3 " id="Transformational">
                <Link to="/singleHome"  style={{textDecoration:"none"}}>
                <div className="max-w-sm flex flex-col items-start bg-[#FFFDF4]   md:h-[400.62px] border-2 border-gray-200 rounded-lg shadow Transformational">
                  <img className="rounded-t-lg md:w-[484.51px] md:h-[214.73px] h-[172px] w-full" src="https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png " loading="lazy"/>
                   <div className="p-5 indent-0 text-left ]">
                    <h5 className=" mb-2 md:text-xl text-lg text-wrap font-medium text-gray-900"> Transformational Leadership for the 21st Century</h5>
                   <p className=" text-left mb-3 font-normal text-[#5E5D61] text-[17px] "> Date</p>
                    
                   </div>
                   <p className="font-medium px-4 text-lg text-[#3C0644] underline underline-off-2 text-start"> See pricing </p>
                </div> 
                </Link>  
                <Link to="singleHome"  style={{textDecoration:"none"}}>
                <div className="max-w-sm flex flex-col items-start bg-[#FFFDF4]  md:h-[400.62px] Transformational  border-2 border-gray-200 rounded-lg shadow">
                  <img className="rounded-t-lg md:w-[484.51px] md:h-[214.73px] h-[172px] w-full" src="https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png " loading="lazy"/>
                   <div className="p-5 indent-0 text-left ">
                    <h5 className=" mb-2 md:text-xl text-lg text-wrap font-medium text-gray-900"> Transformational Leadership for the 21st Century</h5>
                   <p className=" text-left mb-3 font-normal text-[#5E5D61] text-[17px] "> Date</p>
                    
                   </div>
                   <p className="font-medium px-4 text-lg  text-[#3C0644] underline underline-off-2 text-start"> See pricing </p>
                </div> 
                </Link> 
                <Link to="/singleHome"  style={{textDecoration:"none"}}>
                <div className="max-w-sm flex flex-col items-start Transformational  bg-[#FFFDF4]  md:h-[400.62px]  border-2 border-gray-200 rounded-lg shadow">
                  <img className="rounded-t-lg md:w-[484.51px] md:h-[214.73px] h-[172px] w-full" src="https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png " loading="lazy"/>
                   <div className="p-5 indent-0 text-left ">
                    <h5 className=" mb-2 md:text-xl text-lg text-wrap font-medium text-gray-900"> Transformational Leadership for the 21st Century</h5>
                   <p className=" text-left mb-3 font-normal text-[#5E5D61] text-[17px] "> Date</p>
                    
                   </div>
                   <p className="font-medium px-4 text-lg  text-[#3C0644] underline underline-off-2 text-start"> See pricing </p>
                </div> 
                </Link> 
                
             </div>
           </div>
        </section>
        <section className="bg-[#FFFFFF] md:h-[2995px] h-[2477px] ">
           <div className="flex flex-col justify-center items-center  mb-10">
                    <h1 className="md:text-5xl text-[24px] text-center text-[#100B26] md:py-20 py-3 font-extrabold "> Best Solution For You </h1>
                    <p className="md:text-xl text-base  md:font-medium font-normal text-[#5E5D61] md:w-[590px] w-[327px] text-center">We offer a wide range of services to individuals, business owners, and mid- to large-size organizations to help meet their business goals.</p>

           </div>
           <div className="flex justify-center items-center">
             <div className="flex items-center w-11/12 md:w-[63%] gap-x-10 md:flex-row flex-col">
               <div className="flex justify-start items-start w-full flex-1 flex-col">
                  <h1 className="text-[#3C0644] md:text-xl  text-sm md:font-semibold ">
                      Services
                  </h1>
                  <p className="md:text-[40px]  text-[24px] md:font-medium font-normal text-[#100B26] md:text-center">
                    Corprate Training
                     </p>
                     <p className="md:text-[22px] text-start text-base md:font-medium font-normal  text-[#5E5D61]">  Will help close the gap between where you are and where you want to be.</p>
               </div>
               <div className="flex justify-center items-center  flex-1 p-2">
                <img className="md:h-[644px] h-[444px] w-[499px] object-contain" src=" https://jazzy-llama-392a85.netlify.app/assets/timg-80e5166f.png"/>
               </div>
             </div>
             
           </div>
           <div className="flex justify-center items-center">
             <div className="flex items-center w-11/12 md:w-[63%] gap-x-10 md:flex-row-reverse flex-col">
               <div className="flex justify-start items-start w-full flex-1 flex-col">
                  <h1 className="text-[#3C0644] md:text-xl  text-sm md:font-semibold ">
                      Services
                  </h1>
                  <p className="md:text-[40px]  text-[24px] md:font-medium font-normal text-[#100B26] md:text-center">
                    Personal Training
                     </p>
                     <p className="md:text-[22px] text-start text-base md:font-medium font-normal  text-[#5E5D61]">  Will help close the gap between where you are and where you want to be.</p>
               </div>
               <div className="flex justify-center items-center  flex-1 p-2">
                <img className="md:h-[644px] h-[444px] w-[499px] object-contain" src=" https://jazzy-llama-392a85.netlify.app/assets/timg1-5f3a5bbf.png"/>
               </div>
             </div>
             
           </div>
           <div className="flex justify-center items-center">
             <div className="flex items-center w-11/12 md:w-[63%] gap-x-10 md:flex-row flex-col">
               <div className="flex justify-start items-start w-full flex-1 flex-col">
                  <h1 className="text-[#3C0644] md:text-xl  text-sm md:font-semibold ">
                      Services
                  </h1>
                  <p className="md:text-[40px]  text-[24px] md:font-medium font-normal text-[#100B26] md:text-center">
                    Personal Coaching
                     </p>
                     <p className="md:text-[22px] text-start text-base md:font-medium font-normal  text-[#5E5D61]">  Will help close the gap between where you are and where you want to be.</p>
               </div>
               
               <div className="flex justify-center items-center  flex-1 p-2">
                <img className="md:h-[644px] h-[444px] w-[499px] object-contain" src=" https://jazzy-llama-392a85.netlify.app/assets/timg2-7964059b.png"/>
               </div>
               
               
             </div>
             
           </div>
            <div className="relative">
            <div className="flex justify-center items-center">
             <div className="flex items-center w-11/12 md:w-[63%] gap-x-10 md:flex-row-reverse flex-col">
               <div className="flex justify-start items-start w-full flex-1 flex-col">
                  <h1 className="text-[#3C0644] md:text-xl  text-sm md:font-semibold ">
                      Services
                  </h1>
                  <p className="md:text-[40px]  text-[24px] md:font-medium font-normal text-[#100B26] md:text-center">
                    Live Event
                     </p>
                     <p className="md:text-[22px] text-start text-base md:font-medium font-normal  text-[#5E5D61]">  Will help close the gap between where you are and where you want to be.</p>
               </div>
                
               
                <div className="flex justify-center items-center  flex-1 p-2">
                <img className="md:h-[644px] h-[444px] w-[499px] object-contain" src=" https://jazzy-llama-392a85.netlify.app/assets/timg2-7964059b.png"/>
                 
                <div className=" absolute md:p-5 p-3 md:left-[23rem] right-3 md:bottom-[1.5rem] bottom-5 md:h-[198px] h-71.9px bg-black md:w-[358px] w-[130px] rounded-md opacity-70">
                <p className="md:text-[32.25px] text-start text-[11.75px] text-white font-semibold"> Skype</p>
                <p className="md:text-[32.25px] text-start text-[11.75px] text-white font-semibold"> in-person</p>
                <p className="md:text-[32.25px] text-start text-[11.75px] text-white font-semibold"> Zoom</p>
                </div>
                </div>
               
               
               
             </div>
             
           </div>
            </div>

          
        </section>
        <section className='bg-[#FFFDF4]  md:h-[764px]  testimonial-slider'>
           <div className="flex flex-col justify-center items-center pt-10">
           <h6 className='text-base text-[#3C0644] font-extrabold py-2 text-center  uppercase'>TESTIMONIALS</h6>
             <h1 className='md:text-[48px] text-[24px] md:w-[542px] font-medium text-[#100B26] text-center'>What our clients say</h1>
           </div>
           <div className="md:my-20 my-10 ml-10 " id="testimonial-slider-holder">
             <Slider {...settings}>
                {
                     testimonial.map(item=>(
                        <div className="grid grid-cols-1 gap-5 " key={item.id} >
                            
                       <div className='gap-5 md:space-y-10 space-y-6 md:w-[90%] w-[90%] md:h-[50%] h-[100%] md:p-4 p-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center z-0 ' >
                          
                           <div className=" ">
                           <p className=' md:text-base text-[9.03px] font-normal z-50 text-start profile'>{item.profile}</p> 
                           <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <div className="flex justify-start items-center mt-2 md:mt-4 mb-2 gap-5">
                             <p className=''> <img src={item.img} className='md:w-[74px] md:h-[74px] w-[41.78px] h-[41.78px] ' alt='...'/> </p>
                             <p className='md:text-xl text-[11.29px] font-medium' > {item.name}</p>
                            </div>
                         </div>
                         
                       </div >
                       
                     </div>
                 ))
                }
             </Slider>
           </div>
        </section>
        <section className="bg-[#fff] md:h-[954px] h-[2193px] price ">
            <div className="flex items-center justify-center md:gap-5 gap-3 flex-col pt-10">
                <h6 className="text-[#531554] md:text-base text-sm md:font-extrabold font-bold text-center py-2 md:w-[1064px] uppercase">
                    EMPOWER YOURSELF WITH CTL-AFRICA </h6>
                <p className="font-extrabold text-[#100B26] md:text-5xl text-[24px]"> Pricing Plan</p>
                <p className=" text-xl font-medium text-[#5E5D61] md:w-[587px] w-[341px] text-center"> 
                Our pricing plan is tailored to the complexity of your issue and your specific business type
                </p>
            </div>
            <div className=" flex items-center justify-center md:gap-5 gap-3 flex-col my-10">
                 <div className="md:grid grid-cols-3 flex md:gap-5 gap-3 flex-col items-center price-card">
                       <div className="md:w-[378.67px] w-[343px] h-[618px] border border-[#3C0644] rounded-xl p-5 price-card">
                          <h6 className="text-[#100B26] text-[22px] font-bold"> Coaching Session</h6>
                          <p className=" md:text-base text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] paragrap" >
                          Ideal for individuals who who need advanced features and tools for client work.
                            </p>
                            <div className="space-x-2 lg:space-x-5 flex justify-start items-center  ">
                                <p className="text-[#3C0644] text-sm font-semibold paragrap-price">GH¢ </p>
                                <p className=" text-[#3C0644] text-[56px] md:text-base lg:text-[56px] font-semibold paragrap-price"> 15000</p>
                                <p className="text-base font-light text-[#3C0644] paragrap-price"> /Session</p>
                               

                            </div>
                            <div className="bg-white border border-[#3C0644] h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg my-10 paragrap-button">
                                       <button className="text-[#3C0644]  text-base font-semibold">Get Started Now</button>
                            </div>
                            <ul className=" space-y-6">
                                <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                                 className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                    </path></svg><p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Free Consultation</p>
                                    </li>
                                    <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                                     className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg><p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Coaching Plan</p>
                                    </li>
                                    <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                                    <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">5 Hours Coaching by</p></li>
                                    <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                                    <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Supporting videos</p>
                                    </li>
                                    <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" width="1em" 
                                    xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                    </path></svg><p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Online Worksheets</p>
                                    </li>
                                    </ul>
                       </div>
                       <div className="md:w-[378.67px] w-[343px]  h-[618px] border border-[#3C0644] bg-[#3C0644] rounded-xl p-5 shadow price-card">
                        <p className=" text-white text-[22px] font-bold">Personal Training</p>
                        <p className=" md:text-base text-sm font-medium text-white py-2 md:w-[320.67px] paragrap">
                            Ideal for individuals who who need advanced features and tools for client work.
                            </p>
                    <div className="space-x-5 md:space-x-2 lg:space-x-5 flex justify-start items-center">
                        <p className="text-white text-sm font-semibold paragrap-price">GH¢</p>
                        <p className=" text-white text-[56px] md:text-base lg:text-[56px] font-semibold paragrap-price">250</p>
                        <p className=" text-base font-light text-white paragrap-price">/ Session</p>
                        </div>
                        <div className="bg-white h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg my-10  paragrap-button">
                            <p className="text-[#3C0644] text-base font-semibold">Get Started Now</p>
                            </div>
                            <ul className=" space-y-6">
                            <li className="flex gap-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" 
                                className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                </path></svg>
                            <p className="text-white text-base md:text-sm lg:text-base font-medium">Free Consultation</p>
                            </li>
                            <li className="flex gap-4">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" 
                                className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                </path></svg>
                                <p className="text-white text-base md:text-sm lg:text-base font-medium">Coaching Plan</p>
                                </li>
                                <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" 
                                className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                </path></svg>
                                <p className="text-white text-base md:text-sm lg:text-base font-medium">5 Hours Coaching by</p>
                                </li>
                                <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                                viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                </path></svg>
                                <p className="text-white text-base md:text-sm lg:text-base font-medium">Supporting videos</p>
                                </li>
                                <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                                viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" width="1em" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                                </path></svg><p className="text-white text-base md:text-sm lg:text-base font-medium">Online Worksheets</p>
                                </li> 
                                </ul>
                       </div>
                       <div className="md:w-[378.67px] w-[343px]  h-[618px] border border-[#3C0644] rounded-xl p-5 price-card">
                        <p className=" text-[#100B26] text-[22px] font-bold">Corporate Training</p>
                        <p className=" md:text-base text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] paragrap">
                            Ideal for individuals who who need advanced features and tools for client work.
                        </p>
                        <div className=" space-x-5 flex justify-start items-center">
                        <p className=" text-[#3C0644] text-[56px] font-normal paragrap-price">Custom</p>
                        </div>
                        <div className="bg-white border border-[#3C0644] h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg my-10  paragrap-button">
                            
                       <p className="text-[#3C0644] text-base font-semibold">Contact Us</p>
                       </div>
                       <ul className=" space-y-6">
                        <li className="flex gap-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                             viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" 
                             width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                            </path></svg>
                            <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Free Consultation</p>
                            </li>
                            <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                             className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                            <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Coaching Plan</p>
                            </li>
                            <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" 
                            className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                            <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">5 Hours Coaching by</p>
                            </li>
                            <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" 
                            className="text-[#DCD6FD] text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                            </path></svg>
                            <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Supporting videos</p>
                            </li>
                            <li className="flex gap-4"><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                             viewBox="0 0 256 256" className="text-[#DCD6FD] text-3xl" height="1em" width="1em" 
                             xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z">
                            </path></svg>
                            <p className="text-[#100B26] text-base md:text-sm lg:text-base font-medium">Online Worksheets</p>
                            </li>
                            </ul>
                       </div>
                 </div>
            </div>

        </section>
        <section className="bg-[#F8F9FA] md:h-[761px] h-auto md:px-7">
        <div className="flex flex-col justify-center items-center pt-10">
            <p className="md:text-base text-sm text-[#3C0644] font-extrabold py-2 text-center md:w-[1064px] uppercase">OUR AMAZING TEAM</p>
            <p className=" md:text-[48px] text-[24px] font-extrabold text-[#100B26] md:w-[718px] w-[347px] text-center">
                Get to Know Our Exceptional Team
           </p>
           </div>
           <div className="flex md:flex-row flex-col justify-center items-center md:my-10 lg:my-20 md:gap-6 gap-8 md:px-3 team-holder " >
            <div className="flex md:flex-row flex-col md:gap-4 gap-2" id="team-left">
            <img src="https://jazzy-llama-392a85.netlify.app/assets/team1-a099e0ab.png" alt="img-1" className="lg:h-[382px] h-[574px]  object-contain md:w-[150px] lg:w-[219px] w-full" loading="lazy" />
            <div className="flex flex-col justify-center items-start md:mx-0 mx-4">
             <div >
                <p className="text-[#100B26] text-[24px] font-medium name">
                Samuel Kumi Ayim</p>
            <p className="text-[#5E5D61] text-[13px] text-start">Founder and CEO</p>
            </div>
            <p className=" md:w-[200px] lg:w-[350px] lg:h-[180px]  lg:my-10 my-5 text-start text-[#100B26] md:text-base text-sm  team-left-para">
            Samuel Ayim is the visionary leader behind Focus Life Group and CTL Africa.
             As a seasoned attorney with extensive expertise in banking, finance, 
             and corporate governance, he is a John Maxwell certified leadership coach,
              motivational teacher, and a cohort facilitator of BCA Leadership.</p>
              <div className=" md:space-y-3">
            <p className="text-[#2359E4] font-normal text-base">email@email.com</p>
            <p className="flex gap-2 text-[#3C0644]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" 
            className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
            </path></svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
             viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z">
            </path></svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
            viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
            </path></svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
            viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z">
            </path></svg></p></div></div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-4 gap-2" id="team-right">
                <img src="https://jazzy-llama-392a85.netlify.app/assets/team2-ca1105f8.png" alt="img-2" className="lg:h-[382px] h-[574px]  object-contain lg:w-[219px] md:w-[150px] w-full" 
                loading="lazy" />
                <div className=" flex flex-col justify-center items-start md:mx-0 mx-4">
                <div >
                <p className="text-[#100B26] text-[24px] text-start font-medium name">Sarah Jessie Appiah</p>
                <p className="text-[#5E5D61] text-[13px] text-start">Partner</p>
                </div>
                <p className="lg:w-[280px] lg:h-[151px] lg:my-10 my-5 text-[#100B26] md:text-base text-sm text-start team-right-para">
                    As a global, growing company, we’re able to offer rewarding careers that let you make a positive impact.</p>
                    
                    <div className="space-y-3">
                        <p className="text-[#2359E4] font-normal text-base">email@email.com</p>
                        <p className="flex gap-2 text-[#3C0644]">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                        viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg><svg stroke="currentColor" fill="currentColor"
                          strokeWidth="0" viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z">
                        </path></svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                        viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                        </path></svg><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                        viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z">
                            
                    </path>
                    </svg>
                    </p>
                    </div>
                    </div>
            </div>
            </div>
                    
        </section>
        <section className="bg-[#FFF] md:h-[800px] lg:h-[655px] h-[1027px] contact md:px-16">
            <div className="flex md:flex-row flex-col justify-center items-start gap-5 lg:gap-20 md:py-20  md:mx-0 mx-2 contact-form">
            <div className="flex flex-col justify-start items-start md:mx-0 mx-2 md:w-[1/2] lg:w-full">
            <div className="my-5">
            <p className="text-[#3C0644] md:text-sm text-xs font-[700] text-start">CONTACT US</p>
            <p className="font-normal text-start md:text-xl text-xl text-[#2E2E2E] lg:w-[470px] w-[300px] py-2">
              We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email, choose what suits you most.</p>
            </div>
            <div className=" space-y-2">
            <p className="text-[#3C0644] text-sm font-[700] text-start">WORKING HOURS</p>
            <p className="text-[#2E2E2E] text-xl font-normal text-start">Mon - Fri: 8am - 5pm</p>
            </div>
            <div className="bg-[#FBFAFF] md:w-[386px] md:h-[240px] md:my-7 p-5">
            <div className=" space-y-4">
                <div className="flex gap-3">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" 
                xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" 
                strokeWidth="2" d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"></path></svg>
                <span className=" font-normal text-base text-[#2E2E2E] text-start">Nuumo Odai Arku St - Adjiringanor, Accra</span>
                </div>
                <div className="flex gap-3">
               
                <svg stroke="currentColor" fill="currentColor" 
                strokeWidth="0" viewBox="0 0 16 16" className="text-2xl" height="1em" width="1em"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M8.648 6.648L13.29 2H10V1h5v5h-1V2.71L9.352 7.353l-.704-.704zm3.305 2.563a1.567 1.567 
                0 0 1 1.102.453c.11.11.232.224.367.344l.43.383c.15.135.291.276.421.421.13.146.253.295.368.446.114.15.2.312.257.484
                .058.172.092.344.102.516a1.568 1.568 0 0 1-.453 1.101c-.266.266-.505.5-.719.704a4.006 4.006 0 0 1-.664.515c-.23.14-.487.245-.773.313a4.696 4.696
                 0 0 1-1.008.109 6.157 6.157 0 0 1-1.75-.266A9.819 9.819 0 0 1 7.843 14a12.445 12.445 0 0 1-1.741-1.117 15.329 15.329 0 0 1-1.61-1.414c-.505-.51-.974-1.05-1.406-1.617a11.64 11.64
                  0 0 1-1.102-1.735 10.38 10.38 0 0 1-.718-1.773A6.005 6.005 0 0 1 1 4.625c0-.396.034-.734.102-1.016a2.63 2.63 0 0 1 .312-.765c.14-.23.313-.45.516-.664.203-.214.44-.456.71-.727A1.567 1.567 0
                   0 1 3.743 1c.26 0 .51.07.75.21.24.142.472.313.696.517.223.203.43.416.617.64.187.224.364.417.53.578a1.567 1.567 0 0 1
                  .453 1.102 1.4 1.4 0 0 1-.1.547 1.824 1.824 0 0 1-.25.43 2.983 2.983 0 0 1-.329.351c-.12.11-.229.214-.328.313a3.128 3.128 0 0 0-.258.289.46.46 0
                  0 0-.101.312c0 .063.047.162.14.297a5.3 5.3 0 0 0 .391.484 24.386 24.386 0 0 0 1.211 1.266c.234.23.461.45.68.664.218.214.43.417.633.61.203.192.375.356.515.492.
                  14.135.25.24.328.312a.534.534 0 0 0 .696.063c.093-.068.19-.152.289-.25.099-.1.2-.209.304-.329.104-.12.224-.229.36-.328.135-.099.278-.185.43-.258a1.21
                   1.21 0 0 1 .554-.101zM11.383 14c.318 0 .583-.029.797-.086a1.93 1.93 0 0 0 .586-.266c.177-.12.343-.26.5-.421.156-.162.346-.352.57-.57.11-.11.164-.24.164-.391 0-.068-.042-.164-.125-.29a6.122
                    6.122 0 0 0-.313-.421 5.01 5.01 0 0 0-.43-.47c-.16-.155-.317-.299-.468-.429a4.322 4.322 0 0 0-.414-.32c-.125-.083-.224-.125-.297-.125a.545.545 0 0 0-.312.101 1.801 1.801 0 0 0-.29.25c-.093.1-.195.209-.304.329-.11.12-.23.229-.36.328-.13.099-.273.185-.43.258a1.208 1.208 
                    0 0 1-.546.101 1.527 1.527 0 0 1-1.102-.46L4.883 7.39a1.537 1.537 0 0 1-.336-.5 1.655 1.655 0 0 1-.125-.602c0-.203.034-.383.101-.539.068-.156.151-.302.25-.438.1-.135.209-.252.329-.351.12-.099.229-.203.328-.313.099-.109.185-.205.258-.289a.429.429 0 0 0
                    .101-.312c0-.068-.042-.164-.125-.29a5.085 5.085 0 0 0-.312-.413 6.791 6.791 0 0 0-.43-.469 6.787 6.787 0 0 0-.469-.43 5.674 5.674 0 0 0-.422-.32c-.13-.089-.226-.13-.289-.125a.542.542 0 0 0-.398.164 65.24 65.24 0 0 1-.57.563 3.073 3.073 0 0 0-.422.5 1.9 1.9 0 0 0-.258.586A3.377
                     3.377 0 0 0 2 4.601c0 .5.08 1.015.242 1.546a9.12 9.12 0 0 0 .672 1.61c.287.541.63 1.068 1.031 1.578.401.51.831.997 1.29 1.46a13.205 13.205 0 0 0 3.046 2.298 8.37 8.37 0 0 0 1.586.664 5.526 5.526 0 0 0 1.516.242z">
                        </path>
                        </svg>
                        
                        
               <p className="flex flex-col gap-3">
                <span className="font-normal text-base text-[#2E2E2E]">
                    (+233) 55 051 5391</span>
                    
                    <span className="font-normal text-base text-[#2E2E2E]">
                    (+233) 54 008 433</span></p>
                    
                    </div>
                    
                    <div className="flex gap-3 items-start">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                        viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z">
                        </path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z">
                            </path>
                            </svg>
                            <span className="font-normal text-base text-[#2E2E2E]">enquiries@ctl-africa.com</span>
                    </div>
            </div>
                <div className="flex gap-2 text-[#3C0644] my-5">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                        viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg">
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 
                                32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 
                                1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2
                                 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 
                                112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
                                </path>
                        </svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                         className="bi bi-twitter text-2xl" viewBox="0 0 16 16">
                           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                         </svg>
                          <svg stroke="currentColor" 
                fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" 
                className="text-2xl" height="1em" width="1em" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 
                245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 
                4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 
                71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                </path>
                         </svg>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                 viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em" 
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8
                 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 
                 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1
                  109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 
                 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 
                 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2
                  16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z">
                    </path>
                          </svg>
                    </div>
                </div>
            </div>
            <div className=" md:w-[1/2] lg:w-full">
                <form className=" space-y-5 form-holder md:w-[1/2] lg:w-full" >
                            <div className="flex flex-col md:w-[170px] lg:w-full">
                                <label htmlFor="fullname" 
                                className=" text-[#000000] font-normal text-sm text-start">Full Name</label>
                                <input id="fullname" type="text" className="border border-[#E9E9E9]  lg:w-[536px] w-[343px] p-2 rounded-md" placeholder="Your full name" />
                            </div>
                                    
                             <div className="flex flex-col md:w-[170px] lg:w-full">
                            <label htmlFor="email" className=" text-[#000000] font-normal text-sm text-start">Email</label>
                            <input type="email" id="email" className="border border-[#E9E9E9] md:w-[536px] w-[343px] p-2 rounded-md" placeholder="Your email" />
                             </div>
                             
                             <div className="flex flex-col md:w-[170px] lg:w-full">
                                <label htmlFor="Subject" className=" text-[#000000] font-normal text-sm text-start">Subject</label>
                                <input id="Subject" type="text" className="border border-[#E9E9E9] md:w-[536px] w-[343px] p-2 rounded-md" placeholder="Your full name" />
                             </div>
                             <div className="flex flex-col md:w-[170px] lg:w-full">
                        <label htmlFor="message" className=" text-[#000000] font-normal text-sm text-start ">Message</label>
                        <textarea id="message" placeholder="Message" rows="4" className="border border-[#E9E9E9] p-3 md:w-[536px] w-[343px] "
                         data-gramm="false" wt-ignore-input="true">
                        </textarea>
                
                </div>
                <div className="flex md:items-center items-start">
                <button className="bg-[#3C0644] text-white w-[180px] p-2 ">
                Submit
                </button>
                </div>
                </form>
            </div>
          </div>
        </section>
        <section className="bg-[#F8F9FA] md:min-h-screen lg:h-[745px] h-[1990px]  ">
            <div className="flex flex-col justify-center items-center pt-10 gap-4">
                <p className="md:text-base text-sm text-[#3C0644] font-extrabold py-2 text-center md:w-[1064px] uppercase">
                    Blog
                    </p>
                    <p className="text-[#1B1D24] md:text-[40px] text-[20px] font-normal">
                        Read the CTL-Africa Blog</p>
                    <p className=" md:text-[20px] text-[16px] font-normal text-[#100B26] md:w-[580px] w-[251px] text-center">
                        Our pricing plan is tailored to the complexity of your issue and your specific business type</p>
                        
           </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-5 my-16">
                        <div className="max-w-[308px] bg-white border border-gray-200 rounded-lg shadow md:h-[421.62px] grid grid-rows-[1fr auto]">
                            <img className="rounded-t-lg" src="https://jazzy-llama-392a85.netlify.app/assets/blogimg1-6347a035.png" alt="...." loading="lazy"
                             width="308px" height="246px" />
                             
                            <div className="px-5 py-5 flex justify-between">
                            <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-900">COACHING</h5>
                            <p className="mb-3 font-medium text-[#6E6E6E] text-sm">Aug 13, 2023</p>
                            </div>
                            <div className="px-5 py-2">
                                <p className="w-[256px] font-medium md:text-xl text-start text-base text-[#2E2E2E]">
                                    Leaders Break Limiting Beliefs
                                    </p>
                                    
                            </div>
                            <a href="/" className="px-5 text-lg font-medium text-start text-[#3C0644] hover:text-[#3C0644] underline underline-offset-2">
                                Read article
                                </a>
                        </div>
                            
                        <div className="max-w-[308px] bg-white border border-gray-200 rounded-lg shadow md:h-[421.62px] grid grid-rows-[1fr auto]">
                         <img className="rounded-t-lg" src="https://jazzy-llama-392a85.netlify.app/assets/blogimg2-7aa2a983.png" alt="..." loading="lazy"
                          width="308px" height="246px" />

                           <div className="px-5 py-5 flex justify-between">
                            <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-900">
                                ADDITIONAL INDUSTRIES</h5>
                            <p className="mb-3 font-medium text-[#6E6E6E] text-sm">Aug 13, 2023</p>
                            </div>
                            <div className="ps-5 py-2">
                             <p className="w-[256px] font-medium md:text-xl text-base text-[#2E2E2E] text-start">
                                Leaders Take Responsibility
                            </p>
                            </div>
                            <a href="/" className="px-5 text-lg font-medium hover:text-[#3C0644] text-[#3C0644] text-start underline underline-offset-2">
                                Read article
                            </a>
                        </div>
                        <div className="max-w-[308px] bg-white border border-gray-200 rounded-lg shadow md:h-[421.62px] grid grid-rows-[1fr auto]">
                                    
                                    <img className="rounded-t-lg" src=" https://jazzy-llama-392a85.netlify.app/assets/blogimg3-ac0ec640.png" 
                                    alt=" " loading="lazy" width="308px" 
                                    height="246px" />
                                    
                                       <div className="px-5 py-5 flex justify-between" >
                                        <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-900">
                                            BUSINESS</h5>
                                        <p className="mb-3 font-medium text-[#6E6E6E] text-sm">Aug 13, 2023</p>
                                        
                                        </div>
                                        <div className="px-5 py-2">
                                            <p className="w-[256px] font-medium md:text-xl text-base text-[#2E2E2E] text-start">
                                                Leading at Home
                                                </p>
                                        </div>
                                          <a href="/" className="px-5 hover:text-[#3C0644] text-lg text-start font-medium text-[#3C0644] underline underline-offset-2">
                                                    Read article
                                          </a>
                        </div>

                         <div className="max-w-[308px] bg-white border border-gray-200 rounded-lg 
                                                    shadow md:h-[421.62px] grid grid-rows-[1fr auto]">
                                                    <img className="rounded-t-lg" src="https://jazzy-llama-392a85.netlify.app/assets/blogimg4-ed48dcb9.png " alt="..." loading="lazy"
                                                 width="308px" height="246px" />
                                                    
                                                    <div className="px-5 py-5 flex justify-between">
                                                    <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-900 text-start">CORPORATIVE</h5>
                                                    <p className="mb-3 font-medium text-[#6E6E6E] text-sm text-start">Aug 13, 2023</p>
                                                    </div>
                                                    <div className="px-5 py-2">
                                                        <p className="w-[256px] font-medium md:text-xl text-base text-[#2E2E2E] text-start">
                                                            True Leaders Are Never Lonely at the Top</p>
                                                            </div>
                                                            <a href="/" className="px-5 text-lg font-medium hover:text-[#3C0644] text-[#3C0644]
                                                             underline underline-offset-2 text-start">

                                     Read article
                                    </a>
                        </div>
                 </div>
         </section>
        
      </main>
      <Footer/>
    </div>

  )
}
