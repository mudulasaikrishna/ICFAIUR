import React from 'react'
import './Contact.css'
import maily from './msg-icon.png'
import mid from './mail-icon.png'
import con from './phone-icon.png'
import loc from './location-icon.png'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3578db68-608b-479f-aac1-52ae05f7e4c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  

    const data = await response.json();
    setTimeout(()=>{
      if (data.success) {
        setResult("Form Sented Successfully : )");
        event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    },3000)
  }
  return (
    <div className='mainer'>
      <div className='fix'>
        <h2>CONTACT US</h2>
        <p>STAY IN TOUCH</p>
      </div>
      <div className='shcu'>
        <div className='lefty'>
          <h3>Send us a message<img alt='' className='huhu1' src={maily}></img></h3>
          <p>Feel free to reach out through contact forn or find our contact information below.
            your feedback, questions, and suggestions are important to us as we strive to provide 
            exceptional service to our university community
          </p>
          <ul>
            <li className='aads'><img alt='' className='huhu2' src={mid}></img>registrar@iuraipur.edu.in</li>
            <li className='aads'><img alt='' className='huhu3' src={con}></img>7999646657</li>
            <li className='aads'><img alt='' className='huhu4' src={loc}></img>Office No.113,
            First Floor, Karsan Chambers, Devendra Nagar, Raipur</li>
          </ul>
        </div>     
        <div className='righty'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='name' required name='Name' placeholder='enter your name here'></input>
            <label>Your email ID</label>
            <input type='email' required name='email' placeholder='enter your email here'></input>
            <label>Your Number</label>
            <input type='tel' required name='Contact Number' placeholder='give your number here'></input>
            <label>send your thoughts here</label>
            <textarea type='message' rows='3' placeholder='Send your thoughts to us'></textarea>
            <button className='btns' type='submit'>Send!</button>
            <span className='nut'>{result}</span>
          </form>
        </div>
      </div>
    </div>
  )
}
