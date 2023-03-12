import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero" >
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO myScholarsHUB' title='Best Online Education Expertise' />
            <p>Grab an opportunity to start your education at your dream school whiles on Scholarship.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Ecplore <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
