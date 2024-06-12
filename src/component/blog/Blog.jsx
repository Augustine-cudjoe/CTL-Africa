import React,{useEffect} from 'react'
import OtherNav from '../../pages/othernav/OtherNav';
import Footer from "../../pages/footer/Footer"
import { Link } from 'react-router-dom';
import "./blog.css"


function Blog() {
    const blogpost=[
        {
          id:1,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event02-b572adad.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 200 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:2,
          img:"https://jazzy-llama-392a85.netlify.app/assets/blog02-2b35f3ef.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 200 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:3,
          img:"https://jazzy-llama-392a85.netlify.app/assets/blog03-a76cac2e.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 20 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:4,
          img:"https://jazzy-llama-392a85.netlify.app/assets/blog04-08c96eb7.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 100 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:5,
          img:"https://jazzy-llama-392a85.netlify.app/assets/blog05-3cf3826b.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 100 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:6,
          img:"https://jazzy-llama-392a85.netlify.app/assets/blog06-7984380c.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 10 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:7,
          img:"https://jazzy-llama-392a85.netlify.app/assets/blog07-16572d31.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 100 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:8,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event08-e61c1030.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 100 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        },
        {
          id:9,
          img:"https://jazzy-llama-392a85.netlify.app/assets/event03-8ae9afcb.png",
          date:"Nov 12,2023",
          title:"Leadership Excellence Submit",
          views:" 100 views",
          text:" This seminar is designed to empower current and aspiring leaders with the skills and knowledge needed to excel in today's dynamic business environment. ",
          button:" View full post "

        }

]
useEffect(()=>{
 document.title='blog'
},[])
  return (
    <div className='blog max-h-screen overflow-x-hidden'>
      <OtherNav/>
      <main>
        <section className=' min-h-screen pt-30 md:p-16' id='blog'>
           <div className="flex flex-col justify-center items-center gap-10 my-10">
             <h1 className='text-[#2E2E2E] md:text-[40px] text-[30px] font-semibold text-center mt-20 md:mt-0'>CTL-Africa Blog</h1>
            <p className='md:text-base text-sm text-[#6E6E6E] font-medium md:w-[591px] w-auto text-center'> Stay up to date with our most recent news</p>
              <div className="flex relative">
               <input type='text' placeholder='Searching...' className=' md:w-[484px] w-full pl-10 py-2 border border-[#E9EAF0] active:border-orange-200 '/>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search absolute top-3 left-3 text-xl" viewBox="0 0 16 16">
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>
            </div>   
           </div>
           <div className="flex flex-col md:flex-row justify-center items-start gap-10 ">
           <div className=" flex-initial  md:w-70   ">
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-3'>
           
            {
                blogpost.map(blog=>(
                    
                        <Link className=' no-underline ' to={`/singleblog/${blog.id}`} key={blog.id} id="blog-link" style={{textDecoration:"none"}}>
                          <div className=' border-[#E9E9E9] no-underline  md:w-full rounded-lg shadow-md w-11/12 md:ml-0 ml-4' id='blog-lists' >
                           <img src={blog.img} className='rounded-t-lg w-full md:h-[180px] h-[250px]' alt='blog-post'/>
                         <div className=' p-3 space-y-5 gap-3'>
                           <p className='text-lg font-semibold text-start blog-title no-underline text-[#6E6E6E] hover:text-[#6E6E6E] '> {blog.title} </p>
                           
                               <div className="flex justify-between items-center">
                               <p className='text-base text-[#6E6E6E]  blog-date no-underline'> {blog.date} </p>
                                <p className='flex items-center  blog-date hover:text-[#6E6E6E] active:hover:text-[#6E6E6E]'> 
                                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-eye me-2 font-bold hover:text-[#6E6E6E] " viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                    </svg>    
                                    <span className='class="text-base text-[#6E6E6E]'>  {blog.views}</span>
                                </p>
                               </div>
                          
                         </div>
                         <p className='text-[#6E6E6E] text-xs font-medium text-start px-2 my-4 no-underline'> {blog.text}</p>
                         <div className="flex justify-start items-center gap-3 px-2 mb-2 mt-3 no-underline">
                            <p className='text-[#3C0644] text-base font-medium'> {blog.button} </p>
                            <p>  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-arrow-right text-xl" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                   </svg></p>
                         </div>
                       </div>
                        </Link>
                    
                ))
            }
         
            </div>
            <div className="flex justify-start items-start md:ml-0 ml-4 ">
               <button className='border border-[#3C0644] p-2 text-center w-[120px] rounded-md my-5'> Show 8 more</button>
            </div>
           </div>
           <div className=' flex-initial  md:w-30'>
            <p className='text-[#fff] bg-[#3C0644] p-3 md:w-[296px] w-full'>Recommended Topics </p>
             <div className="my-5 space-y-4 w-[298px]">
              <div className="grid grid-cols-2">
                <p className='m-1 bg-[#E9E9E9] cursor-pointer p-3 w-auto text-[#000000] text-base font-medium rounded-3xl text-center'> Leadership </p>
                <p className='m-1 bg-[#E9E9E9] cursor-pointer p-3 w-auto text-[#000000] text-base font-medium rounded-3xl text-center'> Mentorship</p>
                <p className='m-1 bg-[#E9E9E9] cursor-pointer p-3 w-auto text-[#000000] text-base font-medium rounded-3xl text-center'>  Transformation </p>
                <p className='m-1 bg-[#E9E9E9] cursor-pointer p-3 w-auto text-[#000000] text-base font-medium rounded-3xl text-center'>Diversity</p>
                <p className='m-1 bg-[#E9E9E9] cursor-pointer p-3 w-70 text-[#000000] text-base font-medium rounded-3xl text-start col-span-2'> Emotional Intelligent</p>

              </div>
             

             </div>
             <div className="flex flex-col">
             <p className='text-[#3C0644] text-base font-medium  text-start my-3'>Recently Posted</p>
              <div className="flex flex-col gap-4">
                <div className='flex   items-start gap-5'>
                      <img className=' ' src=' https://jazzy-llama-392a85.netlify.app/assets/reimg01-df90ab74.png'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-[#000000] text-base  font-medium m-0 pb-0'> Blog title goes here</p>
                        <p className="flex justify-between items-center my-0 py-0  space-y-0">
                            <span className='text-[#6E6E6E] text-xs font-medium'> Oct 31, 2023</span>
                            <span className=' flex justify-center items-center gap-1 text-[#6E6E6E] text-xs font-medium'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye " viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                    </svg> 
                                    <span>  10 views</span> 
                            </span>
                        </p>
                      </div>
                </div>
                <div className='flex   items-start gap-5'>
                      <img className=' ' src='https://jazzy-llama-392a85.netlify.app/assets/reimg02-05ddbd8b.png'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-[#000000] text-base  font-medium m-0 pb-0'> Blog title goes here</p>
                        <div className="flex justify-between items-center my-0 py-0">
                            <p className='text-[#6E6E6E] text-xs font-medium'> Oct 31, 2023</p>
                            <p className=' flex justify-center items-center gap-1 text-[#6E6E6E] text-xs font-medium'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye " viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                    </svg> 
                                    <span>  10 views</span> 
                                    </p>
                        </div>
                      </div>
                </div>
                <div className='flex   items-start gap-5'>
                      <img className=' ' src='data:image/png;base64,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'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-[#000000] text-base  font-medium m-0 pb-0'> Blog title goes here</p>
                        <div className="flex justify-between items-center my-0 py-0">
                            <p className='text-[#6E6E6E] text-xs font-medium'> Oct 31, 2023</p>
                            <p className=' flex justify-center items-center gap-1 text-[#6E6E6E] text-xs font-medium'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye " viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                    </svg> 
                                    <span>  10 views</span> 
                                    </p>
                        </div>
                      </div>
                </div>
                <div className='flex   items-start gap-5'>
                      <img className=' ' src='https://jazzy-llama-392a85.netlify.app/assets/reimg04-ff8148a6.png'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-[#000000] text-base  font-medium m-0 pb-0'> Blog title goes here</p>
                        <div className="flex justify-between items-center my-0 py-0">
                            <p className='text-[#6E6E6E] text-xs font-medium'> Oct 31, 2023</p>
                            <p className=' flex justify-center items-center gap-1 text-[#6E6E6E] text-xs font-medium'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye " viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                    </svg> 
                                    <span>  10 views</span> 
                                    </p>
                        </div>
                      </div>
                </div>
              </div>
              <p className="text-start text-[#3C0644] text-base font-medium cursor-pointer py-5">See all post</p>
             </div>


           </div>
           </div>
        </section>
        <section className=" bg-[url('https://jazzy-llama-392a85.netlify.app/assets/cbanner-415ee6f6.svg')] h-[448px] bg-no-repeat gap-6 bg-cover bg-center flex flex-col justify-center items-center">
            
           <div className="flex flex-col  items-center">
           <p className="md:w-[560px] w-11/12  md:text-[32px] text-[29px] font-bold text-white text-center mb-5 ">Unlock Your Potential with Premium Subscription Plans</p>
            <p className="text-white text-base font-normal md:w-[560px] text-center w-11/12">Access Exclusive Leadership and Mentorship Courses and Books – Your Path to Personal and Professional Growth Awaits</p>
            
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
  )
}

export default Blog;