import React,{useEffect} from 'react'
import OtherNav from "../othernav/OtherNav"
import Footer from "../footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./singleevent.css"
function SingleEvent() {
    const items=[
        {
            "id": 0,
            "text":"Attending the leadership event was an eye-opening experience. I learned valuable insights into effective leadership strategies and connected with inspiring individuals. Highly recommended!",
            "name":"Joy Abeyie",
             "job":"Helper",
            "img": "https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
        },
    
        {
            "id": 1,
            "text":"Attending the leadership event was an eye-opening experience. I learned valuable insights into effective leadership strategies and connected with inspiring individuals. Highly recommended!",
            "name":"Jocab Jones",
            "job":"Content creator",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
        },
    
        {
            "id": 2,
            "text":"Attending the leadership event was an eye-opening experience. I learned valuable insights into effective leadership strategies and connected with inspiring individuals. Highly recommended!",
           "name":"Guy Hawkins",
            "job":"Student",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
        },
    
        {
            "id": 3,
            "text":"Attending the leadership event was an eye-opening experience. I learned valuable insights into effective leadership strategies and connected with inspiring individuals. Highly recommended!",
             "name":"Esther Haword",
            "job":"investor",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg3-76299414.png"
        },
        {
            "id": 4,
            "text":"Attending the leadership event was an eye-opening experience. I learned valuable insights into effective leadership strategies and connected with inspiring individuals. Highly recommended!",
            "name":"Kebs Water",
            "job":"Banker",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg1-c99dbada.png"
        },
        {
            "id": 5,
            "text":"Attending the leadership event was an eye-opening experience. I learned valuable insights into effective leadership strategies and connected with inspiring individuals. Highly recommended!",
            "name":"Sammi Tang",
            "job":"Sponsor",
            "img":"https://jazzy-llama-392a85.netlify.app/assets/testimg2-1cdcc2ce.png"
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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                
                initialSlide: 2
              }
            }
            
          ]
      };
      useEffect(()=>{
        document.title='singleEvent'
       },[])
  return (
    <div className='singleEvent max-h-screen' >
     <OtherNav/>
      <div className="min-h-screen overflow-x-hidden">
        <main className=''>
            <section className="bg-[url('https://jazzy-llama-392a85.netlify.app/assets/eventbanner-a1a8edff.png')]  min-h-screen md:pt-20  pb-2  bg-no-repeat 
      bg-cover bg-center flex flex-col justify-center items-center  ">
            <div className="flex flex-col justify-center items-center md:gap-10 gap-3 ">
               <div className="event-content-holder">
                 <div className=' flex flex-row justify-center items-center md:gap-10 gap-3'>
                 <div className='flex items-center gap-2'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="1em"
                 height="1em" fill="currentColor" 
               className="bi bi-calendar2-minus text-white md:text-xl text-base" 
               viewBox="0 0 16 16">
              <path d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
               </svg> 
                <p className='text-white md:text-xl text-base font-semibold'>   21 - 24 Sept. </p>
               

                                                         
               </div>
               <div className='flex items-center gap-2 '>
               
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-geo-alt text-white md:text-xl text-base" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                 <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg>
                    <p className='text-white md:text-xl text-base font-semibold'>   National Theatre , Accra </p>
                
                </div>
                 </div>
              <h1 className="single-header text-white md:text-[48px] text-3xl font-medium text-center my-10">Leadership Excellence Summit</h1>
               </div>
              <div className="flex text-center  justify-center items-center single-event-button gap-5 my-7 ">
                <button className='w-[134px] p-2 border border-[#3C0644] bg-[#3C0644] text-white rounded-md text-base font-normal'> Buy Tickets</button>
                <button className='w-[134px] p-2 border border-[#3C0644] text-white rounded-md text-base font-normal'> Read More</button>
              </div>
             </div>
            </section>
            <section className=' min-h-screen'>
            <div className="about-single-event-holder  my-10 md:px-10">
                <div className="md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center " id='hood'>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-5" id='left-sec'>
                        <div className="img-holder flex md:flex-row flex-col items-center gap-10 " id='singleevent-sec'>
                            <div className="space-y-4 flex  flex-col md:justify-start md:items-center gap-20">
                               
                                    <div className="about-left-img-holder bg-[#D9D9D9] h-[214px] md:w-[232px] w-[332px] rounded-lg ">
                                        <img className="h-[300px] w-full left-img-holder " src='https://jazzy-llama-392a85.netlify.app/assets/evimg02-6df2b3e9.png' />
                                    </div>
                                    <div className='bg-[#D9D9D9] h-[300px] md:w-[232px] w-[332px] rounded-lg about-left-img-holder'>
                                    <img className="h-[300px] w-full left-img-holder " src='https://jazzy-llama-392a85.netlify.app/assets/evimg03-6582d6bd.png' />
                                    
                                     </div>
                               
                              
                            </div>
                            <div className=" flex md:justify-start md:items-center">
                              <div className='bg-[#D9D9D9] h-[545px] md:w-[232px] w-[332px] rounded-lg about-left-img-holder '>
                              <img className='h-[545px] w-full  right-img-holder ' src='https://jazzy-llama-392a85.netlify.app/assets/evimg01-fa28e1eb.png'/>
                            
                              </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-3 " id='single-sec'>
                        <div className="about-event-right-holder space-y-5">
                            <h6 className='md:w-[590px] text-[#3C0644] text-base font-medium md:text-start'>About Event</h6>
                            <p className='md:w-[590px] text-[#2E2E2E] md:text-4xl text-xl font-medium text-start '>Leadership Excellence Summit</p>
                            <p className="event-details text-base text-[#6E6E6E] font-normal md:w-[599px] w-full text-start ">Are you ready to take your business to the next level? Our comprehensive course on scaling up provides you with the strategies, insights, and tools needed to drive substantial growth and expansion. From optimizing operations and leveraging technology to expanding your market reach and developing a high-performance team</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            </section>
            <section className='my-10 h-full flex flex-col justify-center items-center gap-5 md:mx-12'>
            <div className="speakers-holder  space-y-5 ">
                <div className="speakers-header flex flex-col justify-center items-center">
                    <h6 className='text-[#3C0644] text-base font-medium text-center'> Our Speakers</h6>
                    <p className='text-[#100B26] md:text-[40px] text-3xl font-semibold text-center'>Our Expert Speakers</p>
                </div>
                <div className="speakers-content">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                           <div className="speaker-img-holder flex flex-col space-y-2">
                              <div className="img-cover">
                                <img className='h-[314px] w-[308px]' src='https://jazzy-llama-392a85.netlify.app/assets/exp01-27d66a95.png'/>
                              </div>
                              <div className=" flex flex-col items-start ">
                                 <p className='text-[#000000] font-semibold text-xl' >Skylar Carder  </p>
                                 <p className='text-[#6E6E6E] text-base font-medium'>CEO at Logitech</p>
                                
                              </div>
                            </div>
                            <div className="speaker-img-holder flex flex-col space-y-2">
                              <div className="img-cover">
                                <img className='h-[314px] w-[308px]' src='https://jazzy-llama-392a85.netlify.app/assets/exp02-9f96bd0c.png'/>
                              </div>
                              <div className="profile flex flex-col items-start">
                                 <p  className='text-[#000000] font-semibold text-xl'>Zaire Workman </p>
                                 <p className='text-[#6E6E6E] text-base font-medium'>CEO at Benq</p>
                                
                              </div>
                            </div>
                            <div className="speaker-img-holder flex flex-col space-y-2">
                              <div className="img-cover">
                                <img className='h-[314px] w-[308px]' src='https://jazzy-llama-392a85.netlify.app/assets/exp03-34c65b44.png'/>
                              </div>
                              <div className="profile flex flex-col items-start ">
                                 <p className='text-[#000000] font-semibold text-xl' >Martin Lubin  </p>
                                 <p className='text-[#6E6E6E] text-base font-medium'>CTO at SVGA</p>
                                
                              </div>
                            </div>
                            <div className="speaker-img-holder flex flex-col space-y-2">
                              <div className="img-cover">
                                <img className='h-[314px] w-[308px]' src='https://jazzy-llama-392a85.netlify.app/assets/exp04-c71e90e4.png'/>
                              
                              </div>
                              <div className=" flex flex-col items-start ">
                                 <p className='text-[#000000] font-semibold text-xl text-start  ' >Gretchen Dorwart  </p>
                                 <p className='text-[#6E6E6E] text-base font-medium '>COE at Bliss</p>
                                
                              </div>
                              
                            </div>
                    </div>
                </div>
            </div>
            </section>
            <section className=' bg-[#F6F6F6] py-10 md:px-0 px-7 h-full flex flex-col justify-center items-center gap-5'>
               <div className="agenda-header-holder">
             <h6 className="text-[#3C0644] text-base font-medium text-center">Agenda</h6>
             <h1 className="conference text-[#100B26] md:text-[40px] text-2xl font-semibold text-center">Conference Schedule</h1>
             <div className=" agenda-list md:grid grid-cols-1 md:grid-cols-4 gap-3 flex flex-col justify-center items-center  mt-10">
             <div className='first-day  bg-[#3C0644] h-[67px] w-[223.75px]  flex flex-col justify-center items-center border-2 border-[#3C0644]  ' > 
                <p className='text-white text-xl font-semibold'>  Day 1 </p> 
                <p className='text-white text-xs font-semibold '>   Sept 21, 2023 </p>

             </div>
               <div className="col-span-3 flex flex-col md:flex-row justify-between gap-3">
               <div  className='second-day bg-[#FFFFFF] h-[67px] w-[223.75px]  flex flex-col justify-center border-4 border-solid border-[#FFFFFF] '> 
             
             <p className='ext-[#2E2E2E] text-xl font-semibold '>  Day 2</p>
             <p className="text-[#6E6E6E] text-xs font-semibold">  Sept 21, 2023</p>
            
            </div>
            <div  className='second-day bg-[#FFFFFF] h-[67px] w-[223.75px]  flex flex-col justify-center border-4 border-solid border-[#FFFFFF] '> 
            
             <p className='ext-[#2E2E2E] text-xl font-semibold '>  Day 3</p>
             <p className="text-[#6E6E6E] text-xs font-semibold">  Sept 21, 2023</p>
            
            </div>
            <div  className='second-day bg-[#FFFFFF] h-[67px] w-[223.75px]  flex flex-col justify-center border-4 border-solid border-[#FFFFFF] '> 
            
             <p className='ext-[#2E2E2E] text-xl font-semibold '>  Day 4</p>
             <p className="text-[#6E6E6E] text-xs font-semibold">  Sept 21, 2023</p>
            
            </div>
               </div>
             </div>
              </div>
              <div className="space-y-7">
              <div className="flex flex-col justify-center items-center my-4 space-y-5">
                <div className="">
                <h4 className=' text-[#2E2E2E] text-center text-2xl font-medium'> September 21, 2023</h4>
             <p className="text-[#6E6E6E] text-center">Welcome to the future of social media which is already the here and now.</p>
            
                </div>
               <div className="space-y-7 flex flex-col justify-center items-center" id='agenda-card-hold '>
               <div className='md:w-[817px] w-full  md:h-[303px] bg-white border border-[#E9E9E9] p-5 grid grid-cols-3 gap-5' id='agenda-card'>
                   <div className="img-holder  border-r space-y-10 flex flex-col justify-center items-center ">
                        <img className=' img-fluid rounded' src='https://jazzy-llama-392a85.netlify.app/assets/evproimg01-37011f24.png'/>
                        <p className='img-holder-name  text-[#000000] font-semibold md:text-xl text-lg pr-2'>Zaire Workman</p>
                  
                    </div>
                    <div className="col-span-2 space-y-5 ">
                      <div className='flex justify-between items-center'>
                      <p className="text-[#2E2E2E] text-base font-medium text-start">Sept 21, 2023 10:00AM </p>
                      <p className=' w-[50px] h-[38px] bg-[#3C0644]  text-white flex items-center justify-center   h-[40px]'> Day 1</p>
                      </div>
                      <div className="space-y-7">
                      <h4 className='text-[#2E2E2E] text-start text-xl font-semibold'> Conference Opening</h4>
                      <p className="text-start text-[#6E6E6E] md:text-base text-sm font-medium">
                        Discover the forefront of innovation as you explore an extensive array of cutting-edge products, services, and solutions from industry-leading companies.</p>
                    <div className=" flex justify-start items-start">
                        <button  href="#" className='w-[109px] h-[40px] bg-[#3C0644] rounded-md  text-white'> Join Event</button>
                    </div>
                      </div>
                    </div>
               </div>
               <div className='md:w-[817px] w-full  md:h-[303px] bg-white border border-[#E9E9E9] p-5 grid grid-cols-3 gap-5' id='agenda-card2'>
                   <div className="img-holder  border-r space-y-10 flex flex-col justify-center items-center ">
                        <img className=' img-fluid rounded' src='https://jazzy-llama-392a85.netlify.app/assets/evproimg02-cc3d9886.png'/>
                        <p className='img-holder-name  text-[#000000] font-semibold md:text-xl text-lg pr-2'>Skylar Carder</p>
                  
                    </div>
                    <div className="col-span-2 space-y-5 ">
                      <div className='flex justify-between items-center'>
                      <p className="text-[#2E2E2E] text-base font-medium text-start">Sept 21, 2023 10:00AM </p>
                      <p className=' w-[50px] h-[38px] bg-[#3C0644]  text-white  h-[40px] flex items-center justify-center  '> Day 1</p>
                      </div>
                      <div className="space-y-7">
                      <h4 className='text-[#2E2E2E] text-start text-xl font-semibold'> Conference Opening</h4>
                      <p className="text-start text-[#6E6E6E] md:text-base text-sm font-medium">
                        Discover the forefront of innovation as you explore an extensive array of cutting-edge products, services, and solutions from industry-leading companies.</p>
                    <div className=" flex justify-start items-start">
                        <button  href="#" className='w-[109px] h-[40px] bg-[#3C0644] rounded-md  text-white'> Join Event</button>
                    </div>
                      </div>
                    </div>
               </div>
               <div className='md:w-[817px] w-full  md:h-[303px] bg-white border border-[#E9E9E9] p-5 grid grid-cols-3 gap-5' id='agenda-card3'>
                   <div className="img-holder  border-r space-y-10 flex flex-col justify-center items-center ">
                        <img className=' img-fluid rounded' src='https://jazzy-llama-392a85.netlify.app/assets/evproimg03-048b3cbe.png'/>
                        <p className='img-holder-name  text-[#000000] font-semibold md:text-xl text-lg pr-2'>Gretchen Dorwart</p>
                  
                    </div>
                    <div className="col-span-2  space-y-5 ">
                      <div className='flex justify-between  items-center'>
                      <p className="text-[#2E2E2E] text-base font-medium text-start">Sept 21, 2023 10:00AM </p>
                      <p className=' w-[50px] md:h-[38px] bg-[#3C0644] h-[40px] flex items-center justify-center   text-white'> Day 1</p>
                      </div>
                      <div className="space-y-7">
                      <h4 className='text-[#2E2E2E] text-start text-xl font-semibold'> Conference Opening</h4>
                      <p className="text-start text-[#6E6E6E] md:text-base text-sm font-medium">
                        Discover the forefront of innovation as you explore an extensive array of cutting-edge products, services, and solutions from industry-leading companies.</p>
                    <div className=" flex justify-start items-start">
                        <button  href="#" className='w-[109px] h-[40px] bg-[#3C0644] rounded-md  text-white'> Join Event</button>
                    </div>
                      </div>
                    </div>
               </div>
               
             
             
               </div>
           </div>
              </div>
            </section>
            <section className='bg-[#200624] md:max-h-screen py-20  gap-5'>
            <div className="single-testimonie-header flex flex-col justify-center items-center">
                <p className='text-[#fff] text-base font-medium text-center'>Testimonial</p>
                <h1 className='text-[#fff] md:text-[40px] text-3xl font-semibold text-center'>What Attendees Say</h1>
             </div>
             <div className="md:my-20 my-10 ml-10 ">
             <Slider {...settings} >
                {
                     items.map(item=>(
                        <div className="grid grid-cols-4 gap-5 " key={item.id}>
                            
                       <div className='gap-5 md:space-y-10 space-y-6 md:w-[90%] w-[90%] md:h-[50%] h-[100%] md:p-4 p-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center z-0 ' key={item.id} >
                          
                           <div className="  " >
                           <div className="flex justify-start items-center mt-2 md:mt-4 mb-2 gap-5">
                             <p className=''> <img src={item.img} className='md:w-[74px] md:h-[74px] w-[41.78px] h-[41.78px] ' alt='...'/> </p>
                             <div className=' flex flex-col gap-1 jistify-start items-start'>
                             <p className='md:text-xl text-[11.29px] font-medium' > {item.name}</p>
                             <p className='text-xs font-medium text-[#6E6E6E]'> {item.job}</p>
                             </div>
                            </div>
                           <p className=' md:text-base text-[15.03px] font-normal z-50 text-start'>{item.text}</p> 
                           
                           
                         </div>
                         
                       </div >
                       
                     </div>
                 ))
                }
             </Slider>
           </div>
            </section>
            <section className='flex md:flex-row flex-col  justify-center items-center gap-5 py-10 bg-white'>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 event-price-list">
                    
                    <div className='md:w-[378.67px] w-[343px] h-auto border shadow-md bg-white rounded-xl p-5 single-event-prices'>
                         
                         
                         
                        <div className="flex flex-col items-center">
                        
                          <p className='  text-[#100B26] text-[22px] font-bold'>Standard
                          </p>
                      <p className='text-[#100B26] text-[22px] font-bold'> GH¢1200  </p> 
                       </div> 
                       <div className='flex flex-col'>
                     
                       
                          <p className='my-5 border-t border-b md:text-base text-center text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] price-des'>
                            Aenean at lectus posuere enim id nec.  Molestie neque, sed fusce faucibus.</p>
                         <ul className='space-y-3'>
                          <li className='mb-3 flex items-start gap-4 '> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start'>  2-day live conference access</p>
                          </li>
                          <li className='mb-3 flex items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start'>20+ hours of content</p>
                          </li>
                          <li className='mb-3 flex justify-start items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                            <p className='text-[#100B26] text-base font-normal text-start '> 1 week replay access</p>
                          </li>
                         
                          
                         </ul>
                       
                       <div className="bg-[#FCE8FF] price-but h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg mt-20 ">
                           <a href='/singleprice' className='text-[#3C0644] text-[18px] font-medium'> Sign up</a>
                       </div>
                       </div>
                    </div>
                    <div className='md:w-[378.67px] w-[343px] h-auto border shadow-md bg-white rounded-xl p-5 single-event-prices'>
                         
                         
                         
                        <div className="flex flex-col items-center">
                        
                          <p className='  text-[#100B26] text-[22px] font-bold'>Premium
                          </p>
                      <p className='text-[#100B26] text-[22px] font-bold'> GH¢1800  </p> 
                       </div> 
                       <div className='flex flex-col'>
                     
                       
                          <p className='my-5 price-des border-t border-b md:text-base text-center text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] '>
                            Aenean at lectus posuere enim id nec.  Molestie neque, sed fusce faucibus.</p>
                         
                            <ul className='space-y-3'>
                          <li className='mb-3 flex items-start gap-4 '> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start'>Everything in standard</p>
                          </li>
                          <li className='mb-3 flex items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start'>12 marketing workshos</p>
                          </li>
                          <li className='mb-3 flex justify-start items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start '> 1 hour live mentoring session</p>
                          </li>
                          <li className='mb-3 flex justify-start items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start '>Priority on Q&A session</p>
                          </li>
                         
                          
                         </ul>
                       <div className="bg-[#FCE8FF] price-but h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg mt-20 ">
                           <a href='/singleprice' className='text-[#3C0644] text-[18px] font-medium'> Sign up</a>
                       </div>
                       </div>
                    </div>
                    <div className='md:w-[378.67px] w-[343px] h-auto border shadow-md bg-white rounded-xl p-5 single-event-prices'>
                          
                         
                         
                        <div className="flex flex-col items-center">
                        
                          <p className='  text-[#100B26] text-[22px] font-bold'>Deluxe
                          </p>
                      <p className='text-[#100B26] text-[22px] font-bold'> GH¢1800 </p> 
                       </div> 
                       <div className='flex flex-col'>
                     
                       
                          <p className='my-5 price-des border-t border-b md:text-base text-center text-sm font-medium text-[#5E5D61] py-2 md:w-[320.67px] '>
                            Aenean at lectus posuere enim id nec.  Molestie neque, sed fusce faucibus.</p>
                            <ul className='space-y-3'>
                          <li className='mb-3 flex items-start gap-4 '> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start'>Everything in Premium</p>
                          </li>
                          <li className='mb-3 flex items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start'>Free t-shirt & stickers</p>
                          </li>
                          <li className='mb-3 flex justify-start items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start '> Access to talks slides</p>
                          </li>
                          <li className='mb-3 flex justify-start items-start gap-4'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle bg-[#22C55E] text-white rounded-full text-2xl" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                           </svg>
                              <p className='text-[#100B26] text-base font-normal text-start '>Unlimited replay access</p>
                          </li>
                         
                          
                         </ul>
                       
                       <div className="bg-[#FCE8FF] h-[44px] md:w-[330.67px] flex justify-center items-center  rounded-lg mt-20  price-but">
                           <a href='/singleprice' className='text-[#3C0644] text-[18px] font-medium'> Sign up</a>
                       </div>
                        </div>
                    </div>
                      
                   
              

          </div>
            </section>
            <section className='bg-[#F6F6F6] md:h-[383px] h-full flex flex-col justify-center items-center gap-5 py-10'>
            <div className="flex flex-col justify-center items-center ">
                <h6 className='text-[#3C0644] text-base font-medium text-center'>Our sponsor</h6>
                <h1 className='text-[#100B26] md:text-[40px] text-3xl font-semibold'>General Sponsors</h1>
                <div className="sponsor-holder grid grid-cols-2  md:flex md:flex-row md:justify-center md:items-center gap-16 my-5 ">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="text-4xl  text-[#ADADAD] " height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0A12 12 0 0 0 0 12A12 12 0 0 0 12 24A12 12 0 0 0 24 12A12 12 0 0 0 12 0M16.25 1.12C16.57 1.12 16.9 1.15 17.11 1.22C14.94 1.67 13.21 3.69 13.22 6C13.22 6.05 13.22 6.11 13.23 6.17C16.87 7.06 18.5 9.25 18.5 12.28C18.54 15.31 16.14 18.64 12.09 18.65C8.82 18.66 5.41 15.86 5.39 11.37C5.38 8.4 7 5.54 9.04 3.85C11.04 2.19 13.77 1.13 16.25 1.12Z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-4xl  text-[#ADADAD]"  height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-4xl  text-[#ADADAD]"  height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="M11.454 17.021c.048.041.1.082.151.122a6.173 6.173 0 0 1-3.42 1.03A6.17 6.17 0 0 1 2.01 12a6.175 6.175 0 0 1 9.592-5.144c-.05.043-.1.082-.138.126A6.633 6.633 0 0 0 9.166 12c0 1.925.833 3.755 2.288 5.021zm4.361-11.195a6.14 6.14 0 0 0-3.416 1.03c.049.043.099.082.137.126 1.462 1.263 2.299 3.094 2.299 5.018s-.835 3.753-2.288 5.021c-.049.041-.101.082-.151.122a6.162 6.162 0 0 0 3.418 1.03 6.174 6.174 0 1 0 .001-12.347zM12 7.15A6.152 6.152 0 0 0 9.644 12 6.15 6.15 0 0 0 12 16.853 6.157 6.157 0 0 0 14.357 12 6.15 6.15 0 0 0 12 7.15z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-4xl  text-[#ADADAD]"  height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-4xl  text-[#ADADAD]"  height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 40 16" className="text-4xl  text-[#ADADAD]"  height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="M5.375 2.647c0.003-0.014 0.005-0.023 0.006-0.028l0.016-0.118-0.74-0.004c-0.668-0.004-0.873 0-0.891 0.017-0.009 0.008-0.24 0.885-0.651 2.473-0.196 0.758-0.361 1.363-0.367 1.345s-0.24-0.883-0.522-1.922c-0.281-1.039-0.517-1.894-0.524-1.901-0.010-0.010-0.906-0.014-1.632-0.008-0.105 0.001-0.164-0.205 0.938 3.299 0.152 0.485 0.381 1.172 0.507 1.526 0.146 0.408 0.25 0.724 0.321 0.987 0.126 0.501 0.13 0.815 0.103 1.182-0.032 0.423-0.036 3.413-0.005 3.463 0.024 0.038 1.425 0.056 1.558 0.020 0.021-0.006 0.035-0.026 0.045-0.139 0.033-0.097 0.036-0.484 0.036-2.090v-2.051l0.090-0.283c0.059-0.185 0.206-0.672 0.328-1.082s0.269-0.9 0.327-1.090c0.529-1.724 1.033-3.419 1.047-3.516l0.011-0.079z"></path><path d="M13.221 5.135l-0 0.107-0.017 0-0.009 2.953-0.009 2.863-0.229 0.233c-0.257 0.261-0.462 0.361-0.648 0.314-0.203-0.051-0.197 0.028-0.214-3.356l-0.016-3.115h-1.474v0.107h-0.017v3.38c0 3.621-0 3.619 0.184 3.982 0.146 0.29 0.36 0.431 0.725 0.479h0c0.481 0.064 1-0.154 1.481-0.622l0.209-0.203v0.351c0 0.303 0.009 0.353 0.064 0.368 0.090 0.025 1.206 0.027 1.326 0.002l0.1-0.021v-0.104l0.017-0.003v-7.736l-1.472 0.020z"></path><path d="M9.483 6.661c-0.14-0.599-0.401-1.002-0.832-1.28-0.676-0.437-1.449-0.484-2.165-0.13-0.522 0.258-0.859 0.686-1.032 1.314-0.021 0.075-0.036 0.138-0.047 0.231-0.044 0.222-0.049 0.552-0.061 2.093-0.018 2.374 0.010 2.656 0.307 3.195 0.292 0.529 0.897 0.917 1.556 0.997 0.198 0.024 0.6-0.013 0.832-0.078 0.525-0.146 1.029-0.561 1.252-1.032 0.096-0.204 0.154-0.345 0.189-0.604 0.065-0.353 0.070-0.925 0.070-2.381-0-1.857-0.006-2.060-0.068-2.326zM7.802 11.5c-0.124 0.094-0.34 0.135-0.515 0.098-0.135-0.029-0.318-0.241-0.374-0.434-0.070-0.241-0.075-3.594-0.015-4.251 0.1-0.329 0.378-0.501 0.682-0.419 0.237 0.064 0.358 0.212 0.427 0.523 0.051 0.231 0.057 0.518 0.046 2.207-0.007 1.12-0.011 1.668-0.048 1.962-0.037 0.185-0.099 0.235-0.203 0.315z"></path><path d="M35.944 8.346h0.712l-0.011-0.645c-0.011-0.592-0.020-0.659-0.099-0.82-0.125-0.253-0.309-0.366-0.601-0.366-0.351 0-0.573 0.17-0.678 0.518-0.045 0.148-0.092 1.167-0.058 1.255 0.019 0.049 0.121 0.058 0.735 0.058z"></path><path d="M31.184 6.879c-0.095-0.191-0.272-0.286-0.477-0.278-0.16 0.006-0.337 0.073-0.508 0.203l-0.127 0.097v4.634l0.127 0.097c0.288 0.22 0.604 0.266 0.822 0.12 0.086-0.058 0.142-0.137 0.186-0.263 0.057-0.164 0.062-0.375 0.055-2.325-0.008-2.032-0.012-2.152-0.078-2.285z"></path><path d="M40.014 4.791c-0.142-1.701-0.255-2.253-0.605-2.962-0.465-0.939-1.136-1.434-2.092-1.543-0.739-0.084-3.521-0.203-6.094-0.26-4.456-0.099-11.782 0.092-12.718 0.331-0.432 0.111-0.757 0.299-1.094 0.634-0.591 0.588-0.944 1.432-1.085 2.6-0.323 2.666-0.33 5.886-0.019 8.649 0.134 1.188 0.41 1.96 0.928 2.596 0.323 0.397 0.881 0.734 1.379 0.835 0.35 0.071 2.1 0.169 4.65 0.26 0.38 0.014 1.385 0.037 2.235 0.052 1.77 0.031 5.025 0.013 6.886-0.039 1.252-0.035 3.534-0.128 3.961-0.161 0.12-0.009 0.398-0.027 0.618-0.039 0.739-0.042 1.209-0.196 1.65-0.543 0.571-0.449 1.013-1.278 1.2-2.251 0.177-0.92 0.295-2.559 0.319-4.42 0.020-1.555-0.007-2.393-0.119-3.741zM22.27 4.175l-0.828 0.010-0.036 8.83-0.718 0.009c-0.555 0.008-0.724-0.001-0.737-0.036-0.010-0.025-0.021-2.016-0.026-4.424l-0.009-4.379-1.617-0.020v-1.38l4.779 0.019 0.020 1.36-0.828 0.010zM27.347 9.236v3.797h-1.308v-0.4c0-0.301-0.011-0.4-0.047-0.4-0.026 0-0.144 0.099-0.263 0.22-0.259 0.263-0.565 0.474-0.827 0.572-0.542 0.203-1.056 0.084-1.275-0.293-0.201-0.345-0.204-0.423-0.204-4.005v-3.29h1.307l0.010 3.098c0.010 3.044 0.011 3.1 0.084 3.224 0.097 0.164 0.244 0.209 0.478 0.144 0.138-0.038 0.232-0.105 0.455-0.327l0.282-0.28v-5.859h1.308v3.797zM32.449 12.491c-0.115 0.257-0.372 0.508-0.583 0.57-0.549 0.162-0.99 0.030-1.499-0.449-0.158-0.149-0.305-0.269-0.327-0.269-0.027 0-0.041 0.116-0.041 0.345v0.345h-1.308v-10.248h1.308v1.672c0 0.919 0.012 1.672 0.027 1.672s0.153-0.122 0.307-0.27c0.354-0.341 0.649-0.491 1.024-0.519 0.669-0.051 1.068 0.294 1.25 1.080 0.057 0.245 0.062 0.525 0.062 2.798-0 2.768-0 2.78-0.221 3.273zM37.984 10.971c-0.012 0.285-0.046 0.612-0.077 0.727-0.182 0.674-0.666 1.152-1.366 1.348-0.942 0.264-1.98-0.168-2.394-0.997-0.232-0.465-0.241-0.558-0.241-2.831 0-1.853 0.007-2.081 0.066-2.334 0.168-0.715 0.584-1.178 1.289-1.435 0.204-0.074 0.417-0.113 0.63-0.117 0.761-0.016 1.515 0.393 1.832 1.059 0.213 0.449 0.24 0.642 0.261 1.908l0.019 1.136-2.789 0.019-0.010 0.763c-0.015 1.077 0.058 1.408 0.349 1.603 0.244 0.165 0.62 0.152 0.824-0.027 0.192-0.168 0.246-0.349 0.265-0.877l0.017-0.463h1.347l-0.022 0.518z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="text-4xl  text-[#ADADAD]"  height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M16.813 8.814s-.45.18-.973.756c-.524.577-.828 1.225-.603 1.397.087.066.287.079.65-.25a2.864 2.864 0 0 0 .766-1.063c.234-.57.16-.833.16-.84m2.863 1.038c-.581-.299-1.006-.664-1.448-.89-.422-.216-.695-.307-1.036-.261a1.057 1.057 0 0 0-.14.035s.176.6-.523 1.607c-.708 1.022-1.35 1.015-1.533.734-.191-.296.056-.9.468-1.437.432-.562 1.19-1.028 1.19-1.028s-.241-.148-.835.19c-.58.326-1.577 1.107-2.502 2.423-.926 1.316-1.11 2.04-1.242 2.61-.132.57-.012 1.18.62 1.18s1.368-.964 1.576-1.299c.386-.624.637-1.581.112-1.45-.259.065-.468.351-.6.627a2.683 2.683 0 0 0-.19.554 2.185 2.185 0 0 0-.513.298 3.788 3.788 0 0 0-.486.43s.002-.456.365-1.194c.364-.737 1.03-1.074 1.408-1.106.34-.027.783.262.408 1.327-.375 1.065-1.483 2.36-2.646 2.376-1.073.015-1.776-1.355-.282-3.745C13.501 9.19 15.441 8.38 16.07 8.29c.63-.09.835.187.835.187a2.709 2.709 0 0 1 1.197-.197c.77.052 1.364.596 2.15.979-.205.195-.4.4-.575.592m3.454-.89c-.533.342-1.27.652-1.979.586-.179.185-.371.4-.563.634 1.228.243 2.305-.519 2.877-1.167A3.82 3.82 0 0 0 24 8.248a4.792 4.792 0 0 1-.869.714m-1.636 3.462a.268.268 0 0 0 .023-.051.124.124 0 0 0-.113-.108c-.117-.005-.277.017-.695.48a6.303 6.303 0 0 0-.89 1.263c-.24.438-.337.764-.2.848a.199.199 0 0 0 .146.015c.093-.022.199-.11.36-.295.075-.088.158-.212.258-.349.277-.376.973-1.563 1.111-1.803m-4.349.504c.07-.182.159-.541-.026-.682-.199-.15-.705.201-.708.561-.003.369.357.535.443.559.05.013.066.01.09-.029a3.284 3.284 0 0 0 .201-.409m-.383.67a1.531 1.531 0 0 1-.348-.222 1.116 1.116 0 0 1-.26-.317c-.008-.012-.015-.003-.023.008-.007.01-.039.039-.309.434-.27.396-.684 1.216-.31 1.355.241.09.641-.331.86-.61a5.21 5.21 0 0 0 .402-.614c.012-.023 0-.029-.012-.034m4.258.947c-.102.163-.218.476.117.281.41-.236.994-1.123.994-1.123h.265a8.88 8.88 0 0 1-.803 1.054c-.415.46-.922.879-1.28.837-.416-.048-.286-.596-.286-.596s-.596.635-1.01.59c-.557-.062-.387-.751-.387-.751s-.63.774-1.06.75c-.673-.04-.504-.859-.316-1.436.1-.308.193-.55.193-.55s-.067.017-.21.038c-.076.011-.212.019-.212.019s-.28.495-.505.792c-.224.297-1.178 1.322-1.74 1.117-.518-.19-.346-.984-.044-1.615.44-.92 1.68-2.243 2.396-2.068.741.18.017 1.532.017 1.532s0 .005.007.009c.015.005.054.01.143-.008a1.605 1.605 0 0 0 .271-.08s.746-1.561 1.569-2.583c.823-1.02 2.465-2.78 3.11-2.354.156.105.086.465-.126.902a2.891 2.891 0 0 1-.291.078c.142-.258.236-.475.264-.627.097-.528-1.135.585-2.015 1.78a16.594 16.594 0 0 0-1.409 2.28 3.86 3.86 0 0 0 .454-.324 13.002 13.002 0 0 0 1.118-1.043 12.169 12.169 0 0 0 .951-1.098 2.58 2.58 0 0 0 .28-.029 12.054 12.054 0 0 1-1.05 1.24c-.35.355-.73.737-1.061 1.015a8.84 8.84 0 0 1-.931.691s-.77 1.553-.351 1.652c.246.06.732-.69.732-.69s.635-.967 1.017-1.404c.522-.593.97-.936 1.42-.942.261-.005.415.273.415.273l.123-.19h.757s-1.414 2.398-1.527 2.579m2.111-5.58c-.533.341-1.27.651-1.979.585-.18.185-.371.4-.564.634 1.229.243 2.305-.518 2.878-1.167A3.82 3.82 0 0 0 24 8.248a4.792 4.792 0 0 1-.869.714m-10.63 1.177h-.72l-.407.658h.72zm-3.41 2.277c.307-.42 1.152-1.891 1.152-1.891a.124.124 0 0 0-.112-.108c-.117-.006-.312.034-.7.519-.387.485-.688.87-.907 1.272-.24.438-.346.747-.207.831a.205.205 0 0 0 .144.015c.09-.022.208-.113.369-.298a5.57 5.57 0 0 0 .262-.34m-3.863-1.99c-.199-.15-.705.201-.708.56-.003.369.456.482.515.484a.09.09 0 0 0 .05-.01.06.06 0 0 0 .024-.027 3.483 3.483 0 0 0 .146-.325c.07-.183.158-.541-.027-.682m-.3 1.27a1.678 1.678 0 0 1-.39-.18.812.812 0 0 1-.279-.309c-.007-.012-.015-.003-.022.008-.007.01-.047.061-.318.458-.27.398-.672 1.21-.296 1.35.24.09.644-.334.864-.612a7.24 7.24 0 0 0 .455-.681c.009-.024 0-.03-.014-.034m5.88.244h.263s-1.321 1.912-2.068 1.823c-.416-.049-.293-.563-.293-.563s-.585.685-1.123.546c-.487-.125-.172-.936-.172-.936-.056.022-1.111 1.211-1.853.926-.776-.3-.373-1.296-.225-1.595.125-.253.263-.499.263-.499s-.119.034-.195.051l-.186.04s-.367.596-.591.894c-.225.297-1.178 1.32-1.74 1.117-.562-.204-.423-.99-.107-1.615.512-1.012 1.726-2.256 2.458-2.068.739.189.127 1.388.127 1.388s.147.019.5-.222c.507-.346 1.176-1.277 1.901-1.167.342.051.66.4.225 1.064-.139.213-.372.403-.55.215-.111-.118-.014-.33.103-.477a.457.457 0 0 1 .39-.179s.12-.273-.185-.269c-.247.005-.871.58-1.223 1.16-.323.533-.813 1.441-.322 1.639.451.182 1.309-.836 1.706-1.37.397-.533 1.302-1.742 2.062-1.79.261-.017.417.221.417.221l.088-.139h.759s-1.43 2.387-1.542 2.567c-.088.141-.204.46.117.281.322-.178.996-1.043.996-1.043m-.414 3.824a3.144 3.144 0 0 0-1.908-.557 1.17 1.17 0 0 0-.93.504c-.29-.505-.862-.815-1.747-.808-1.43.016-2.849.676-3.972.675-1.077 0-1.863-.677-1.837-1.88.047-2.109 1.83-4.009 3.16-4.864.767-.49 1.409-.637 1.828-.59.306.034.674.388.442.909-.341.761-.812.699-.795.335.01-.237.168-.386.286-.469a.582.582 0 0 1 .278-.068c.068-.057.117-.474-.429-.337-.546.137-1.21.676-1.84 1.371-.63.696-1.61 2.011-1.852 3.392-.113.64-.039 1.808 1.48 1.795 1.287-.01 3.185-.859 4.929-.841a3.34 3.34 0 0 1 1.725.472c.451.278.992.684 1.184.961"></path></svg>
                </div>
            </div>
            </section>
            <section className="bg-[#FFF] md:h-[655px] h-[1027px]">
                  <div className="flex md:flex-row flex-col justify-center items-start md:gap-20 md:py-20  md:mx-0 mx-2 single-event-contact">
                    <div className="flex flex-col justify-start items-start md:mx-0 mx-2 contact-left-k md:mb-0 mb-5" >
            <div className="my-5">
            <p className="text-[#3C0644] md:text-sm text-xs font-[700] text-start">CONTACT US</p>
            <p className="font-normal md:text-xl text-xl text-[#2E2E2E] md:w-[470px] w-[343px] py-2 text-start left-contat">
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
                    <div>
                    <div className=" space-y-5 pl-3 md:pl-0">
                            <div className="flex flex-col">
                                <label htmlFor="fullname" 
                                className=" text-[#000000] font-normal text-sm text-start">Full Name</label>
                                <input id="full-name" type="text" className="border border-[#E9E9E9] md:w-[536px] w-[343px] p-2 rounded-md" placeholder="Your full name" />
                            </div>
                                    
                             <div className="flex flex-col">
                            <label htmlFor="email" className=" text-[#000000] font-normal text-sm text-start">Email</label>
                            <input type="email" id="email" className="border border-[#E9E9E9] md:w-[536px] w-[343px] p-2 rounded-md" placeholder="Your email" />
                             </div>
                             
                             <div className="flex flex-col">
                                <label htmlFor="Subject" className="text-[#000000] font-normal text-sm text-start">Subject</label>
                                <input id="Subject" type="text" className="border border-[#E9E9E9] md:w-[536px] w-[343px] p-2 rounded-md" placeholder="Your full name" />
                             </div>
                             <div className="flex flex-col">
                        <label htmlFor="message" className=" text-[#000000] font-normal text-sm text-start ">Message</label>
                        <textarea id="message" placeholder="Message" rows="4" class="border border-[#E9E9E9] p-3"
                         data-gramm="false" wt-ignore-input="true">
                        </textarea>
                
                </div>
                <div className="flex md:items-center items-start">
                <button class="bg-[#3C0644] text-white w-[180px] p-2 ">
                Submit
                </button>
                </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default SingleEvent;