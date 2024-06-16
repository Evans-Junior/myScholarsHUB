import React from "react"
import { awrapper } from "../../dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box1 flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text_one'>
                  <h2>{val.data}</h2>
                  <h2>{val.title}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
