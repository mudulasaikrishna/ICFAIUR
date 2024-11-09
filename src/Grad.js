import './Grad.css'
import GT from './program-2.png'
import React from 'react'
import Footer from './Footer' 

export default function Grad() {
  return (
    <div className='Grad'>
        <div className='grad0'> 
        <div><h2 className='gh'>ABOUT GRADUATION</h2></div>          
            <div><img className='Gi' src={GT} alt=''></img></div>
            <div>
                <h2 className='GS'>What is Graduate Degree ?</h2>
                <p className='GSA'>A graduate degree is a term used to refer to an academic degree that is earned when a student completes graduate school. Typically, those who enroll in graduate schools and pursue such degrees have already completed undergraduate studies, 
                    have clear goals in mind, and have chosen a career path they want to follow.
                </p>
            </div>
            <div>
                <h2 className='GS'>What are the Graduate Programs ICFAI provides ?</h2>
                <p className='GSA'>Btech,  Btech(LE),  BBA,  BCA,  BA,  BA(Hons), B.Com,  B.Com(Hons),  B.Sc,  B.Sc(Hons),  B.Ed,  BA-LLB.(Hons),  LLB.(Hons)</p>
            </div>
            <div>
                <h2 className='GS'>Duration of a Graduate Degree</h2>
                <p className='GSA'>
                Time is money, right? Well, combine that kind of money with actual university fees, and you have people hesitant to pursue graduate degrees. But, the good news is that some graduate degree types are relatively shorter than undergraduate degree programs, 
                so you can expect to complete such a program in a few years. To be more precise, a full-time master’s degree only requires around two years to complete, professional doctorate degrees take two to five years, and a Ph.D. demands three or four years.
                As the case with any degree is, whether it be undergraduate or graduate, if you pursue a different study mode, you can expect the duration of the program to double or, in some cases, to decrease to almost half the extent required in full-time programs.
                </p>
            </div>
            <div>
                <h2 className='GS'>Benefits of Earning a Graduate Degree</h2>
                <p className='GSA'>
                If you are still unsure whether the time, money, efforts, and emotional investment in a graduate program would be worth it, let’s focus on the positives and see how much you have to gain if you go through with this step. Below are some of the many benefits
                 you can expect to welcome upon earning your graduate degree.One of the top reasons why graduate degrees are so appealing is the opportunity to gain even more specific and detailed knowledge on your field or subject. It will be highly beneficial for you as 
                 it shows your dedication to improving yourself and enhancing your expertise and credibility. Plus, if you enjoy what you do, continuing your studies on something you are genuinely interested in will always be fun.              
                </p>
            </div>
        </div>     
        <Footer/>
    </div>
  )
}
