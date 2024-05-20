import React,{useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';

import "./courses.css"
import OtherNav from '../../pages/othernav/OtherNav';
import Footer from '../../pages/footer/Footer';

function Courses() {
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
         const testimony=[
            {
                id: 0,
                "text":"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
                "name":"Joy Abeyie",
                "img": "https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
            },
        
            {
                id: 1,
                text:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
                name:"Jocab Jones",
                img:"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
            },
        
            {
                id: 2,
                text:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
                name:"Guy Hawkins",
                img:"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
            },
        
            {
                id: 3,
                text:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
                name:"Esther Haword",
                img:"https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
            },
            {
                id: 4,
                text:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
                name:"Kebs Water",
                img:"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
            },
            {
                id: 5,
                text:"This coaching and leadership company provides a transformative experience. The training is comprehensive, the coaches are dedicated to your growth, and the support is exceptional. I came out of the program with a new level of confidence and an enhanced skill set that has proven invaluable in my professional life.",
                name:"Sammi Tang",
                img:"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
            }
        
        ];
        const settings = {
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
                  breakpoint: 1040,
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
            id:"11",
            img:" https://jazzy-llama-392a85.netlify.app/assets/cimg5-fb520428.png",
            title:"Leading with Emotional Intellience ",
            instruct:"Name of instructor",
            price:" See pricing"
           }
          ]
          useEffect(()=>{
            document.title='courses'
           },[])
  return (
    <div className='Courses'>
        <header>
            <OtherNav/>
        </header>
       <main>
       <div className="max-h-screen overflow-x-hidden">
        <section className=" md:h-[794px] h-auto">
            <div className="md:pt-20 md:block hidden">
                <ul className="flex flex-row gap-4 md:px-20 pt-5 pb-6  font-medium text-base shadow-md border-t border-gray-300 ">
                    <li className="cursor-pointer">Leadership</li>
                    <li className="cursor-pointer">Coaching</li>
                    <li className="cursor-pointer">Corporative</li>
                    <li className="cursor-pointer">Leading</li>
                    <li className="cursor-pointer">Strategy</li>
                    </ul>
                    </div>
                    <div className="md:p-10 md:grid md:grid-cols-2 gap-10 md:space-y-0 space-y-6  px-5 md:mt-20 pt-28 pb-10 ">
                        
                        <div className="flex justify-center items-center">
                            <img src="https://jazzy-llama-392a85.netlify.app/assets/cmain-acd475ed.png" alt="cmain" className="md:w-[588px] md:h-[465px] w-[343px] h-[289.33px]" width="588px" height="465px" />
                        </div>
                        <div className="flex flex-col gap-10 ">
                            <div  className=' course-hero'>
                                <p className="font-extrabold text-xl text-primary text-start text-[#531554]">New course</p>
                                <p className="md:text-[40px] text-[20px] md:font-semibold font-medium text-[#100B26] md:w-[496px] text-start">
                                Servant Leadership: Leading with Purpose and Compassion
                                </p>
                                <p className="md:text-base text-sm font-normal text-[#5E5D61] text-start ">
                                 This course delves deep into the principles and practices of Servant Leadership,
                                  offering a comprehensive understanding of how to lead with purpose and compassion.
                                  </p>
                                  </div>
                                  
                                  <div className="flex gap-x-3 flex-row">
                                   <img src="https://jazzy-llama-392a85.netlify.app/assets/instructorimg-c6fedfb4.png" alt="..." className="" width="62px" height="62px" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-2xl text-[#000000]">
                                        Juanita Flores
                                        </p>
                                        <p className="font-normal text-xl text-[#5E5D61] text-start">Instructor</p>
                                        </div>
                                  </div>
                                   
                                    <div className="flex md:flex-row flex-col md:space-x-10  space-y-4 md:space-y-0">
                                     <button className="flex flex-row gap-4 justify-center items-center w-[197px] bg-[#3C0644]
                                         text-white border border-[undefined] text-base font-medium rounded-sm py-2 text-center">
                                            Subscribe to Learn 
                                            <span className="text-white">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" 
                                            className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z">
                                                    </path>
                                                    </svg>
                                                    </span>
                                        </button>
                                                    
                                        <button className="flex flex-row gap-4 justify-center items-center w-[197px] bg-[#ffffff] text-[#3C0644] 
                                        border border-[#3C0644] text-base font-medium rounded-sm py-2 text-center">
                                        Buy Course - GH¢200 <span className="text-white"></span>
                                        </button>
                                    </div>
                             </div>
                                    </div>
         </section>
         <section className="bg-[#FFFDF4] md:h-[764px] h-auto  ">
            <div className="flex justify-between py-2 md:px-16">
                <p className="text-[#100B26] md:text-[48px] text-2xl font-bold p-3">
                    Top Courses
                </p>
                <div>
                </div>
                
            </div>
            <div className="slider-container g-2 mb-2 mb-md-5 pt-2 pt-md-5">
                <Slider {...settings}>
           
          
             {
                courses.map(item=>(
                       <div className="flex flex-row justify-start items-center  md:my-20 my-10" key={item.id}>
                        <div className=" course-single-card">
                        <Link   to={`/singleCourses/${item.id}`} style={{textDecoration:"none"}}>
                         <div  className='ms-2 ms-md-4 max-w-sm bg-#FFFDF4 border border-gray-200 rounded-lg shadow md:h-[421.62px] grid grid-rows-[1fr auto]'  >
                          <img  className='rounded-t-lg md:w-[384.51px] md:h-[214.73px] h-[172px]"' src={item.img} />
                        <div className=' p-5 text-start'>
                           <p className='mb-2 md:text-xl md:font-bold text-lg font-medium tracking-tight text-gray-900'>{item.topic}</p>
                        <p className='mb-3 font-normal text-[#5E5D61] text-[17px]' >{item.name}</p>
                          
                         
                        
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
        <section className="md:h-[1880px] bg-[#FFFFFF] md:mx-0 mx-1">
            <div className="flex flex-col md:p-16 gap-4 items-start">
             <p className="text-[#100B26] md:text-[48px] text-2xl font-bold md:pt-0 pt-10">All CTL-Africa Courses</p>
             <p className="text-base font-medium text-[#6E6E6E] md:w-[540px] w-[337px] text-start">Discover Courses Thoughtfully Crafted to Awaken Your Full Potential: Elevating Your Journey to Excellence</p>
             <div className="flex md:flex-row flex-col gap-5 my-10" >
                <input placeholder="Search course" className="md:w-[304px] p-2 border border-[#E9E9E9] rounded-md bg-white" id='all-input' />
                    <select className="md:w-[304px] p-2 border border-[#E9E9E9] rounded-md bg-white" id='all-select'>
                    <option value="">Category</option>
                    <option value="leadership">Leadership</option>
                    <option value="coaching">Coaching</option>
                    <option value="corporative">Corporative</option>
                    <option value="leading">Leading</option>
                    <option value="strategy">Strategy</option>
                    </select>
                    <select className="md:w-[165px] p-2 border border-[#E9E9E9] rounded-md bg-white">
                    <option value="">Duration</option><option value="1:30">1:30</option>
                    <option value="2:30">2:30</option><option value="2:10">2:10</option>
                    </select>
                    <select className="md:w-[165px] p-2 border border-[#E9E9E9] rounded-md bg-white">
                        <option value="">Price</option>
                        <option value="GHC20">GHC 20</option>
                        <option value="GHC50">GHC 50</option>
                        <option value="GHC100">GHC 100</option>
                    </select>
            </div>
             </div>
                <div className=" md:grid md:grid-cols-4 flex flex-col gap-4  md:mx-0 mx-3 md:px-16">
                             {
                                cousList.map(tes=>(
                                     <Link to={`/singleCourses/${tes.id}`} key={tes.id} >
                                        <div   className='max-w-sm bg-#FFFDF4 border border-gray-200 rounded-lg shadow md:h-[421.62px] grid grid-rows-[1fr auto]' id='all-slider'>
                                       <img src={tes.img} className='rounded-t-lg md:w-[384.51px] md:h-[214.73px] h-[172px '/>  
                                       <div className="p-5 text-start items-start ">
                                        <p className='mb-2 md:text-xl text-wrap tracking-normal md:font-bold text-lg font-medium text-start text-gray-900'> 
                                         {
                                            tes.title
                                         }
                                        </p>
                                        <p className='mb-3 font-normal text-[#5E5D61] text-[17px]'> {tes.instruct}</p>
                                       </div>
                                       <p className='px-5 text-lg font-medium text-[#3C0644] underline underline-offset-2 text-start'> {tes.price} </p>
                                    </div>
                                     </ Link>
                                ))
                             }
                                
                </div>
                  <div className="flex justify-end items-end md:m-16 my-5 mx-2">
                    <button className=' next-button rounded-sm text-white p-3 w-[129px]'> Next</button>
                  </div>

        </section>
        <section className=" bg-[url('https://jazzy-llama-392a85.netlify.app/assets/cbanner-415ee6f6.svg')] h-[448px] bg-no-repeat gap-6 bg-cover bg-center flex flex-col justify-center items-center">
            
           <div className="flex flex-col  items-center" id='subscribe'>
           <p className="md:w-[560px]   md:text-[32px] text-[29px] font-bold text-white text-center mb-5 ">Unlock Your Potential with Premium Subscription Plans</p>
            <p className="text-white text-base font-normal md:w-[560px] text-center " id='sub-para'>Access Exclusive Leadership and Mentorship Courses and Books – Your Path to Personal and Professional Growth Awaits</p>
            
           </div>
           <div className="flex items-center">
           <button className="  w-[197px] bg-[#ffffff] text-[#3C0644] border-2 text-base font-medium rounded-sm py-2 text-center">
             Subscribe Today! 
      
            </button>
           </div>
                    
        </section>
        <section className="lg:h-[404px] h-auto bg-[#FFFFFF] pt-10">
            <div className="flex md:flex-row flex-col justify-between gap-5  md:mx-28 mx-2">
                
                <div>
                    <img src="https://jazzy-llama-392a85.netlify.app/assets/logo-ctl-f8b7acd2.png" alt="CTL Africa" className="md:w-[160.78px] md:h-[50px] w-[120px] h-[45px] md:mt-2" loading="lazy" />
                        <ul className="flex gap-4 text-[#2E2E2E] md:py-10 py-5">
                            <li className=" font-medium text-base">
                                <a href="#">About</a> </li>
                                <li className="font-medium text-base">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="font-medium text-base">
                                    <a href="#">Referral Program</a>
                                    </li>
                                <li className="font-medium text-base">
                                <a href="/">Press</a>
                                </li>
                                </ul>
                </div>
                <div>
                 <p className="text-base font-normal text-[#2E2E2E]">
                     Get the latest updates in your inbox!</p>
                   <div className="py-10">
                                        <div className="flex flex-col">
                                            <div className="flex md:gap-10 gap-2">
                                            <input type="email" id="subscribeemail" className="border border-[#E9E9E9] md:w-[296px] w-[199px] p-2 rounded-md"
                                             placeholder="Email Address" />
                                            <button className="bg-[#3C0644] text-white md:w-[180px] w-[118px] p-2 rounded-md ">
                                                Submit
                                            </button>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <hr className="md:mt-20 md:mx-28 "/>
         <div className="flex md:flex-row flex-col justify-between items-center gap-5 md:mt-16 md:mx-28 mx-10  ">
                                                <div className="flex gap-2 text-[#3C0644] my-5">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                                                    viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
                                                    </path>
                                                    </svg>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                                                    viewBox="0 0 1024 1024" className="text-2xl" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94
                                                     336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 
                                                      76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 
                                                      169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 
                                                      82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 
                                                      652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 
                                                      822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 
                                                      62.3-54.4 85.5-88.2z">
                                                        </path>
                                                    </svg>
                                                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" 
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25
                                                         245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 
                                                         55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57
                                                         .78V501C413.31 482.38 504 379.78 504 256z">
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
                                                        <div className="flex gap-4 items-center">
                                                            <p className="font-normal text-base text-[#2E2E2E]">Terms of Service</p>
                                                            <p className="font-normal text-base text-[#2E2E2E] mt-0">Privacy Policy</p>
                                                            </div>
         </div>
        </section>
      </div>
       </main>
     
    </div>
  )
}

export default Courses;