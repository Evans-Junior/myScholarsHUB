import React from "react"

const Heading = ({ subtitle, title,style_name}) => {
  return (
    <>
      <div id='heading' className={style_name}>
        <h3 className={style_name}>{subtitle} </h3>
        <h1 className={style_name}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
