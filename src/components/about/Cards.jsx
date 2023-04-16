import React from 'react'

export default function Cards({title,details}) {
  return (
    <div>
    <div className='Cards_info'>
    <div className="container">
    <div className="card">
        <div class="slide slide1">
            <div className="content">
                <div className="icon">
                <i class="fa fa-university" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div className="slide slide2">
            <div className="content">
                <h3 >
                    {title}
                </h3>
                <p className='details_card'>{details}</p>
            </div>
        </div>
    </div>
    </div>
    

</div>
    </div>
  )
}

