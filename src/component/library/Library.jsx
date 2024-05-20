import React,{useEffect} from 'react'
import OtherNav from '../../pages/othernav/OtherNav'
import { Link } from 'react-router-dom'
import Footer from '../../pages/footer/Footer'
import "./library.css"

function Library() {
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
    },
    {
        id:4,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    },
    {
        id:5,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    },
    {
        id:6,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    },
    {
        id:7,
        title:"Name of the book goes in here",
        price:"GHC₵ 200"
    }
 
]
useEffect(()=>{
  document.title='library'
 },[])
  return (
    <div className='max-h-screen ' id='library-hero'>
       <div className=''>
       <OtherNav/>
       </div>
        <div className="min-h-screen overflow-x-hidden md:py-0 py-20">
        <main className=' '>
      <section className="bg-white z-[50] md:relative lg:mb-40" id='library-h'>
        <div className='min-h-[589px] pt-20 md:p-16 bg-[#D9D9D9] z-0 '> </div>
        <div className="md:absolute md:left-20 md:top-32 bg-[#FFF5F5] h-[590px]  md:min-h-[590px] md:w-[477px] w-full z-10" id='library-yellow'>

        </div>
      </section>
       <section className="bg-[#F8F9FA] md:mt-20 min-h-[100px] p-10 flex md:flex-row flex-col justify-center gap-9" id='library-icons'>
        
         <div className="flex flex-row gap-4">
            <p className="w-[42px] h-[42px] bg-[#DBEEFF] rounded-full flex justify-center items-center">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                 className="text-[#26547C] text-2xl" height="1em" width="1em" 
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2">
                </path>
                <path d="M14 17H9">
                </path>
                <circle cx="6.5" cy="17.5" r="2.5">
                </circle><circle cx="16.5" cy="17.5" r="2.5">
                 </circle>
                </svg>
           </p>
            <div className='flex flex-col items-start'>
                <p className="text-[#2E2E2E] font-medium text-base">Free Shipping</p>
                <p className="text-[#6E6E6E] text-sm font-medium">Order over GH¢ 1000</p>
            </div>
                        
        </div>
        <div className="flex flex-row gap-4">
                 <p className="w-[42px] h-[42px] bg-[#FFDBE4] rounded-full flex justify-center items-center">
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" className="text-[#EF476F] text-2xl"
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                         d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor">
                        </path>
                        </svg>
                        </p>
                        
                        <div className='flex items-start flex-col'>
                        <p className="text-[#2E2E2E] font-medium text-base">30 Days Return</p>
                        <p className="text-[#6E6E6E] text-sm font-medium">Order over GH¢ 1000</p>
                        </div>
        </div>
        <div className="flex flex-row gap-4">
                            <p className="w-[42px] h-[42px] bg-[#FFF4DB] rounded-full flex justify-center items-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" 
                                className="text-[#FFD166] text-2xl" height="1em" width="1em" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z">
                                </path>
                                </svg>
                                </p>

                                <div className='flex flex-col items-start'>
                                <p className="text-[#2E2E2E] font-medium text-base">Secure Payment</p>
                                <p className="text-[#6E6E6E] text-sm font-medium">100% Secure &amp; Safe</p>
                                </div>
                                
        </div>
        <div className="flex flex-row gap-4">
                                <p className="w-[42px] h-[42px] bg-[#DBFFF6] rounded-full flex justify-center items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="text-[#06D6A0] text-2xl" height="1em" width="1em" 
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 
                                    4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z">
                                    </path>
                                    </svg>
                                    </p>
                                        <div className='flex items-start flex-col'>
                                         <p className="text-[#2E2E2E] font-medium text-base">24/7 Support</p>
                                         <p className="text-[#6E6E6E] text-sm font-medium">Dedicated Support</p>
                                         </div>
        </div>
                                         
      </section>
      <section className=' gap-5  md:mx-28 mx-2 my-20' id='library-form' >
      <div className="all-course-content flex flex-col items-start text-start">
            <h1 className='text-[#100B26] md:text-[48px] text-3xl font-bold '>All CTL-Africa Courses</h1>
            <p className='text-[#6E6E6E] text-base font-medium md:w-[540px] w-full pt-5'>Discover Courses Thoughtfully Crafted to Awaken Your Full Potential: 
              Elevating Your Journey to Excellence</p>
      </div>
      <div className='flex  flex-col md:flex-row md:items-center md:gap-10 gap-5 mb-10  pt-8' >
       <div className=" space-y-2  relative " >
        <div className="flex flex-col items-start">
        <label htmlFor='search' className=' text-[#6E7485] font-normal text-sm'> Search</label>
        <input type='text ' placeholder='Search... ' className='md:w-[377px] w-full pl-10 py-2 border border-[#E9EAF0] rounded-[4px]'/>
      
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search absolute top-6 left-5" viewBox="0 0 16 16">
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
     </svg>
       </div>
       <div className="space-y-2 flex-col flex items-start">
          <label htmlFor="category" className="text-[#6E7485] font-normal text-sm">Category</label>
          <div className="mt-2 w-full">
            <select id="category" name="category" autocomplete="country-name" className="md:w-[220px] w-full p-2  border border-[#E9EAF0] !bg-white rounded-[4px]">
            <option value="1">category</option>
            <option value="1">option</option>
            <option value="2">option</option>
            </select>
          </div>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <label htmlFor="price" className="text-[#6E7485] font-normal text-sm">Price</label>
          <div className=" w-full">
            <select id="price" name="country" autocomplete="country-name" className="md:w-[220px] w-full p-2  border border-[#E9EAF0] !bg-white rounded-[4px]">
              <option>Price</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
          {
            libraryList.map(list=>(
                < Link  to={`/SingleLibrary/${list.id}`} key={list.id}  style={{textDecoration:'none'}}>
                 <div  className=' md:w-[250px] w-full h-full bg-white border border-[#E9E9E9] rounded-md shadow-sm' id='library-books'>
                    <div className='bg-[#F5F8FC] h-[347px] flex justify-center items-center rounded-md'> 
                      <p className='bg-[#D9D9D9] w-[179px] h-[245px] inner-image' > </p>
                    </div>
                   
                      <div className='m-3 space-y-4 flex flex-col items-start text-start'>
                        <p className=' text-sm text-[#000000] p-1 rounded-2xl bg-[#D9D9D9] w-[73px] text-center'>category </p>
                        <p className='text-sm font-medium text-[#000000] '> {list.title}</p>
                        <p className='text-xl font-semibold text-[#000000]'> {list.price}</p>
                        
                      </div>
                </div>
                </ Link>
            ))
          }
      </div>
        <div className="flex items-start mt-5">
         <button className='rounded-[4px] border border-[#3C0644] p-2 text-[#3C0644] w-[120px]'> Show 8 more </button>
        </div>
      </section>
      <section className=" bg-[url('https://jazzy-llama-392a85.netlify.app/assets/cbanner-415ee6f6.svg')] h-[448px] bg-no-repeat gap-6 bg-cover bg-center flex flex-col justify-center items-center">
            
           <div className="flex flex-col  items-center">
           <p className="md:w-[560px]   md:text-[32px] text-[29px] font-bold text-white text-center mb-5 ">Unlock Your Potential with Premium Subscription Plans</p>
            <p className="text-white text-base font-normal md:w-[560px] text-center" id='library-acc'>Access Exclusive Leadership and Mentorship Courses and Books – Your Path to Personal and Professional Growth Awaits</p>
            
           </div>
           <div className="flex items-center">
           <button className="  w-[197px] bg-[#ffffff] text-[#3C0644] border-2 text-base font-medium rounded-sm py-2 text-center">
             Subscribe Today! 
      
            </button>
           </div>
                    
        </section>

      </main>
      <Footer/>
        </div>
    </div>
  )
}

export default Library