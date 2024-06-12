import React,{useEffect} from 'react'
import OtherNav from "../../pages/othernav/OtherNav"
import { Link } from 'react-router-dom';
import Footer from '../../pages/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./event.css"

function Events() {
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
    const eventData=[ {  id:0,
        img:"https://jazzy-llama-392a85.netlify.app/assets/event01-2f85ae51.png",
        title:" Leadership Excellence Summit",
        date:" Nov 12, 2023  ",
        describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
        country:"Africa"
       
       },
       {  id:1,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event02-b572adad.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Cape Coast"
         
         },
         {  id:2,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event03-8ae9afcb.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Takoradi"
         
         },
         {  id:3,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event04-5a902f38.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Tamale"
         
         },
         {  id:4,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event05-30555c39.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Accra"
         
         },
         {  id:5,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event06-2a7ff03e.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Sunyani"
         
         },
         {  id:6,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event07-9e0597a9.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"India"
         
         },
         {  id:7,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event08-e61c1030.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Kumasi"
         
         },
         {  id:8,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event09-4c028b17.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Kumasi"
         
         },
         {  id:9,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event10-98894541.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Kumasi"
         
         },
         {  id:10,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event11-f5e0ae22.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Kumasi"
         
         },
         {  id:11,
          img:"https://jazzy-llama-392a85.netlify.app/assets/mpimg1-8e2ce974.png",
          title:" Leadership Excellence Summit",
          date:" Nov 12, 2023  ",
          describ:"This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment ",
          country:"Kumasi"
         
         }

    ]
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
      useEffect(()=>{
        document.title='events'
       },[])
  return (
    <div className='events min-h-screen '>
        <OtherNav/>
       
       <main className='overflow-x-hidden min-h-full'>
        <section  className='min-h-screen pt-20 md:p-16' id='event'>
          <div className='flex flex-col justify-center items-center gap-2 my-10'>
             <h6 className='text-[#2E2E2E] md:text-[40px] text-[30px] font-semibold text-center'>  Browse our Events</h6>
             <p className='md:text-base text-sm text-[#6E6E6E] font-medium md:w-[591px] w-auto text-center'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas vel qui,  eveniet excepturi molestiae ratione.
                  
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:m-0 m-4 md:ml-6" id='event-list'>
                {
                    eventData.map(eve=>(
                        <Link className='no-underline ' to={`/singleEvent/${eve.id}`}  key={eve.id} id='event-link'>
                            <div className=' '>
                            <div className=' border-[#E9E9E9]  w-full rounded-lg shadow-md'>
                             <img className='rounded-t-lg w-full md:h-[180px] h-[250px]" ' src={eve.img} /> 
                             <div className='p-3 space-y-5 text-start'>
                                <p className=' text-sm font-semibold hover:text-[#6E6E6E] text-[#6E6E6E]'> {eve.title} </p>
                                <p className=' hover:text-[#6E6E6E]  text-[#6E6E6E] text-xs font-medium'> {eve.describ}</p>
                             </div>
                             <div className="flex flex-row justify-between px-2">
                              <p className='flex flex-row justify-between items-center gap-2 '>
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                               className="bi bi-calendar4 text-xl hover:text-[#6E6E6E] text-[#6E6E6E]" viewBox="0 0 16 16">
                             <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                              </svg>
                               <span className='text-base md:text-xs lg:text-base hover:text-[#6E6E6E] text-[#6E6E6E]'>{eve.date} </span>
                              </p>
                              <p className='flex flex-row justify-between  items-center gap-2 '> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                               className="bi bi-geo-alt text-xl hover:text-[#6E6E6E] text-[#6E6E6E]" viewBox="0 0 16 16">
                               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                 </svg>
                                 <span className='lg:text-base md:text-xs text-base hover:text-[#6E6E6E]  text-[#6E6E6E]'> {eve.country}</span>
                              </p>
                             </div>
                            </div>
                            </div>
                        </Link>
                    ))
                }
          </div>
          <div className="flex justify-start  m-4  md:ml-6">
             <button className='border border-[#3C0644] p-2 text-center w-[120px] rounded-md my-5 '> Show 8 more </button>
          </div>
        </section>
        <section className=" bg-[url('https://jazzy-llama-392a85.netlify.app/assets/cbanner-415ee6f6.svg')] h-[448px] bg-no-repeat gap-6 bg-cover bg-center flex flex-col justify-center items-center" >
            
           <div className="flex flex-col  items-center">
           <p className="md:w-[560px]   md:text-[32px] text-[29px] font-bold text-white text-center mb-5 ">Unlock Your Potential with Premium Subscription Plans</p>
            <p className="text-white text-base font-normal md:w-[560px] text-center event-sub">Access Exclusive Leadership and Mentorship Courses and Books – Your Path to Personal and Professional Growth Awaits</p>
            
           </div>
           <div className="flex items-center">
           <button className="  w-[197px] bg-[#ffffff] text-[#3C0644] border-2 text-base font-medium rounded-sm py-2 text-center">
             Subscribe Today! 
      
            </button>
           </div>
                    
        </section>
        <section className='bg-[#FFFDF4]  md:h-[764px]  testimonial-slider'>
           <div className="flex flex-col justify-center items-center pt-10">
           <h6 className='text-base text-[#3C0644] font-extrabold py-2 text-center  uppercase'>TESTIMONIALS</h6>
             <h1 className='md:text-[48px] text-[24px] md:w-[542px] font-medium text-[#100B26] text-center'>What our clients say</h1>
           </div>
           <div className="md:my-20 my-10 md:ml-10 ml-3 ">
             <Slider {...settings}>
                {
                     items.map(item=>(
                        <div className="grid grid-cols-4 gap-5 " key={item.id}>
                            
                       <div className='gap-5 md:space-y-10 space-y-6 md:w-[90%] w-[90%] md:h-[50%] h-[100%] md:p-4 p-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center z-0 '  >
                          
                           <div className=" ">
                           <p className=' md:text-base text-[9.03px] font-normal z-50 text-start'>{item.text}</p> 
                           <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
        </main>
       
        <Footer/>
    </div>
  )
}

export default Events;