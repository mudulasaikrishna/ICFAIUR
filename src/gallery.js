import React from 'react'
import './gallery.css'
import onei from './img1.png'
import twoi from './iimg2.png'
import threei from './iimg3.png'
import fouri from './iimg4.png'
import fivei from './iimg5.png'
import sixi from './iimg6.png'
import f from './iimg11.png'
import s from './iimg14.png'
import n from './pfbc.png'
import z from './iimg12.png'
import { useNavigate } from 'react-router-dom'

export default function Gallery() {
  const navigate=useNavigate()

  return (
      <div className='mgi'>
        <div className='fix'>
          <h2>GALLERY</h2>
          <p>CAMPUS PICTURES</p>
        </div>
        <div className='gi'>
            <img className=' spo' src={f} alt=''></img>
            <img className='im dt' src={onei} alt=''></img>
            <img className='im' src={twoi} alt=''></img>
            <img className='im' src={n} alt=''></img>
            <img className='im' src={threei} alt=''></img>
            <img className='im' src={fouri} alt=''></img>
            <img className='im' src={fivei} alt=''></img>
            <img className='im' src={sixi} alt=''></img>
            <img className='ims' src={z} alt=''></img>
            <img className=' spo' src={s} alt=''></img> 
        </div>
        <div className='btnd'>
          <button onClick={()=>{navigate("/mimages")}} className='btn4'>More Pictures ?</button>
        </div>
    </div>
  )
}
