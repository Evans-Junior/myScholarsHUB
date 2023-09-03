import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"


function Hero (){
  return (
    <>
    <motion.section className="hero" 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 0.5}}
    >
      <div className='container'>
        <div className='row'>
          <motion.div>
          <Heading subtitle="Welcome To myScholarsHUB" title='Best Online Education Expertise' style_name="row_header"/>
          </motion.div>
          <p className="row_header2">Grab an opportunity to start your education at your dream school whiles on Scholarship.</p>
          <div className='button'>
            <motion.button className='primary-btn'
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{duration: 1, delay: 0.5}}
            >
              <Link className="home_get_started" to='/apply'>GET STARTED NOW</Link> <i className='fa fa-long-arrow-alt-right'></i>
            </motion.button>
            <motion.button
              initial={{x: 300}}
              animate={{x: 0}}
              transition={{duration: 1, ease: "easeInOut",delay: 0.5}}
            >
             <Link className="home_get_explore" to='/about'>Explore</Link>  <i className='fa fa-long-arrow-alt-right'></i>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
    <div className='margin'></div>
  </>
  )
}

export default Hero
