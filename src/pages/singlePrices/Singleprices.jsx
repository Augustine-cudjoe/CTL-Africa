import React,{useEffect} from 'react'
import OtherNav from '../othernav/OtherNav';
import "./singleprice.css"
import Footer from "../footer/Footer"

function Singleprices() {
  useEffect(()=>{
    document.title='singleprices'
   },[])
  return (
    <div className='singleprices min-h-screen'>
        <OtherNav/>
        <main>
            <div className='min-h-screen overflow-x-hidden z-0' id='single-prices'>
              <section className="bg-[url('https://jazzy-llama-392a85.netlify.app/assets/cbanner-415ee6f6.svg')] z-0 pt-28 pb-2 lg:h-[384px] h-auto bg-no-repeat bg-cover items-center md:relative">
                <div className="flex  flex-col justify-center  gap-3 md:px-40 p-5 single-price-left ">
                   <div className="single-price-content text-start items-start ">
                 <h1 className='md:text-5xl text-2xl font-bold text-white mb-3 ' > Coaching Session</h1>
                  <p className="text-base font-normal text-white md:w-[535px] w-[11/12]"> 
            Experience a transformative coaching session designed 
             to help you define 
             your goals, overcome challenges, and create a customized action 
             plan for personal growth and success. Our professional coach offers
             guidance, support, and a roadmap to help you unlock your full potential
             and achieve your dreams.
              </p>
                  </div>
                </div>
                <div className="single-price-card md:pl-7 pl-5 md:w-full">
                <div className="bg-white shadow-md md:w-[400px] lg:w-[486px] w-11/12   h-[510px] md:h-[500px] lg:h-[510px] rounded-lg md:absolute md:top-20  md:right-[3rem] lg:right-[10rem] p-5 " id='single-price-card-con'>
               
              
              <h6 className='fw-bold text-2xl text-[#000000] font-medium text-start'>Summary</h6>
                <div className="flex flex-col ">
                <div className="flex  justify-between items-center  mt-3">
                     <div className='lg:space-x-2 flex gap-2 items-center flex-row'>
                     <div>
                     <input className='md:w-[10px] flex-initial lg:w-[1em] lg:h-[1em] ' type="radio" id="RadioButton"  name="RadioButton" value="RadioButton"/>
                   
                     </div>
                   <p className="font-normal flex-1 text-base md:text-xs lg:text-base text-[#000000]" htmlFor="flexRadioDefault1">
                      Pay Annually <span className='text-white py-1 px-2 text-sm rounded-full bg-[#3C0644]'> SAVE 25%</span> 
                    </p>
                     </div>
                    <p className='price-tag text-[#282525] text-base font-semibold'>GH¢200</p>
                
                </div>
                <div className=" my-5 flex justify-items-start  space-x-2">
                <div>
                <input type="radio" id="RadioButton" className='w-[1em] h-[1em]'   name="RadioButton" value="RadioButton"/>
                 
                  </div>  
                   <p className="font-normal text-base text-[#000000]" htmlFor="flexRadioDefault1">
                   Pay Monthly 
                    </p>
              </div>
                </div>
            
               <div className='flex  flex-col  md:gap-10 gap-2 '>
                
                <div className=' flex items-start text-start mb-0 pb-0'>
                <label className='text-sm font-normal text-start mb-0 pb-0'>Discount code </label>
               
                </div>
                <div className='flex items-center md:gap-10 gap-2  justify-between  mt-0 pt-0 '>
                <input type='text' className='border border-[#E9E9E9] md:w-[256px] mt-0 pt-0 w-[199px] p-2 rounded-md h-[40px]' placeholder='Discount code'/> 
                
                <button className=' discount-btn bg-[#fff] border border-[#3C0644] text-[#3C0644] text-sm font-normal md:w-[160px] h-[40px] w-[118px] p-2 rounded-md'>Apply</button>
                
                </div>
                
              </div>
              
              
                <div className=' flex flex-col items-start space-y-3 '>
                  <h6 className='text-[#000000] font-medium text-base mt-5'>Total Annually</h6>
                  <p > <span className='text-[32px] text-[#000000] text-semibold"'> GH¢ 200</span>
                  <del >  <sup className='text-[#827B7B] font-medium text-[14px]'> GH¢ 150</sup> </del>
                
                   
                   </p>
                   
                </div>
                <hr className='my-5'/>
                <div className="payment  d-flex flex-column justify-content-center">
                    <button className=' payment-btn bg-[#3C0644] text-[#ffffff] text-sm font-normal w-full p-3 rounded-md  '>Pay GH¢ 200 </button>
                    <p className='text-center py-5 mb-5'>30 days money back gruan</p>
                </div>
           
             
            
               </div>
              </div>
              </section>
              <section className=' lg:px-40 p-5 py-16 md:grid md:grid-cols-2 flex flex-col-reverse'>
              <div className="single-price-opportunity-holder mt-md-5 ">
              <h5 className='text-start text-[24px] text-xl font-medium text-[#000000] py-10'>Opportunities of Coaching Session</h5>
            <ul className='price-items space-y-5'>
              <li className='price-items-list flex  items-center gap-5'>
                    <svg 
                     xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-lg text-[#3C0644] text-xl" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg> <span className='text-start'> Tortor interdum condimentum nunc molestie quam lectus.</span>
                </li>
                <li className='price-items-list flex items-center gap-5'>
                    <svg 
                     xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-lg text-[#3C0644] text-xl" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg> <span className='text-start'> Tortor interdum condimentum nunc molestie quam lectus.</span>
                </li>
                <li className='price-items-list flex items-center gap-5'>
                    <svg 
                     xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-lg text-[#3C0644] text-xl" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg> <span className='text-start'> Tortor interdum condimentum nunc molestie quam lectus.</span>
                </li>
                <li className='price-items-list flex items-center gap-5'>
                    <svg 
                     xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-lg text-[#3C0644] text-xl" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg> <span className='text-start'> Tortor interdum condimentum nunc molestie quam lectus.</span>
                </li>
               
               
               
            </ul>
         </div>
              </section>
            </div>
        </main>
       <div className="md:hidden">
       <Footer/>
       </div>
    </div>
  )
}

export default Singleprices;