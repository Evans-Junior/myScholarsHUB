import React,{useRef } from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import emailjs from '@emailjs/browser';


const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ch24lm', 'template_y41zxpf', form.current, 'oyhKpuE8pEN_nUEBp')
   e.target.reset()
  };
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X.</span>
          </div>
          <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <div className='right row'>
            <input  type='email' name="email" className="email_here" placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
          </form>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>myScholarsHUB</h1>
            <span>Where preparedness meets opportunity.</span>
            <p>"An investment in knowledge pays the best interest." - Benjamin Franklin</p>
            <div className="social_media">
            <a href=""> <img src="./images/icons/linkedin.png" width={30} className="linkedin"/></a>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            </div>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                1 University Avenue, Berekuso; PMB CT 3, Cantonments, Accra, Ghana.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +233 (0)50 508 81 7557
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                myscholarshub2@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> @future codes
        </p>
      </div>
    </>
  )
}

export default Footer
