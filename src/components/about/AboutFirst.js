import React from 'react'
import { Link } from 'react-router-dom'
import "./about.css"
import {services} from "../../dummydata"
import Cards from './Cards'


export default function AboutFirst() {
  return (
    <section className=' first'>
<div className='Cards_container'>
<Cards title={"Recruit scholars"} details={"We reach out to schools in rural areas, through conducting workshops and using online broadcasting methods, to identify students who are highly talented but come from low-income backgrounds. We distribute application forms to these students and invite them to apply to become scholars in our program. Those who are qualified are then chosen and recruited to receive our services."} icon="fa fa-handshake"/>
<Cards title={"Prepare our scholars"} details={"As part of our preparation toward school and scholarship applications, we coach our scholars on how to write scholarship and school application essays, introduce them to LinkedIn, and educate them on how to send out professional e-mails."} icon="fa fa-graduation-cap"/>
<Cards title={"Support our scholars"} details={"We assist our scholars with application fee waivers. We strive to assist our scholars in securing scholarships in top-tier universities in Ghana and abroad. While our scholars are in school, we provide them with buddy-up coaching, mentorship and job shadowing assistances. We also assist them in securing internship opportunities."} icon="fa fa-university"/>

</div>

    <div className='intro'>
    <img className='into_pic' src='../../../images/svg/sta2.jpg' />
    
    <div className='intro_to_service'>
    <div className='service_head_vision'>
    OUR VISION
    </div>
      <div className='service_vision'>The vision is to bridge the gap between 'high-talented-low-income' students and quality education.
      </div>
    </div>
    </div>

    <div className='more_info'>
    <div className='more_header'>
      <h1>THE SDG 4: QUALITY EDUCATION </h1>

      <div className='service_head'>
        OUR MISSION
      </div>
      <div className='mission'>
      <ul className='mission_point'>1. The ultimate goal is to effectively communicate and educate students on educational opportunities across the globe.</ul>
      <ul className='mission_point'>2. To expose students to mentorship opportunities that will sharpen them for their career life.</ul>
      </div>

    </div>
    <div>
    </div>
    </div>

    <div className='intro_one'>
    
    <div className='intro_to_service'>
      <div className='service_head'>
      GOALS                                                                                                                                                                                                                                                                                   
      </div>
      <div className='service_goals'>myScholarsHUB is an initiative aimed at empowering students from low-income communities by providing access to quality education and assisting them in applying for fully funded scholarships in top-tier universities
      </div>
    </div>
    <img className='into_pic' src='../../../images/svg/sta.jpg' />

    </div>

    
   
    <div className="space final">
    <div className='goals'>
    
    <div className="title">VALUES</div>
   
        <p className='name'>
        &#x2022; Strong belief in the limitless potential of young people to effect change and drive progress
        </p>
        <p className='name'>
       
        &#x2022; Deep commitment to providing compassionate and empathetic service to all individuals who benefit from our programs
        </p>
        <p className='name'>
        &#x2022; Firm commitment to achieving excellence and delivering outcome-focused programming
        </p>
        <p className='name'>
       
        &#x2022; Unwavering commitment to upholding ethical and moral principles that align with myScholarsHUB's mission
        </p>
        <p className='name'>
        &#x2022; Firm belief in the power of partnership and collaboration to help shape the success of our youth
        </p>
        <p className='name'>
       
        &#x2022; High respect for the unique talents, perspectives, and backgrounds of all individuals.
        </p>
      
        

   
    </div>
    </div>
    <div className="space final">
    <Link className="team" to="/team">
    <button className=''>THE TEAM</button>
    </Link>
    </div>
    </section>
    
  
  )
}
