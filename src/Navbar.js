import React from 'react'
import './Navbar.css'
import unilogo from './ulogo.png'
import menu from './menu-icon.png'
import { useEffect, useState } from 'react'
import {Link} from 'react-scroll';

export default function Navbar() {
  const [nava, setnava]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setnava(true): setnava(false)
    })
  },[])

  const [meanu, setmeanu]=useState(false)
  const togglemenu=()=>{
    meanu ? setmeanu(false) : setmeanu(true)
  }
    return (
    <div>
      <nav className={` ${nava ? 'darknav' : ''} hv`}>
        <div>
        <img className='ulogo' src={unilogo} alt=''></img>       
        </div>
        <ul className={meanu? '':'hide-menu'}>
            <li className='zxc'><Link  to="hero"  smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='zxc'><Link  to="basement"  smooth={true} offset={-60} duration={500}>Programs</Link></li>
            <li className='zxc'><Link  to="abt"  smooth={true} offset={-50} duration={500}>About</Link></li>
            <li className='zxc'><Link  to="mgi"  smooth={true} offset={-30} duration={500}>Gallery</Link></li>
            <li className='zxc'><Link  to="testi"  smooth={true} offset={0} duration={500}>Testimonials</Link></li>
            <li> <Link to="mainer" smooth={true} offset={-60} duration={500}><button className='btn1'>Contact</button></Link></li>
        </ul>
        <img className='menu' src={menu} alt='' onClick={togglemenu}></img>
      </nav>
    </div>
  )
}

