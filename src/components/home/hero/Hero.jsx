import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"

function Hero (){
  return (
    <div className=" ">
      <section className="hero" >
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO myScholarsHUB' title='Best Online Education Expertise' />
            <p>Grab an opportunity to start your education at your dream school whiles on Scholarship.</p>
            <div className='button'>
            <Link className="" to="/apply">  
            <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </Link>
              <Link className="" to="/Blogs">
              <button className="button-explore">
                Explore <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </Link>     
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </div>
  )
}

export default Hero
