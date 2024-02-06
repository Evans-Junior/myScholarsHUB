import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  const listenScrollEvent = (event) => {
    const header = document.querySelector('.header-home');
  
  if (window.scrollY < 73) {
    header.style.backgroundColor = 'transparent';
  } else {
    header.style.backgroundColor = '#cfbaba';
  } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  

  useEffect(() => {
    const changeBackground = () => {
      const header = document.querySelector('.header-home');
      if (header.backgroundColor==='white-background') {
        header.bacjgroundColor = '#1eb2a6';
      } else {
        header.classList.add('white-background');
      }
    }

    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);



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
              <Link to='/Opportunities'>Opportunities</Link>
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
          <button className='toggle' onClick={() => setClick(!click)} id="style-1">
            {click ? <i className='fa fa-times'> </i> : <i onScroll={listenScrollEvent} className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
