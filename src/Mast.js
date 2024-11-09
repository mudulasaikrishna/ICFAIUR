import './Mast.css'
import MT from './program-3.png'
import React from 'react'
import Footer from './Footer' 

export default function Mast() {
  return (
    <div className='Mast'>
        <div className='grad0'> 
        <div><h2 className='gh'>ABOUT MASTERS</h2></div>          
            <div><img className='Gi' src={MT} alt=''></img></div>
            <div>
                <h2 className='GS'>What is Masters Degree ?</h2>
                <p className='GSA'>
                A master’s degree is a graduate degree that allows students to build advanced knowledge of a specialized body of theoretical and applied knowledge, forge a deeper understanding of their area of study, and develop a range of skills applicable to their trade. With a master’s degree, you can typically have more opportunities to advance your career as a valuable, knowledgeable employee or pursue further postgraduate education, such as a doctoral degree.
                How many years is a master’s degree?
                </p>
            </div>
            <div>
                <h2 className='GS'>What are the Masters Programs ICFAI provides ?</h2>
                <p className='GSA'>MBA,  M.Tech,  MCA,  M.Sc(Chemistry),  M.Sc(Mathematics),  M.Sc(Physics),  MA(Yoga),  MA(Education),  MA(English Literature),  MA(Economics),    MA(Hindi Literature),    MA(Public Administration)</p>
            </div>
            <div>
                <h2 className='GS'>Duration of a Masters Degree</h2>
                <p className='GSA'>
                Master’s degrees typically take two years to complete, but the timeframe can vary from person to person. Depending on your degree program and whether you're going to school full-time or part-time, it could take you less
                time to get your master's degree How long it takes to get a master’s degree depends on you and the program you choose. Your college, degree program, desired pacing and personal goals are all factors to consider.
                Typically, it can take you about two years from start to finish. In some cases, you can finish in less time, and in others, you may want more time to progress through your courses or may need longer to meet specific program requirements.
                </p>
            </div>
            <div>
                <h2 className='GS'>Benefits of Earning a Masters Degree</h2>
                <p className='GSA'>
                In a competitive job market, companies may be more likely to select a candidate with an advanced degree over someone with similar experience and 
                a lower-level degree. Master's degrees help you gain specialized knowledge that can help you
                excel in your career. Earning a master's degree can also show employers you have the dedication and work ethic to be successful in a role also Earning a master's degree may increase your earning potential. Depending on the industry, those earning master's degrees could receive higher salaries than someone with a bachelor's or associate's degree in a similar subject.
                </p>
            </div>
        </div>    
        <Footer/>      
    </div>
  )
}
