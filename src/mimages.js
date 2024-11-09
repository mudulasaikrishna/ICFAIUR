import './mimages.css'
import React from 'react'
import one from './iimg2.png'
import two from './iimg3.png'
import three from './iimg4.png'
import four from './iimg5.png'
import five from './iimg6.png'
import six from './iimg7.png'
import seven from './iimg9.png'
import eight from './iimg11.png'
import nine from './iimg12.png'
import ten from './extra.png'
import eleven from './iimg14.png'
import twelve from './imagenew.png'
import Footer from './Footer' 

export default function mimages() {
  return (
    <div className='mimages'>  
      <h2 className='blue'>CAMPUS IMAGES</h2>
      <div className='images-c'>
        <img src={eight} className='spc' alt=''></img>
        <img src={one} className='reg' alt=''></img>
        <img src={two} className='reg' alt=''></img>
        <img src={twelve} className='reg' alt=''></img>
        <img src={three} className='reg' alt=''></img>
        <img src={four} className='reg' alt=''></img>
        <img src={five} className='reg' alt=''></img>
        <img src={six} className='reg' alt=''></img>
        <img src={seven} className='reg' alt=''></img>
        <img src={nine} className='reg' alt=''></img>
        <img src={ten} className='reg' alt=''></img>
        <img src={eleven} className='spc' alt=''></img>
      </div>   
    <Footer/>
    </div>
  )
}
