import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      document.getElementById("style-1").style.color="#fff";
    } else if (window.scrollY > 70) {
      document.getElementById("style-1").style.color="#000";
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

function scrollFunction() {
  
}


  return (
    <div className="header-home">
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/Blogs'>Blog</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/apply'>Apply</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
          </div>
          <button className='toggle' onClick={() => setClick(!click)} id="style-1">
            {click ? <i className='fa fa-times'> </i> : <i onScroll={listenScrollEvent} className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
