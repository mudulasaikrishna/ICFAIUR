import React, { useState } from 'react'
import About from "./About"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Kmore from "./kmore"
import Programs from "./Programs"
import Grad from "./Grad"
import Mast from "./Mast"
import Kmore1 from "./Kmore1"
import Gallery from "./gallery"
import Mimages from "./mimages"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "./Footer"
import Video from "./Video"
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [playState, setPlayState]=useState(false)

  return (
    <div className='cont'>
    <HashRouter>
       <Routes>
         <Route path='/' element={<Navbar/>}/>
       </Routes>
       <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/kmore' element={<Kmore/>}/>
       </Routes>
       <Routes>
          <Route path='/' element={<Programs/>}/>
          <Route path='/Grad' element={<Grad/>}/>
          <Route path='/Mast' element={<Mast/>}/>
       </Routes>
       <Routes>
          <Route path='/' element={<About setPlayState={setPlayState}/>}/>
          <Route path='/kmore1' element={<Kmore1/>}/>
       </Routes>
       <Routes>
         <Route path='/' element={<Gallery/>}/>
         <Route path='/mimages' element={<Mimages/>}/>
       </Routes>
       <Routes>
         <Route path='/' element={<Testimonials/>}/>
       </Routes>
       <Routes>
         <Route path='/' element={<Contact/>}/>
       </Routes>
       <Routes>
         <Route path='/' element={<Footer/>}/>
       </Routes>
      <Video setPlayState={setPlayState} playState={playState}/> 
    </HashRouter>         
    </div>  
  );
}

export default App;
