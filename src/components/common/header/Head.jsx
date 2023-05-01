import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB mobile_sub'>
          <div className='logo'>
            <h1>myScholarsHUB</h1>
            <span>Where preparedness meets opportunity.</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head