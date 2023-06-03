import React from 'react'

export default function Cards({title,details,icon}) {
  return (
    <div>
    <div className='Cards_info'>
    <div className="container" style={{backgroundImage: "url()"}}>
    <div className="card">
    {/* <img className='card_img' src="https://images.unsplash.com/photo-1612835362596-4b7b7b0b4b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGNhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/> */}

        <div class="slide slide1">
            <div className="content">
                <div className="icon">
                {/* fa fa-university */}
                <i class={icon} aria-hidden="true"></i>
                <h3 >
                    {title}
                </h3>
                </div>
            </div>
        </div>
        <div className="slide slide2">
            <div className="content">
               
                <p className='details_card'>{details}</p>
            </div>
        </div>
    </div>
    </div>
    
</div>
    </div>
  )
}

