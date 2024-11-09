import './Hero.css'
import narrow from './dark-arrow.png'
import maini from './maini.png'
import sm from './smallmain.png'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate=useNavigate()
  return (
    <div className='hero'>     
      <div className='cotations'>
      <h1>Where Ambitions Meet Education</h1>
      <p>Our University is a diverse, innovative institution that fosters learning, growth, and real-world impact for students</p>
      <button className='btn2' onClick={()=>{ navigate("/kmore")}}>Know More<img src={narrow} alt=''></img></button>
      </div>
    </div>

  )
}
 