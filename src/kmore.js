import './kmore.css'
import React from 'react'
import teacher from './teacher.png'
import urc from './imagenew.png'
import Placement from './placement.png'
import pfz from './pfbc.png'
import Footer from './Footer' 

export default function Kmore() {
  return (
    <div className='kmore'>  
    <h2 className='blue'>ABOUT ICFAI</h2>
        <div className='modati0'>  
        <div className='kudi0'>
            <h2 className='pedda'>ICFAI Founder's Profile</h2>
            <p className='chinna'>
            Mr.N.J.Yasaswy (1950-2011), Founder of the ICFAI Group of educational institutions and a pioneer in promoting higher education in the private sector had a brilliant academic career: B.Com (Andhra University 1969 , First Rank), CA Inter (May 1971 , First Rank), CA Final (May 1973 , First Rank), ICWA Inter (July 1970 , First Rank) and ICWA Final (July 1972 , First Rank). He was the recipient of the Basu Foundation Award for the Best Student of the Year from both , The Institute of Cost and Works Accountants of India (in 1972) and The Institute of Chartered Accountants of India (in 1973).During 1974-1980, Mr. Yasaswy was associated with the Administrative Staff College of India as a Faculty Member. In 1981, he started his consultancy firm, Yasaswy Management Associates Private Limited, Hyderabad. Mr. Yasaswy was appointed by the Government of Andhra Pradesh as Chairman, Andhra Pradesh State Trading Corporation (1985-88), and Vice-Chairman, Public Enterprises Management Board (1986-88). 
            </p>
        </div>
            <div className='yadam0'>
                <img src={pfz} alt=''></img>
            </div> 
        </div>
        <div className='modati'> 
            <div className='yadam'>
                <img src={urc} alt=''></img>
            </div>  
            <div className='kudi'>
            <h2 className='pedda'>The ICFAI University, Raipur</h2>
            <p className='chinna'>The ICFAI University, Raipur has been established under Section 9(2) of the Chhatisgarh
            Private Universities (Establishment and Operations) Act 2005 and notified on March 25, 2011.
            The University is
             empowered by UGC to award degrees under Section 22 of UGC Act, 1956.
            The University accredited with NCTE (National Council for Teacher Education) for B.Ed programs.
            The University is a member of the Association of Indian Universities (AIU) New Delhi.
            The University is accredited with Bar Council of India for Law Programs.
            The University campus is spread over 30 acres of land. It is located at Kumhari, District-Durg.
            It has academic blocks with classrooms which are well-equipped with latest audio-visual equipment
            and there are facilities with well equipped library, laboratories and computer center.
            </p>
            </div>
        </div>

        <div className='rendo'>
            <div className='yadam1'>
                <h2 className='pedda'>Faculty of Management Studies</h2>
                <h3 className='madya'>About Department</h3>
                <p className='chinna'>
                The Faculty of Management Studies (FMS) at ICFAI University, 
                Raipur is a leading business The University was established 
                in 2011 under the umbrella of The Institute of Chartered Financial 
                Analysts of India (ICFAI) and has since then expanded its
                offerings to include various management courses.
                The Faculty of Management Studies at ICFAI University, Raipur, boasts 
                a diverse and highly qualified faculty drawn from prestigious
                institutions worldwide.Faculty members possess extensive academic qualifications 
                and rich industry experience, enabling them to deliver a 
                curriculum that is both theoretically robust and practically relevant.
                This blend of expertise ensures that students receive insights from 
                various sectors, enhancing their learning experience.
                The institute aims to produce graduates who are well-versed in 
                management principles and can contribute to the growth and
                development of organizations in various sectors.
                </p>
            </div>
            <div className='kudi1'>
                <img src={teacher} alt=''></img>
            </div>
        </div>
        <div className='moodu'>
            <div className="yadam2">
                <img src={Placement} alt=''></img>
            </div>
            <div className='kudi2'>
                <h2 className='pedda1'>The ICFAI Group, Placements</h2>
                <p className='chinna1'>The ICFAI University have a strong brand image of turning out well rounded students who have been transformed into leaders.
                Our students are making a difference to organizations both in India and around the world. Many leading Indian and global
                corporations prefer to hire students from IBS campuses for their proven worth.</p>

                <div className='info-placements'>
                    <div className='bpla'>
                        <h2 className='per'>90%</h2>
                        <p className='plai'>students placed</p>
                    </div>
                    <div className='bpla'>
                        <h2 className='per'>6.0 lpa</h2>
                        <p className='plai'>Average Package</p>
                    </div>
                    <div className='bpla'>
                        <h2 className='per'>10.0 lpa</h2>
                        <p className='plai'>Highest package</p>
                    </div>
                </div>
            </div>
        </div> 
        <Footer/>
    </div>
  )
}