import React, { useRef } from 'react'
import './Testimonials.css'
import back from './back-icon.png'
import next from './next-icon.png'
import u1 from './r1.png'
import u2 from './user-1.png'
import u3 from './user-2.png'
import u4 from './user-3.png'
import u5 from './user-4.png'
import sai from './saimain.png.jpg'

export default function Testimonials() {
    const slidera=useRef()
    let transx=0

    const slideback=()=>{
        if(transx < +0){
            transx+=25
        }
        slidera.current.style.transform=`translatex(${transx}%)`
    }
    const slideforward=()=>{
        if(transx >-55){
            transx-=20
        }
        slidera.current.style.transform=`translatex(${transx}%)`
    }

  return (
    <div className='testi'>
        <div className='fix'>
            <h2>TESTIMONIALS</h2>
            <p className='kjh'>STUDENT'S OPINION ON OUR UNIVERSITY</p>
        </div>
        <div className='ty'>
            <div className='nm'>
            <img src={back} className='bk' alt='' onClick={slideback}></img>
            <img src={next} className='nxt' alt='' onClick={slideforward}></img>
            </div>
            <div className='slider'>
                <ul ref={slidera} className='uis'>
                <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={sai} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Sai-krishna</h4>
                                <span>(B.tech)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>ICFAI UNIVERSITY is one of the leading college in Raipur, the University offers a wide range of programs & faculties are knowledgeable in their fields, University provides placements also.</p>
                        </div>
                    </li>
                    <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={u1} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Pranay Dutt</h4>
                                <span>(BBA, General)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>The course curriculum is comprised of different subjects in 1st year you will find subjects similar to 11th & 12th commerce but from 2nd yr onwards you will find more subjects related to business and subjects.</p>
                        </div>
                    </li>
                    <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={u2} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Nidhi sharma</h4>
                                <span>(BSC)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>The training and placement cell of the college counsels the students and trains them to provide job offer to students. The internship is offered to the college students who are about to complete.</p>
                        </div>
                    </li>
                    <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={u3} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Sonam</h4>
                                <span>(BCA)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>Overall, it is a great college to study in which provides a proper balance between work and personal life. There are many extracurricular activities available in college from time to time</p>
                        </div>
                    </li>
                    <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={u4} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Yash Shibu</h4>
                                <span>(BBA)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>Notes are provided in form of online & are not relevant and are not easy to understand I would prefer clearly doubts with faculty during the same time when it arises rather than waiting to go home</p>
                        </div>
                    </li>
                    <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={u1} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Nadeem Khan</h4>
                                <span>(MBA)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>In our batch, all the students get placements offers but due to the reason of further studying, almost all students were denied the offer. The college provides internships in various local as well as i.</p>
                        </div>
                    </li>
                    <li className='sd'>
                        <div className='slide'>
                            <div><img className='rp' src={u5} alt=''></img></div>
                            <div className='ma'>
                                <h4 className='h'>Adapa hima sai</h4>
                                <span>(Btech)</span>
                            </div>
                        </div>
                        <div>
                            <p className='para'>Above 75% of students got placed in our college. The highest salary package offered is 18 LPA. The average salary package offered is 11 LPA. The lowest salary package offered is 9 L.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
