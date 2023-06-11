import React,{useState } from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import emailjs from '@emailjs/browser';


const Footer = () => {

const[email,setEmail]=useState("");
const[open,setOpen]=useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(email)

    const content={
      from_name:email,
    }
    emailjs.send('service_dv5j5kh', 'template_wt81n0c', content, 'curQix_GutZKg2kwj')
    .then((response) => {
        setOpen(!open)
      console.log('SUCCESS!', response.status, response.text);
   }, (err) => {
      console.log('FAILED...', err);
   });
  setEmail("")
  };
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X.</span>
          </div>
          <div className={open?'contact__form':"delivered"}>
          <div className='right row'>
          {open?<input type='email' name="email" className="email_here" placeholder='Enter email address' onChange={(e)=>{setEmail(e.target.value)}} required/>:""}
          {open?<i className='fa fa-paper-plane' name='submit' type='submit' onClick={sendEmail}></i>:""}
            {open?"":<h3 clasName="delivered">Sent <i class="fa fa-check-circle" id="del" aria-hidden="true"></i></h3> }
          </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className=' logo'>
            <h1>myScholarsHUB</h1>
            <span>Where preparedness meets opportunity.</span>
            <div className="set_group">
            <p className="footer_advicer">"An investment in knowledge pays the best interest." - Benjamin Franklin</p>
            <div className="social_media">
            <a href=""> <img src="./images/icons/linkedin.png" width={30} className="fab linkedin"/></a>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            </div>
            
            </div>
          </div>

          <div className='box last'>
            <h3 className="title_question">Have a Questions?</h3>
            <ul>
              <li className='flow'>
                <i className='fa fa-map'></i>
                1 University Avenue, Berekuso; PMB CT 3, Cantonments, Accra, Ghana.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +233 (0)50 508 81 7557
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                myscholarshub.uni@gmail.com

              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made by <i className='fa fa-heart'></i> @future codes
        </p>
      </div>
    </>
  )
}

export default Footer
