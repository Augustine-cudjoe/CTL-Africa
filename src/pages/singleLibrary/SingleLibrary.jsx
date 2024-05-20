import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import OtherNav from "../othernav/OtherNav"
import Footer from "../footer/Footer"
import "./singlelibrary.css"

function SingleLibrary() {
    const libraryList=[
        {
        id:0,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    },
    {
        id:1,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    },
    {
        id:2,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    },
    {
        id:3,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    }
    
 
]
useEffect(()=>{
  document.title='singlelibray'
 },[])
  return (
    <div className='singleLibrary max-h-screen '>
     <OtherNav/>
     <main className='overflow-x-hidden min-h-screen'>
         <section className="single-library-hero min-h-screen md:p-0 px-5 bg-[#FFFFFF]">
                <div className="py-32 grid md:grid-cols-2 grid-cols-1 gap-10 " >
                   <div className=" flex justify-end items-center" >
                    <div className="single-left-hero border-[#E9E9E9]  h-[490px] w-[422px] rounded-lg shadow-sm" id='singlelibrary-left'>
                       <div className=' bg-[#F5F8FC]  h-full flex flex-col justify-center items-center p-4'>
                         <p className='bg-[#D9D9D9] h-[345px] md:w-[289px] w-full'> </p>
                         </div>
                    </div>
                   </div>
                   <div className="flex flex-col justify-center items-start gap-2" id='right-print'>
                    <div className="right-hero-singleLibrary space-y-2">
                    <p > <span className='flex items-start  text-start bg-[#D9D9D9] text-xs font-medium p-2 rounded-2xl w-[68px] single-category'> Category</span></p>
                    <h3 className='text-[#2E2E2E] md:text-[32px] text-xl font-medium'> Book title Goes here</h3>
                     <p className='text-[#6E6E6E] text-base font-normal text-start'>Author</p>
                    </div>
                    <div className="single-hero-content">
                       <p className='text-start text-[#6E6E6E] leading-6 md:text-base text-sm font-normal md:w-[447px] w-full libra-head'>
                       This mesmerizing novel weaves together elements of fantasy 
                        and mystery, creating a tapestry of wonder and intrigue.
                         Readers will be transported to a place where the ordinary and
                          the extraordinary collide, where the boundaries of reality blur,
                           and where the passage of time is as unpredictable as the 
                            wind.
                       </p>
                        <ul className=" text-start  text-base font-normal leading-9 text-[#6E6E6E]">
                            <li><p > <span className='books-title text-[#3C0644]'>Book Type:</span> 
                             <span className='opacity-50 prints'>Printed Book</span></p>
                       </li>
                       <li> 
                       <p > <span className='books-title text-[#3C0644]'>  Publisher: </span>  <span className='opacity-50 prints'>The Issah</span></p>
                       
                       </li>
                        
                        <li> 
                        <p > <span className='books-title text-[#3C0644]'> Books Pages: </span> <span className='opacity-50 prints'>256</span></p>
                       
                        </li>
                        <li>
                        <p >  <span className='books-title text-[#3C0644]'>ISBN-10:</span>  <span className='opacity-50 prints'>986561586135</span></p>
                       
                        </li>
                         <li>
                         <p > <span className='books-title text-[#3C0644]'> Dimension: </span> <span className='opacity-50 prints'> 20 X 14 X 4cm</span></p>
                      
                         </li>
                       
                        </ul>
                       <div className="flex flex-row gap-3 ">
                         <div>
                            <input type='text' className='p-3 border rounded-md w-[55px] h-[49px] text-center'/>
                            
                         </div>
                         <div className="flex ">
                         <button className='bg-[#3C0644] md:w-[285px] w-full p-2 rounded-md text-white'>Add to cart</button>
                         </div>
                       </div>
                    </div>
                   </div>
                    
                  
                </div>
                <div className="py-5 flex flex-col justify-center items-center ">
                    <div className="single-description  flex flex-col justify-center items-center gap-5">
                    <h6 className='font-bold mb-0 pb-0'>Description:</h6>
                    <p className='description mt-0 pt-0 text-start text-[#6E6E6E] leading-6 md:text-base text-sm font-normal md:w-[647px] w-full'>The Coaching Habit" by Michael Bungay Stanier is a practical guide for leaders and
                         coaches looking to enhance their coaching skills. The book emphasizes the power
                         of asking the right questions to empower and lead effectively. Stanier provides a framework
                         of seven essential coaching questions that can transform coaching and leadership  
                         conversations. This book is a valuable resource for those seeking to become more 
                         effective coaches and leaders.</p>
                    <div className="single-commen pb-2 flex flex-col justify-between items-center ">
                          <div className='md:w-[664px] w-full bg-[#F5CDFB] p-3 flex flex-row justify-between items-center gap-5'>
                          <p className='flex flex-row gap-3 items-center text-base text-[#000000] font-medium' >To leave a comment  </p>
                        <p className=' pe-4text-base text-[#000000] font-medium '> <Link to='/login'> Sign in</Link> </p>
                       

                          </div>
                        <div className='my-5 md:mx-0 mx-3 md:w-[664px] w-full'>
                            <textarea   rows="5" cols="90" className=' mt-6 !bg-white border border-[#E9E9E9] focus:outline-none p-3 w-full' ></textarea>
                            <div className="grid my-md-3   my-3">
                            <button className='mt-4 w-full bg-[#3C0644] text-white text-base font-normal p-2 library-btn '>Send</button>
                        </div>
                           
                        </div>
                        
                    </div>
                    <div className="single-comment-btn my-md-5">
                    <div className="flex  md:gap-1 gap-0 my-10  ">
                          <div className="img-holder flex-none w-32 ">
                            <img className='md:w-16 md:h-16 w-10 h-10 rounded-full  ' src='https://picsum.photos/200/300?grayscale' alt='...'/>
                          </div>
                          <div className="library-commemt-holder   flex-1 w-66">
                            <p className=' text-[#1D2026] md:text-sm text-xs font-medium flex justify-between items-center'>
                                 <span className='fw-bold'>Ronald Richards</span>
                             <span className='text-[#6E7485] md:text-sm text-xs font-medium'> 1 week ago</span></p>
                             <p className="comment-text text-start text-[#656565] md:text-base text-sm font-normal max-w-md">
                                Thank you for your helpful video. May I ask what is the 
                               application use to demo the animation at [4:24], is it the 
                                runnable mobile application? As what I know, Figma Mirror
                                 app cannot do that. Please help me Great thanks</p>
                          </div>
                    </div>
                   </div>
                   </div>
                </div>
         </section>
         <section className=' space-y-5 py-20  md:px-0 px-5 bg-[#FFFFFF]'>
           <div className=' space-y-5 '>
           <div className='flex justify-items-start items-start '>
           <p className='text-[#100B26] font-medium md:text-[40px] text-2xl md:mx-16 mx-2'> Similar Books</p>
         
           </div>
            <div className="flex flex-col md:justify-center md:items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 " id='slider-hol'>
          {
            libraryList.map(list=>(
                
                 <div key={list.id} className=' md:w-[280px] w-full h-full bg-white border border-[#E9E9E9] rounded-md shadow-sm' id='similar-slider'>
                    <div className='bg-[#F5F8FC] h-[347px] flex justify-center items-center rounded-md' id='slider-img'> 
                      <p className='bg-[#D9D9D9] w-[179px] h-[245px]'> </p>
                    </div>
                   
                      <div className='m-3 space-y-4 flex flex-col items-start text-start'>
                        <p className=' text-sm text-[#000000] p-1 rounded-2xl bg-[#D9D9D9] w-[73px] text-center'>category </p>
                        <p className='text-sm font-medium text-[#000000] '> {list.title}</p>
                        <p className='text-xl font-semibold text-[#000000]'> {list.price}</p>
                        
                      </div>
                </div>
                
            ))
          }
            </div>
            </div>
           </div>
         </section>
     </main>
     <Footer/>
    </div>
  )
}

export default SingleLibrary;