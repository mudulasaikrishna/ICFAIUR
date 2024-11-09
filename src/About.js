import React from 'react'
import './About.css'
import ui from './uni.png'
import play from './play-icon.png'
import { useNavigate } from 'react-router-dom'

export default function About({setPlayState}) {
  const navigate=useNavigate()

  return (
    <div className='abt'>
      <div className='ug'>
        <h2 className='i'>ABOUT US</h2>
        <p className='po'>MORE ABOUT COLLEGE</p>
      </div>
      <div className='base2'>
        <div className='left'>
          <img className='pic' src={ui} alt=''/>
          <img className='playbtn' src={play} alt='' onClick={()=>
            {setPlayState(true)}}/>
        </div>
        <div className='right'>
          <h3>The Icfai University, Raipur</h3>
          <p className='pl'>The ICFAI University, Raipur has been established under Section 9(2) of the Chhatisgarh Private Universities (Establishment and Operations) Act 2005 and notified on March 25, 2011.
          The University is empowered by UGC to award degrees under Section 22 of UGC Act, 1956.
          The University accredited with NCTE (National Council for Teacher Education) for B.Ed programs.
          The University is a member of the Association of Indian Universities (AIU) New Delhi.
          The University is accredited with Bar Council of India for Law Programs.
          The University campus is spread over 30 acres of land. It is located at Kumhari, District-Durg.
          It has academic blocks with classrooms which are well-equipped with latest audio-visual equipment and there are facilities with well equipped library, laboratories and computer center.</p>
          <div className='edo'><button onClick={()=>{  navigate("/Kmore1")}} className='btnx'>More About Us</button></div>
        </div>
      </div>
    </div>
  )
}
