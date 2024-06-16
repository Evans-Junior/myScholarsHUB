import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import {  signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null); // State to track the authenticated user

  // Function to handle scroll event
  const handleScroll = () => {
    // Check if the window scroll position is greater than 73 pixels
    setIsScrolled(window.scrollY > 73);
  };

  const history = useHistory();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
        // history.push("/");
            alert("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            setUser(user);
        } else {
            // No user is signed in
            setUser(null);
        }
    });
    // Clean up by removing the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe()
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  
  return (
    <div className={`header-home ${isScrolled ? 'scrolled' : ''}`} id="header-home">
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Opportunities">Opportunities</Link>
            </li>
            <li>
              <Link to="/Blogs">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/apply">Apply</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user && (<li style={{marginTop:"0px", backgroundColor:"transparent", color:"white",cursor:"pointer"}} onClick={handleLogout}>
                        Logout
                    </li>
            )}
            
          </ul>
          <button className="toggle" onClick={() => setClick(!click)} id="style-1">
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
          
        </nav>
      </header>
    </div>
  );
};

export default Header;
