import React from 'react'
import {partners} from "../../dummydata"
import Heading from '../common/heading/Heading'
import "../../App.css"

export default function Hpartners() {
  return (
    <div className='partners-home'>
    <Heading className="partners_title" subtitle='OUR PARTNERS' title='Our Collaborators' />

        <div className='partners_list_collaborators'>
        {partners.slice(0, 3).map((val) => (
            <div className='list_partners'>
            <img className='list_images' src={val.img} alt=""/>
            <p className='list_name'>{val.name}</p>
            </div>
            
            // <p>{val.name}</p>
            // <img src={partner.img}/>
            // <h4>{partner.name}</h4>
  ))}
        </div>
 
    </div>
  )
}
