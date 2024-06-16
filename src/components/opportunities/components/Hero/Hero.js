import React, { useState } from 'react';
import './Hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
export default function Hero({setSearch}) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    setSearch(searchValue.trim()); // Save the trimmed search value
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value); // Update searchValue state with input value
  };

  return (
    <section className="hero-wrapper">
      <div className='padding innerWith flexCenter hero-container'>
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
          <div className='orange-circle'/>
            <h1>Discover<br/>
             Most Suitable 
             <br/> Opportunities
            </h1>
          </div>
          <div className='flexColStart hero-des'>
            <span className='secondaryText'>Find the best opportunities for you</span>
            <span className='secondaryText'>Forget all difficulties in finding bootcamps, jobs and other exciting discoveries here!</span>
          </div>
          <div className='flexCenter search-bar'>
            <HiLocationMarker color="#1eb2a6" size={25}/>
            <input type='text'
            placeholder='Find an opportunity'
            value={searchValue}
              onChange={handleInputChange} // Capture input change
            />
            <button onClick={handleSearch} style={{ margin: '0px 10px 0 0', backgroundColor: '#1eb2a6',color: '#fff' }} >Search</button>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8000} end={9000} duration ={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>New Opporunities</span>
          </div>
          <div className='flexColCenter stat'>
              <span>
                <CountUp start={1950} end={2000} duration ={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Scholarships</span>
          </div>
          <div className='flexColCenter stat'>
              <span>
                <CountUp end={250} duration ={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Jobs</span>
          </div>
          </div>
        </div>
        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src='./images/blog/side.jpg' alt='icon' />
          </div>
          </div>
      </div>
    </section>
  )
}
