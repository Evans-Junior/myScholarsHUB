import React from "react"
import Heading1 from "../common/heading/Heading1"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/students/st3.jpeg' alt='' />
          </div>
          <div className='right row front_boxes'>
            <Heading1 subtitle='TAKE ADVANTAGE' title='Countless openings at these universities and institutions' />
            <div className='items'>
              {homeAbout.map((val,i) => {
                return (
                  <div className='item flexSB' key={i}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    
                    <a href={val.link} className="link_school" target="_blank">
                    <div className=''>
                    <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                    </a>
                      
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
