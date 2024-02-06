import React from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './opp.css'
import {opp} from '../../../../dummydata'
import { sliderSettings } from '../../../utils/common'
export default function Opp() {
  return (
    <section className='r-wrapper'>
    <div className='paddings innerWidth r-container'>
      <div className='r-head flexColStart'>
        <span className='orangeText'>Best Choices</span>
        <span className='primaryText'> Popular Oportunities</span>
      </div>
      <Swiper {...sliderSettings}>
        {
          opp.map((card)=>(
            <SwiperSlide >
              <div className='flexColStart r-card'>
                <img src={card.image} alt ="icon"/>
                <span className='primaryText r-price'>
                  <span>{card.name}</span>
                </span>
                <span className='secondaryText'>{card.dueDate}</span>
                <span className='secondaryText'>{card.details}</span>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
      
    </section>
  )
}
