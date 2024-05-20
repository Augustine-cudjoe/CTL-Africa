import React,{useEffect} from 'react'
import OtherNav from '../othernav/OtherNav';
import { IoIosShareAlt } from "react-icons/io";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
function SingleBlog() {
  useEffect(()=>{
    document.title='singlBlog'
   },[])
  return (
    <div className='singleBlog'>
     <OtherNav/>
     <div className='max-h-screen'>
        <main>
            <section className=' min-h-screen  pt-28 flex flex-col justify-center items-center md:m-0 p-10'>
            <div className="flex  flex-col justify-center pt-md-5">
               <h1 className='single-blog-header text-[#2E2E2E] md:w-[694px] md:leading-[60px] leading-10 md:text-[32px] text-2xl font-medium text-center'> The Power of Servant Leadership: Inspiring <br/> Through Service </h1>
               
               <div className="my-10 flex flex-row md:gap-11 gap-5 items-center">

                <div className='flex flex-row gap-2 items-center'>
                <img className=' h-[38.54px] w-[38.54px]' src='https://jazzy-llama-392a85.netlify.app/assets/evproimg02-cc3d9886.png'/>
                   
                   <p className="person-name text-[#3C0644] md:text-xl text-sm md:font-semibold font-normal">Agathe Louineaux</p>
                  
                </div>
                <div >
                    <p className='text-[#2E2E2E] md:text-xl text-sm md:font-semibold  font-normal'> August 23, 2023</p>
                </div>

               </div>
               
               <div className="comment    md:w-[664px] w-full p-3 flex flex-row justify-between items-center border-b border-t border-[#E9E9E9]">
                    <p className=' flex flex-row gap-3 items-center cursor-pointer'> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-wechat text-2xl" viewBox="0 0 16 16">
                      <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                       <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                        </svg> 
                        <span className='text-base text-[#000000] font-normal'> 8 comments </span> 
                        </p>
                        <p className='flex flex-row gap-3 items-center cursor-pointer '>
                             < IoIosShareAlt className='w-[1em] h-[1em] text-2xl'/> 
                        <span className='text-base text-[#000000] font-normal'>Share</span>
                        </p>

                 </div>

            </div>
            <div className="post-img-holder flex items-center justify-center my-10">
            <img className='md:w-[820px] w-full h-full md:h-[471px] ' src='https://jazzy-llama-392a85.netlify.app/assets/rcimg2-07251cd1.png'/>
            </div>
             <div className="post-content md:w-[746px] w-full text-[#000000] text-base font-noramal leading-8 text-start">
                    <p className=''>
                    In the fast-paced, dynamic world of leadership, there is a growing recognition of the value of a 
                    leadership style that emphasizes empathy, collaboration, and a focus on the well-being of the team.
                     This approach, known as servant leadership, has gained prominence as a powerful way to inspire and
                     motivate teams, fostering a culture of trust and empowerment. In this article, we will explore the
                     concept of servant leadership, its key principles, and how it can make a positive impact in any organization. </p>
                    <p> What Is Servant Leadership? <br/>
                        Servant leadership, first introduced by Robert K. Greenleaf in his 1970 essay "The Servant as Leader,"
                        ¨ is a leadership philosophy that prioritizes the needs of the team members and the community above 
                        personal gain. At its core, servant leadership is about serving others to help them achieve their full 
                         potential and, in doing so, enabling the organization to flourish. This leadership style is based on the
                          belief that by taking care of the people, the people will take care of the mission.
                      </p>
                      <p>Key Principles of Servant Leadership <br/>
                        Listening: A servant leader actively listens to their team members, seeking to understand their needs
                         concerns, and ideas. This empathetic listening creates a sense of belonging and trust within the team.
                         Empathy: Servant leaders show genuine care and concern for the well-being of their team members.
                          They understand the personal and professional challenges their team faces and provide support and 
                          resources to help them overcome these challenges.Healing: Servant leaders create a healing  
                          environment where team members feel safe to express themselves, recover from setbacks, and grow.
                          They foster a culture of forgiveness, compassion, and support.
                        Awareness: Servant leaders are self-aware and socially aware They understand their own strengths and weaknesses and are attuned to the emotions and dynamics  
                        within their team.</p>
                        <p> The Impact of Servant Leadership <br/>
                        Servant leadership has been shown to have a profound impact on organizations. When leaders 
                         prioritize the well-being and development of their team members, it leads to increased employee 
                        engagement, satisfaction, and productivity. Here are some key benefits of implementing servant 
                          leadership: Enhanced Team Morale: Servant leaders create a positive and supportive work 
                          environment, leading to higher job satisfaction and morale among team members. Improved 
                           Collaboration: Teams led by servant leaders tend to work collaboratively, leading to better problem- 
                          solving and innovation. Reduced Turnover: When employees feel valued and supported, they are more
                           likely to stay with the organization, reducing turnover and recruitment costs.
                        </p>
                        <p>
                        Conclusion <br/>
                        Servant leadership is not a one-size-fits-all approach, but rather a set of guiding principles that can be 
                         adapted to various leadership situations. By prioritizing the well-being and growth of team members,
                        
                        servant leaders inspire loyalty, trust, and a sense of shared purpose. In today's ever-evolving world of
                         leadership, the power of servant leadership stands out as a transformative force that can drive 
                        success, enrich organizational culture, and create a lasting legacy of leadership excellence.
                        </p>
             </div>
             <div className=" flex flex-col justify-center items-center  md:m-0 p-10 " id='mypost'>


            <div className=" comment-tab md:w-[664px] w-full bg-[#F5CDFB] p-3 flex flex-row justify-between items-center gap-5  "> 
 <p className='text-base text-[#000000] font-medium'> To leave a comment 
 
  </p>
  <p className=' sign-in '>
     <Link to={`/login`}>
     Sign in
     </Link>
      </p>
 
            </div>
            <div className=" my-20 md:mx-0 mx-3 md:w-[664px] w-full space-y-10" id='comment-holder'>
  <div className="grid grid-cols-3 gap-5">
  <div className=" flex justify.center items-start">
      <img className='w-16 h-16 rounded-full mr-2' src='https://picsum.photos/200/300?grayscale'/>
   
  </div>
   
 
    <div className="post-content-right col-span-2 space-y-4">
      <h6 className='text-[#1D2026] text-base font-medium flex justify-between items-cente'>Ronald Richards <span className='text-[#6E7485] text-sm font-medium'> 1 week ago</span></h6>
         <p className='text-start  text-[#656565] text-base font-normal max-w-lg'>Thank you for your helpful video. May I ask what is the
       application use to demo the animation at [4:24], is it the
        runnable mobile application? As what I know, Figma Mirror
         app cannot do that. Please help me Great thanks</p>
    </div>
 
  </div>
  <div className="grid grid-cols-3 gap-5">
  <div className=" flex justify.center items-start">
      <img className='w-16 h-16 rounded-full mr-2' src='https://picsum.photos/200/300?grayscale'/>
   
  </div>
   
 
    <div className="post-content-right col-span-2 space-y-4">
      <h6 className='text-[#1D2026] text-base font-medium flex justify-between items-cente'>Ronald Richards <span className='text-[#6E7485] text-sm font-medium'> 1 week ago</span></h6>
         <p className='text-start text-[#656565] text-base font-normal max-w-lg'>Thank you for your helpful video. May I ask what is the
       application use to demo the animation at [4:24], is it the
        runnable mobile application? As what I know, Figma Mirror
         app cannot do that. Please help me Great thanks</p>
    </div>
 
  </div>
  <div className="grid grid-cols-3 gap-5">
  <div className=" flex justify.center items-start">
      <img className='w-16 h-16 rounded-full mr-2' src='https://picsum.photos/200/300?grayscale'/>
   
  </div>
   
 
    <div className="post-content-right col-span-2 space-y-4">
      <h6 className='text-[#1D2026] text-base font-medium flex justify-between items-cente'>Ronald Richards <span className='text-[#6E7485] text-sm font-medium'> 1 week ago</span></h6>
         <p className='text-start text-[#656565] text-base font-normal max-w-lg'>Thank you for your helpful video. May I ask what is the
       application use to demo the animation at [4:24], is it the
        runnable mobile application? As what I know, Figma Mirror
         app cannot do that. Please help me Great thanks</p>
    </div>
 
  </div>
  <div className="grid grid-cols-3 md:gap-4 gap-0  ">
  <div className=" flex justify.center items-start">
      <img className='w-16 h-16 rounded-full mr-2' src='https://picsum.photos/200/300?grayscale'/>
   
  </div>
   
 
    <div className="post-content-right col-span-2 space-y-4">
      <h6 className='text-[#1D2026] text-base font-medium flex justify-between items-cente'>Ronald Richards <span className='text-[#6E7485] text-sm font-medium'> 1 week ago</span></h6>
         <p className='text-start  text-[#656565] text-base font-normal max-w-lg'>Thank you for your helpful video. May I ask what is the
       application use to demo the animation at [4:24], is it the
        runnable mobile application? As what I know, Figma Mirror
         app cannot do that. Please help me Great thanks</p>
    </div>
 
  </div>
   

             </div>
 
           </div>
           <div className='flex flex-col justify-center '>
            <textarea rows="5" cols="90" className='mt-6 !bg-white border border-[#E9E9E9] focus:outline-none p-3 w-full'>

            </textarea>
              <div className="flex  justify-center">
                <button className='mt-4 w-full bg-[#3C0644] text-white text-base font-normal p-2 '> Send</button>
              </div>
           </div>
</section>
            
</main>
 <Footer/>
     </div>
    
    </div>
  )
}

export default SingleBlog;