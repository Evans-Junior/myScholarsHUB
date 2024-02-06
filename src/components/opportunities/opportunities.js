import React from 'react'
import Hero from './components/Hero/Hero'
import './opportunities.css'
import Companies from './components/Companies/companies'
import Opp from './components/Opp.js/Opp'

export default function opportunities() {
  return (
    <div>
    <section className="opportunity_page">
   </section>
   <div className='White-gradient' />
    <Hero />
    <section className='companies'/>
    <Companies />
    <Opp />
    </div>
  )
}
