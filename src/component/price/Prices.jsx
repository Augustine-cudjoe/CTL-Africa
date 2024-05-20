import React, {useState,useEffect} from 'react'
import OtherNav from "../../pages/othernav/OtherNav"
import { PiCertificateLight } from "react-icons/pi";

import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import Footer from "../../pages/footer/Footer"
import { Link } from 'react-router-dom';
import "./price.css"

function Prices() {
    const [iconUp,setIconUp]=useState(false)
    const [iconUp1,setIconUp1]=useState(false)
    const [iconUp2,setIconUp2]=useState(false)
    const [iconUp3,setIconUp3]=useState(false)
    const [background, setBackground]=useState(false)
    const [backgroundco, setBackgroundco]=useState(false)
    
    const handleArrow=(arrowNumber)=>{
         switch(arrowNumber){
          case 1:
            setIconUp(!iconUp);
            break;
            case 2:
              setIconUp1(!iconUp1);
              break;
              case 3:
                setIconUp2(!iconUp2);
                break;
            case 4:
            setIconUp3(!iconUp3);
            break;
         }
            
    }
    const changeBackground=(buttonNum)=>{
      switch(buttonNum){
        case 1:
          setBackground(!background);
          
          break;
        case 2:
          setBackgroundco(!backgroundco)
          
          break;
      }
     
     
     
   
    }
  
    useEffect(()=>{
      document.title='prices'
      changeBackground()
     },[])
   
  return (
    <div id='prices' className='max-h-screen overflow-x-hidden'>
        <OtherNav/>
         <main>
         <section className="bg-[url('https://jazzy-llama-392a85.netlify.app/assets/pricingbanner-6e58ce81.png')] bg-cover bg-no-repeat lg:pt-5 md:pt-20  pt-28 pb-2 md:h-[1016px] h-auto flex flex-col  justify-center">
                <div className=" flex flex-col justify-center items-center  md:pt-20 lg:pt-10 mt-20">
                <h1 className="md:text-5xl text-2xl font-bold text-[#111827] mt-0 pt-0">Start learning</h1>
                 <p className="text-base font-normal text-[#6B7280] md:w-[592px] w-[332px] text-center text-wrap">Just straight-forward pricing that aligns with your growth goals.</p>

                  <div className="my-10 ">
                   
                  <div className="flex flex-row justify-center items-center bg-[#F3F4F6] border  p-2 w-[288px] rounded-md gap-5 ">
                   <button onClick={()=>changeBackground(1)}   
                   className={` text-sm font-medium  p-3 rounded-md text-sm transition-all duration-300 
                    ${background? "  bg-white" : "bg-[#F3F4F6] "} ` } >Bill Montly </button>

                     <button onClick={()=>setBackgroundco(2)}  
                      className={`  p-3 rounded-md text-sm font-medium space-x-5 bg-[#F3F4F6] ${backgroundco? "bg-white" : "bg-[#F3F4F6] "}  `} >
                         Bill yearly <span className='bg-[#F0FDF4] text-[#15803D] px-2 py-1 text-sm w-[48px] h-[20px] rounded-full'>-40% </span></button>

                 </div>
                  </div>
                </div>
                <div className=" flex flex-col justify-center items-center  ">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 " id='price-holder'>
                    
                          <div className='md:w-[378.67px] w-[343px] h-auto border shadow-md bg-white rounded-xl p-5 prices-price'>
                               
                               
                               
                              <div className="flex flex-col items-center">
                              <div className='h-[64px] w-[64px] bg-[#F3F4F6] rounded-full flex justify-center items-center'>
                                    <img  className='w-50% text-center '  src='data:image/png;base64,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' />
                             
                                </div>
                                <p className='  text-[#100B26] text-[22px] font-bold'>Coaching Session 
                                </p>
                            <p className='text-[#100B26] text-[22px] font-bold'> GH¢1200 <sub className='opacity-50'>per month</sub> </p> 
                             </div> 
                             <div className='flex flex-col'>
                           
                             
                                <p className='my-5 prices-price-pa border-t border-b md:text-base text-center text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] '>
                                  Aenean at lectus posuere enim id nec.  Molestie neque, sed fusce faucibus.</p>
                               <ul className='space-y-3'>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex justify-start items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start '> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                
                               </ul>
                             
                             <div className="bg-[#FCE8FF] h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg mt-20 price-btn ">
                                 <Link to='/singleprice' className='text-[#3C0644] hover:text-[#3C0644] text-[18px] font-medium no-underline ' id="price-link1"> Sign up</Link>
                             </div>
                             </div>
                          </div>
                          <div className='md:w-[378.67px] w-[343px] h-auto border shadow-md bg-white rounded-xl p-5 prices-price'>
                               
                               
                               
                              <div className="flex flex-col items-center">
                              <div className='h-[64px] w-[64px] bg-[#F3F4F6] rounded-full flex justify-center items-center'>
                                    <img  className='w-50% text-center '  src='data:image/png;base64,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' />
                             
                                </div>
                                <p className='  text-[#100B26] text-[22px] font-bold'>Personal Training
                                </p>
                            <p className='text-[#100B26] text-[22px] font-bold'> GH¢1200 <sub className='opacity-50'>per month</sub> </p> 
                             </div> 
                             <div className='flex flex-col'>
                           
                             
                                <p className='my-5 prices-price-pa border-t border-b md:text-base text-center text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] '>
                                  Aenean at lectus posuere enim id nec.  Molestie neque, sed fusce faucibus.</p>
                               <ul className='space-y-3'>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex justify-start items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start '> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                
                               </ul>
                             
                             <div className="bg-[#FCE8FF] h-[44px] md:w-[330.67px] flex justify-center items-center price-btn  rounded-lg mt-20 ">
                                 <Link to='/singleprice' className='text-[#3C0644] hover:text-[#3C0644] text-[18px] font-medium no-underline ' id="price-link2"> Sign up</Link>
                             </div>
                             </div>
                          </div>
                          <div className='md:w-[378.67px] w-[343px] h-auto border shadow-md bg-white rounded-xl p-5 prices-price'>
                                
                               
                               
                              <div className="flex flex-col items-center">
                              <div className='h-[64px] w-[64px] bg-[#F3F4F6] rounded-full flex justify-center items-center'>
                                    <img  className='w-50% text-center flex items-center  '  src='data:image/png;base64,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' />
                             
                                </div>
                                <p className='  text-[#100B26] text-[22px] font-bold'>Corporate Training
                                </p>
                            <p className='text-[#100B26] text-[22px] font-bold'> Custom  </p> 
                             </div> 
                             <div className='flex flex-col'>
                           
                             
                                <p className='my-5 border-t border-b md:text-base text-center text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] prices-price-pa'>
                                  Aenean at lectus posuere enim id nec.  Molestie neque, sed fusce faucibus.</p>
                               <ul className='space-y-3'>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex justify-start items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start '> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                <li className='mb-3 flex items-start gap-4'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-check-circle text-[#22C55E] text-3x" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                 </svg>
                                    <p className='text-[#100B26] text-base font-normal text-start'> Tortor interdum condimentum nunc  molestie quam lectus.</p>
                                </li>
                                
                               </ul>
                             
                             <div className="bg-[#FCE8FF] h-[44px] md:w-[330.67px] flex justify-center items-center price-btn rounded-lg mt-20 ">
                                 <Link to='/singleprice' className='text-[#3C0644] hover:text-[#3C0644] text-[18px] font-medium no-underline ' id="price-link"> Sign up</Link>
                             </div>
                              </div>
                          </div>
                            
                         
                    

                </div>
               </div>
               
        </section>
        <section className='md:h-[567px] h-auto bg-white md:p-40 p-5 md:mt-48 prices-icon-holder'>
          <div className="flex items-center">
            <h5 className=' font-bold md:text-[28px] text-2xl  text-[#000000] md:text-start text-center'>Enjoy these privileges on all of the above plans</h5>
          
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:my-20 my-10 content-center ">
             <div className=" flex flex-col items-start   justify-center md:h-[197px] md:w-[324px] prices-icon-content ">
                    <div className="icon-holdr bg-[#FEF5FF] h-[90px] w-[90px] rounded-full flex justify-center items-center">
                            <p className='bg-[#FCE8FF] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
                               <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                             className="text-4xl access-icons   " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"></path></svg></p>
                        </div>
                        <div className="content mt-5 text-start">
                        <h4 className='text-[#000000] font-bold text-2xl '>Unlimited library access</h4>
                        <p className='text-[#6B7280] font-normal text-base'>Access all course materials and videos offered by professional at CTL-Africa</p>
                   
                        </div>
             </div>
              <div className=" flex flex-col items-start   justify-center md:h-[197px] md:w-[324px] prices-icon-content">
                        <div className="img-holder  bg-[#FEF5FF] h-[90px] w-[90px] rounded-full flex justify-center items-center">
                           <p className='bg-[#FCE8FF] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
                             <PiCertificateLight className='text-4xl w-[1em] h-[1em]'/> 
                             
                             </p>
                        </div>
                        <div className="content mt-5 text-start">
                        <h4 className='text-[#000000] font-bold text-2xl'>Certificate of completion</h4>
                        <p className='text-[#6B7280] font-normal text-base'>Stand out by earning certificates you can share on your resume, LinkedIn and CV</p>
                   
                        </div>
              </div>
              <div className=" flex flex-col  items-start   justify-center md:h-[197px] md:w-[324px] prices-icon-content ">
                      
                       <div className='p-2'>
                       <div className="img-holder bg-[#FEF5FF] h-[90px] w-[90px] rounded-full flex justify-center items-center ">
                               <div  className='bg-[#FCE8FF] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                           viewBox="0 0 256 256" className="text-4xl " height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,
                              65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,
                              0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z">
                                </path>
                                </svg>
                             
                             </div>
                      </div>
                       </div>
                        
                        <div className="content text-start mt-4">
                        <h4 className='text-[#000000] font-bold text-2xl'>Networking Opportunities</h4>
                        <p className='text-[#6B7280] font-normal text-base'>Gain access to exclusive networking groups or forums, connecting them with peers and professionals in their field.</p>
                   
                        </div>
                      
              </div>
          </div>
        </section>
        <section className='md:h-[567px] h-auto bg-white md:px-40 pt-20'>
            <div className="privilage-header  flex items-center  justify-center">
            <h6 className='font-bold md:text-[28px] text-xl text-[#000000] text-center'>Frequently Asked Questions </h6>
          
            </div>
            <div className="flex flex-col items-center justify-center my-8 space-y-3 ">
                   <details className='rounded-lg md:w-[611px] w-[346px]'>
                   <summary  className='flex items-center justify-between p-4 cursor-pointer bg-[#F5F5F7]'
                    onClick={()=> handleArrow(1)}>Topic  {
                    !iconUp ? ( <RiArrowDropUpLine className='text-2xl font-semibold' size={30}/>):(<RiArrowDropDownLine className='text-2xl font-semibold' size={30}/>)
                       }</summary>
                       <p className='p-4 bg-[#F5F5F7] my-1 text-[16px] font-normal text-[#111827] text-start' > Magna in dictumst metus vel ultrices sapien vel nisi. Diam vulputate aliquet urna aliquet sodales diam elit. Et volutpat est tristique et lacus id eu nunc.</p>
                        
                      

                   </details>
                   <details className='rounded-lg md:w-[611px] w-[346px]'>
                   <summary  className='flex items-center justify-between p-4 cursor-pointer bg-[#F5F5F7]'
                    onClick={()=> handleArrow(2)}>Topic  {
                    !iconUp1 ? ( <RiArrowDropUpLine className='text-2xl font-semibold' size={30}/>):(<RiArrowDropDownLine className='text-2xl font-semibold' size={30}/>)
                       }</summary>
                       <p className='p-4 bg-[#F5F5F7] my-1 text-[16px] font-normal text-[#111827] text-start' > Magna in dictumst metus vel ultrices sapien vel nisi. Diam vulputate aliquet urna aliquet sodales diam elit. Et volutpat est tristique et lacus id eu nunc.</p>
                        
                      

                   </details>
                   <details className='rounded-lg md:w-[611px] w-[346px]'>
                   <summary  className='flex items-center justify-between p-4 cursor-pointer bg-[#F5F5F7]'
                    onClick={()=> handleArrow(3)}>Topic  {
                    !iconUp2 ? ( <RiArrowDropUpLine className='text-2xl font-semibold' size={30}/>):(<RiArrowDropDownLine className='text-2xl font-semibold' size={30}/>)
                       }</summary>
                       <p className='p-4 bg-[#F5F5F7] my-1 text-[16px] font-normal text-[#111827] text-start' > Magna in dictumst metus vel ultrices sapien vel nisi. Diam vulputate aliquet urna aliquet sodales diam elit. Et volutpat est tristique et lacus id eu nunc.</p>
                        
                      

                   </details>
                   <details className='rounded-lg md:w-[611px] w-[346px]'>
                   <summary  className='flex items-center justify-between p-4 cursor-pointer bg-[#F5F5F7]'
                    onClick={()=> handleArrow(4)}>Topic  {
                    !iconUp3 ? ( <RiArrowDropUpLine className='text-2xl font-semibold' size={30}/>):(<RiArrowDropDownLine className='text-2xl font-semibold' size={30}/>)
                       }</summary>
                       <p className='p-4 bg-[#F5F5F7] my-1 text-[16px] font-normal text-[#111827] text-start' > Magna in dictumst metus vel ultrices sapien vel nisi. Diam vulputate aliquet urna aliquet sodales diam elit. Et volutpat est tristique et lacus id eu nunc.</p>
                        
                      

                   </details>
                   
                  
                   
                  </div>
        </section>
         </main>
         <Footer/>
    </div>
  )
}

export default Prices;