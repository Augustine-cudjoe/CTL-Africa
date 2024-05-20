import React,{useEffect} from 'react'
import OtherNav from "../othernav/OtherNav"

import { IoMdCheckmark } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import "./singlehome.css"
function SingleHome() {
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
    const courses=[
        {
           id:1,
          img:"https://jazzy-llama-392a85.netlify.app/assets/cimg1-d51343e1.png",
           topic:"Leading with Emotional Intelligent",
            name:"name of instructor",
          price:"See pricing"
           
         },
       
        {
          id:2,
            img:"https://jazzy-llama-392a85.netlify.app/assets/cimg1-d51343e1.png",
           topic:"Leading with Emotional Intelligent",
           name:"name of instructor",
           price:"See pricing"
        },
        {
          id:3,
            img:"https://jazzy-llama-392a85.netlify.app/assets/cimg2-2d400e79.png",
           topic:"Leading with Emotional Intelligent",
           name:"name of instructor",
           price:"See pricing"
        },
        {
          id:4,
            img:"https://jazzy-llama-392a85.netlify.app/assets/cimg3-15aefd1b.png",
           topic:"Leading with Emotional Intelligent",
           name:"name of instructor",
           price:"See pricing"
        }


         ];
    var settings = {
      dots: true,
        
      infinite: true,
       arrows:false,
      className: "center",
      centerMode: true,
      centerPadding: "40px",
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
          }
          
        ]
      };
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
        },
        {
            "id": 6,
            "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
            "name":"Esther Haword",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
        },
        {
            "id": 7,
            "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
            "name":"Kebs Water",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
        },
        {
            "id": 8,
            "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
            "name":"Sammi Tang",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
        }
      
      ];
      const cousList=[
        {
        id:"0",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"1",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"2",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"3",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"4",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"5",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"6",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
        {
        id:"7",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"8",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"9",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"10",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       },
       {
        id:"0",
        img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
        title:"Leading with Emotional Intellience ",
        instruct:"Name of instructor",
        price:" See pricing"
       }
      ]
      useEffect(()=>{
        document.title='singleHome'
       },[])
  return (
    <div className='SingleCourses max-h-screen'>
     <OtherNav/>
     <main >
      <div className=' overflow-x-hidden'>
      <section className='md:h-[1798px] h-auto md:py-16 py-10 p-2 md:p-16' id='singlehome-left'>
       <div className="single-course-hero mx-2 flex md:flex-row flex-col md:justify-center md:items-center  gap-10 pt-16" >
         <div className="flex flex-col gap-10  single-com">
          <div className="single-right-content">
                   
                   <div className="head">
                   <h1 className=" singlecourses-hero-text text-start md:text-[48px] text-[20px] md:font-extrabold font-medium text-[#100B26] w-full ">
                   Servant Leadership:  Leading with Purpose and  Compassion
                   </h1>
                   <p className="courses-hero-paragraph md:text-base text-start text-sm font-normal text-[#5E5D61] md:w-[554px] w-full space-y-4">
                   This course delves deep into the principles and practices of Servant 
                    Leadership, offering a comprehensive understanding of how to lead with 
                     purpose and compassion.
                   </p>
                   </div>
                   <div className="instructor flex  gap-x-3  my-4">
                    <img src=" https://jazzy-llama-392a85.netlify.app/assets/instructorimg-c6fedfb4.png" className='w-[64px] h-[64px] ' />
                    <div className="instuctor-name flex flex-col items-start justify-content-start  ">
                      <h6 className='font-semibold text-2xl text-[#000000]'> Juanita Flores   </h6>
                      <p className='font-normal text-xl text-[#5E5D61]'>Instructor</p>
                    </div>
                     
                   </div>
                   <div className="flex md:flex-row flex-col md:space-x-10  space-y-4 md:space-y-0 " id='single-courses-button'>
                      <button className=' lex flex-row gap-4 justify-center items-center w-[197px] bg-[#3C0644] text-white border border-[undefined] text-base font-medium rounded-sm py-2 text-center'>Subscribe to Learn  </button>
                      <button className='flex flex-row gap-4 justify-center items-center w-[197px] bg-[#ffffff] text-[#3C0644] border border-[#3C0644] text-base font-medium rounded-sm py-2 text-center'>Buy Course</button>
                      
                   </div>
          </div>
                  
                 

          </div>
          <div className="flex  single-hero " >
            <div className='single-hero-card h-auto  w-full md:w-[490px] rounded-md shadow-md bg-white relative md:my-10' >
                       <div className="flex flex-col relative">
                       <img src="https://jazzy-llama-392a85.netlify.app/assets/cmain-acd475ed.png" className='rounded-t-lg md:w-full md:h-[395px] h-[282px] '/>
                       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-play-circle text-6xl text-white absolute md:top-48 top-20 md:right-56 right-32 " viewBox="0 0 16 16" id='bi-play-circle'>
                       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                         <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                         </svg>
                       </div>
                         <div className="p-3 flex  gap-10 items-center">
                         <p  className='text-[#100B26] text-[40px] font-bold'> GH¢200</p>
                         <p className='text-[20px] p-2 text-center  bg-[#48AB31] font-semibold rounded-md text-white'> 20% off</p>
                         
                         </div>
                       
                           <div className="p-4">
                           <h6 className="text-[#000000] font-semibold text-[24px] text-start" >This course includes:</h6>
                            <ul className='text-[20px] text-[#5E5D61] font-semibold space-y-5'>
                               <li> <p className='flex gap-5  items-center space-x-4'>
                              <span>
                               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-clock text-[#3AAB69]" viewBox="0 0 16 16">
                                     <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                               </svg>
                               </span > 
                                Duration: <span className='text-[#000000]'>7hr 30m</span></p> </li> 
                                <li>  <p className='flex gap-5 items-center'>
                                    <span> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-play-btn text-[#7F43AB]" viewBox="0 0 16 16">
                                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                             </svg></span >  12 Videos</p></li>

                             <li>  <p className='flex flex-row  gap-5  items-center  '>
                               <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                              viewBox="0 0 24 24" className="text-[#48AB32]" height="1em" width="1em" 
                              xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z">
                                </path>
                                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
                                </path>
                                </svg>

                                 <span className=' text-start '> Access from any Computer. Tablet or Mobile</span></p> </li>
                                <li>  <p className='flex gap-5  items-center space-x-4  '> 
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                                viewBox="0 0 16 16" className="text-[#AB2A20]" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z">
                                </path>
                                </svg>

                                Full lifetime access</p></li>
                                <li> 
                             <p className='flex gap-5  items-center space-x-4  '>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                                viewBox="0 0 256 256" className="text-[#9BAB29]" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M246,128a54,54,0,1,0-92,38.32V224a6,6,0,0,0,8.68,5.37L192,214.71l29.32,14.66A6,6,0,0,0,224,230a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,224V166.32A53.83,53.83,0,0,0,246,128Zm-96,0a42,42,0,1,1,42,42A42,42,0,0,1,150,128Zm68,86.29-23.32-11.66a6,6,0,0,0-5.36,0L166,214.29v-39a53.87,53.87,0,0,0,52,0ZM134,192a6,6,0,0,1-6,6H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14,6,6,0,0,1-12,0,2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2h88A6,6,0,0,1,134,192Zm-16-56a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h40A6,6,0,0,1,118,136Zm0-32a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h40A6,6,0,0,1,118,104Z">
                                </path>
                                </svg>
                                 Certificate of completion
                                 </p>
                           </li>

                            </ul>
                            
                            
                            
                            
                           </div>
                         
                    
            </div>
                    
          </div>
       </div>
       <div className='' >
       <div className="about-course md:px-0 px-4" >
            <h1 className="about-header text-start py-3 md:text-[40px] text-[24px] font-semibold text-[#100B26] ">About Course</h1>
            <p className="about-page text-start md:w-[740px] w-11/12 font-normal text-[#000000] md:text-xl text-lg">
            Are you ready to explore a leadership style that goes beyond authority and 
             empowers you to lead with empathy and a genuine desire to serve others? Our 
              "Servant Leadership" course is a transformative journey that delves into the core
               principles and practices of leadership guided by purpose and compassion. This 
                course is designed for both emerging and experienced leaders who seek to 
                foster stronger connections with their teams, inspire trust, and make a positive impact in 
                their organizations and communities.
            </p> 
            <div className="course-details md:px-0 px-5">
                <h1 className="course-details-header text-start md:text-[40px] text-[24px] font-semibold text-[#100B26] mt-5">What you will learn in the course</h1>
                <ul className='detail-list space-y-8'>
                    <li className='mb-5 mb-2 list-items pb-md-5 ' >
                       <p className=' flex gap-4' > 
                        <IoMdCheckmark className='md:text-3xl w-[1em] h-[1em] single-icon'/> 
                         <span className='text-xl font-medium text-[#100B26] flex flex-col gap-2 text-start'>The Essences of Servant Leadership</span></p> 
                       <p className='pl-6  md:pl-12 text-start md:w-[567px] w-auto text-[#5E5D61] text-sm'>
                        Gain a deep understanding of the philosophy and principles behind servant leadership
                         and its profound impact on organizational culture.</p>
                    </li>
                    <li className='mb-5 mb-2 list-items pb-md-5 ' >
                       <p className=' flex gap-4' > 
                        <IoMdCheckmark className='md:text-3xl w-[1em] h-[1em] single-icon'/> 
                         <span className='text-xl text-start font-medium text-[#100B26] flex flex-col gap-2'>Compassionate Communication</span></p> 
                       <p className=' pl-6  md:pl-12 text-start md:w-[567px] w-auto text-[#5E5D61] text-sm'>
                        Gain a deep understanding of the philosophy and principles behind servant leadership
                         and its profound impact on organizational culture.</p>
                    </li>
                    <li className='mb-5 mb-2 list-items pb-md-5 ' >
                       <p className=' flex gap-4' > 
                        <IoMdCheckmark className='md:text-3xl w-[1em] h-[1em] single-icon'/> 
                         <span className='text-xl font-medium text-[#100B26] flex flex-col gap-2 text-start'>Building Strong Relationships</span></p> 
                       <p className='pl-6  md:pl-12 text-start md:w-[567px] w-auto text-[#5E5D61] text-sm'>
                        Gain a deep understanding of the philosophy and principles behind servant leadership
                         and its profound impact on organizational culture.</p>
                    </li>
                    <li className='mb-5 mb-2 list-items pb-md-5 ' >
                       <p className=' flex gap-4' > 
                        <IoMdCheckmark className='md:text-3xl w-[1em] h-[1em] single-icon'/> 
                         <span className='text-xl text-start font-medium text-[#100B26] flex flex-col gap-2'>Leading with Purpose</span></p> 
                       <p className=' pl-6  md:pl-12 text-start md:w-[567px] w-auto text-[#5E5D61] text-sm'>
                        Gain a deep understanding of the philosophy and principles behind servant leadership
                         and its profound impact on organizational culture.</p>
                    </li>
                   
                </ul>
            </div>
        </div>
       </div>
      </section>
      <section className='bg-[#FBFAFF]  md:h-[764px] single-testimonial-slider'>
           <div className="flex flex-col justify-center items-center pt-10">
              
             <p className='md:text-[45px] text-[24px] md:w-[542px] font-medium text-[#100B26] text-center'>
             Transforming Lives, One Testimonial at a Time!
             </p>
           </div>
           <div className="md:my-20 my-10 ml-10 ">
             <Slider {...settings}>
                {
                     items.map(item=>(
                        <div className="grid grid-cols-4 gap-5 " key={item.id}>
                            
                       <div className='gap-5 md:space-y-10 space-y-6 md:w-[90%] w-[90%] md:h-[50%] h-[100%] md:p-4 p-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center z-0 '  >
                          
                           <div className=" ">
                           <p className=' md:text-base text-[9.03px] font-normal z-50 text-start'>{item.text}</p> 
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
      <section className="bg-[#FFFDF4] md:h-[764px] h-auto  ">
            <div className="flex justify-between py-2 md:px-16">
                <p class="text-[#100B26] md:text-[48px] text-2xl font-bold p-3">
                Similar Courses
                </p>
                <div>
                </div>
                
            </div>
            <div className="slider-container g-2 mb-2 mb-md-5 pt-2 pt-md-5">
                <Slider {...settings}>
           
          
             {
                cousList.map(item=>(
                       <div className="flex flex-row justify-start items-center  md:my-20 my-10" key={item.id}>
                        <div className=" course-single-card p-5">
                        <Link   to={`/singleCourses/${item.id}`} style={{textDecoration:"none"}}>
                         <div key={item.id} className='ms-2 ms-md-4 max-w-sm bg-#FFFDF4 border border-gray-200 rounded-lg shadow md:h-[421.62px] grid grid-rows-[1fr auto]'  >
                          <img  className='rounded-t-lg md:w-[384.51px] md:h-[214.73px] h-[172px]"' src={item.img} />
                        <div className=' p-5 text-start'>
                           <p className='mb-2 md:text-xl md:font-bold text-lg font-medium tracking-tight text-gray-900'>{item.title}</p>
                        <p className='mb-3 font-normal text-[#5E5D61] text-[17px]' >{item.instruct}</p>
                          
                         
                        
                        </div>
                        <p  className='px-5 text-lg text-start font-medium text-[#3C0644] underline underline-offset-2'> {item.price} </p>
                       </div>
                       </Link>
                    </div>
                    </div>
                ))
            }
      
         </Slider>
          </div>
                
                           
                            
     </section>
      </div>
     </main>
     <Footer/>
    </div>
  )
}

export default SingleHome;