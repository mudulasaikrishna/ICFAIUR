import React from 'react'
import './Programs.css'
import graduation from './program-icon-1.png'
import Masters from './program-icon-2.png'
import gradpro from './gradpro.png'
import mastpro from './mastpro.png'
import { useNavigate } from 'react-router-dom'

export default function Programs() {
  const navigate=useNavigate()

  return (
    <div className='basement'>
      <div className='fix'>
        <h2>PROGRAMS WE OFFER</h2>
      </div>
      <div>
        <ul className='ulo'>
          <li className='lo'>B.Tech,</li>
          <li className='lo'>B.Tech (Lateral Entry),</li>
          <li className='lo'>BBA,</li>
          <li className='lo'>BCA,</li>
          <li className='lo'>BA (Hon's),</li>
          <li className='lo'>B.Com,</li>
          <li className='lo'>B.Com (Hon's),</li>
          <li className='lo'>B.sc,</li>
          <li className='lo'>B.Sc (Hon's),</li>
          <li className='lo'>B.Ed,</li>
          <li className='lo'>BA-LLB. (Hon's),</li>
          <li className='lo'>LLB. (Hon's),</li>
        </ul>
      </div>
      <div className='base'>
      <div className='supports'>
      <img src={gradpro} alt='0
      ' className='imgs'></img>
       <div className='captions' onClick={()=>{  navigate("/Grad")}}>
        <img src={graduation} alt='2' className='one'></img>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='supports'>
          <img src={mastpro} alt='0' className='imgs'></img>
        <div className='captions' onClick={()=>{  navigate("/Mast")}}>
          <img src={Masters} alt='1' className='two'></img>
          <p>Master's Degree</p>
        </div>
      </div>
      </div>
    </div>
  )
}
