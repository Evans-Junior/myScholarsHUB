import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <>
    
      <Back title='About Us' />
      
      <AboutCard />
      <div className="about_page">
      <h1>About Us</h1>
      </div>
    </>
  )
}

export default About
