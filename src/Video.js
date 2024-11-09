import React, { useRef } from 'react'
import './Video.css'
import av from './iur.mp4'

export default function Video({playState, setPlayState}) {

    const p=useRef(null)
    const exitplay=(a)=>{
        if(a.target===p.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`vdzsod ${playState? '':'hide'}`} ref={p}
    onClick={exitplay}>
        <video src={av} autoPlay controls muted></video>     
    </div>
  )
}
