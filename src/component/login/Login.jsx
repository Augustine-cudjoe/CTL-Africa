import React,{useState,useEffect} from 'react'
import OtherNav from "../../pages/othernav/OtherNav"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import "../signup/signup.css"
function Login() {
    const [myeye, setMyeye]=useState(false)
    const handleMyeye=()=>{
      setMyeye(!myeye)
    }
    useEffect(()=>{
      document.title='login'
     },[])
  return (

    <div className='min-h-dvh' >
     <OtherNav/>
     <main className='login min-h-screen'>
        <section className=' min-h-screen md:py-32 py-20'>
            <div className="flex flex-col justify-center items-center">
            <div className='shadow-md  h-auto md:w-[664px] w-full border rounded-sm md:p-16 p-5  md:m-0 m-5 '>
            <h1 className="text-[#000000] md:text-[40px] text-xl font-normal text-center mb-20">Login in to your account</h1>
            <div className="flex flex-col md:flex-row justify-between gap-5 mb-10 items-center" >
             <p className='md:w-[260px] h-[50px]  w-full text-[#2E2E2E]  border border-[#E9E9E9] p-3 flex justify-center items-center gap-3'>
             <img className='w-[1em] h-[1em] text-3xl' src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' alt='google' />
           
              <span className='font-medium md:text-sm text-xs'>
              Continue with Google
             </span>
             
             </p>
             <p className='md:w-[260px] h-[50px] mt-0 w-full text-[#2E2E2E]  border border-[#E9E9E9]  flex justify-center items-center gap-3'> 
                   <span className=' bg-blue-500 rounded-full '>
                   <FaFacebook  className="w-[1em] h-[1em] text-3xl text-white  "  />
                  
                   </span>
                <span  className='font-medium md:text-sm text-xs'> Continue with Facebook</span>   </p>
            
            </div>
            <div className='flex relative gap-5 mb-10' id='loginOr'>
                <hr className='w-[250px] w-full' />
                <p className='text-sm  absolute bottom-[-0.78rem] md:left-[260px] left-[139px]'> or</p>
                <hr className='w-[255px] w-full' />
            </div>
            <div className="flex flex-col space-y-5 mb-10 ">
                <input className=' border border-[#E9E9E9] w-full p-2 rounded-md' type='email' placeholder='Email Address'/>
                <div className="flex relative ">
                <input className='border border-[#E9E9E9] w-full p-2 rounded-md ' type='password' placeholder='Password'/>
                <p  onClick={handleMyeye} className='absolute right-6 top-3'> 
            {
             myeye? (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
              className="bi bi-eye text-gray-460 cursor-pointer text-2xl" viewBox="0 0 16 16">
             <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
             <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
           </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-eye-slash text-gray-460 cursor-pointer text-2xl" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                        </svg>)
            }
               </p>
                </div>
            </div>
            <p className='text-sm font-normal text-center'> By clicking “Sign in”, you agree to our Term of Use and our Privacy Policy </p>
            <div className="flex  justify-center">
           <button type='button' className='bg-[#3C0644] text-white w-[292px] p-3 rounded-md my-5' id='login-btn'>Login</button>
            </div>
            <p className='text-sm font-normal text-center'> Forget your password ?</p>
              <div className="flex items-center justify-center mt-16">
              <p className='flex items-center gap-3 text-center  text-sm '> Don't have an account? 
              <Link to='/signup' className='text-[#3C0644] font-semibold ' >Sign Up</Link>
              </p>
            
              </div>
            </div>
            </div>
        </section> 
     </main>
    </div>
  )
}

export default Login;