import React from 'react'
import NavbarMenu from "./pages/navbar/NavbarMenu"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css'
import './App.css'
import Courses from './component/courses/Courses'
import Library from './component/library/Library'
import Events from './component/event/Events'
import Prices from './component/price/Prices'
import Blog from './component/blog/Blog'
import Login from './component/login/Login'
import Signup from './component/signup/SignUP'
import SingleBlog from './pages/singleBlog/SingleBlog'
import Singleprices from './pages/singlePrices/Singleprices'
import SingleCourses from './pages/singleCourses/SingleCourses'
import SingleLibrary from './pages/singleLibrary/SingleLibrary'
import SingleEvent from './pages/singleEvent/SingleEvent'
import SingleHome from './pages/singleHome/SingleHome'
function App() {
  

  return (
     <div>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={ <NavbarMenu/>} />
          <Route path="/courses" exact element={ <Courses/>} />
          <Route path="/library" exact  element={ < Library/>} />
          <Route path="/events" exact  element={ < Events/>} />
          <Route path="/prices" exact  element={ < Prices/>} />
          <Route path="/blog" exact  element={ < Blog/>} />
          <Route path="/login" element={ < Login/>} />
          <Route path="/signup" element={ <Signup/>} />
          <Route path="/singleblog/:id" element={ <SingleBlog/>} />
          <Route path="/singleprice" element={ <Singleprices/>} />
          <Route path="/singleCourses/:id" element={ < SingleCourses/>} />
          <Route path="/SingleLibrary/:id" element={ < SingleLibrary/>} />
          <Route path="/singleEvent/:id" element={ <SingleEvent/>} />
          <Route path="/singleHome" element={ <SingleHome/>} />
          </Routes>
        
       
      </BrowserRouter>
     
     </div>
     
  )
}

export default App
