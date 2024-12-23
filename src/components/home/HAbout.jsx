import React,{useState} from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import { Link } from "react-router-dom"


const  HAbout = () => {
const [see,setSee]=useState(false);

function seeMoreDo(event){
  event.preventDefault();
  // console.log(event.target.value)

  setSee(!see)
  console.log(see)
  
}

  return (
    <>
      <section className='homeAbout'>
      {/* <Link className="opportunities" to="/opportunities">
      <button className=''>More Opportunities</button>
      </Link> */}
        <div className='container'>
          <Heading className="creating_title" subtitle='' title='Creating meaningful experiences.' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
             
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                    </div>
                    <div className='text'>
                      <h1>What we do?</h1>
                      <div className='rate'>

                      </div>
                      <div className='details'>
                       
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                {/* <img src={details.dcover} alt='' /> */}
                              </div>
                              <div className='para'>
                                <p class="cut-off space_new" style={{fontSize:"1 .0rem"}}>We prepare high school students from low-income families in Ghanaian public schools to achieve their goals of making a positive impact in society. We work with three main objectives: 
                                <ul>&#x2022; Offering access to high-quality education and scholarships.</ul>
                                <ul>&#x2022; Providing information on unexplored opportunities through Edu Clinic workshops.</ul>
                                <ul>&#x2022; Providing mentorship for career decision-making and smooth transitions. By connecting these dedicated students with the resources, they need, we aim to support the development of future leaders who will transform societies and Ghana.</ul>
                                </p>
                                <input className='outline-btn' type="checkbox"/>

                              </div>
                              
                            </div>
                            {/* <span>{details.totalTime}</span> */}
                          </>
                        
                      </div>
                    </div>
                  </div>
                 
                  {/* <button onClick={seeMoreDo} className='outline-btn'></button> */}

                </div>

              
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                    </div>
                    <div className='text'>
                      <h1>Our impacts</h1>
                      <div className='rate'>

                      </div>
                      <div className='details'>
                       
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                {/* <img src={details.dcover} alt='' /> */}
                              </div>
                              <div className='para'>
                                <p class="cut-off space_new" style={{fontSize:"1 .0rem"}}>Since our establishment in 2022, we have assisted over 10 students in obtaining scholarships to Ghanaian universities. Additionally, our social media platforms have reached over 1000 students, where we share various educational opportunities such as scholarships, internships, grants, conferences, and hackathons. We remain committed to expanding our reach to support more students who require our help in realizing their aspirations of creating positive changes in their communities in Africa.</p>
                                <input className='outline-btn' type="checkbox"/>

                              </div>
                              
                            </div>
                            {/* <span>{details.totalTime}</span> */}
                          </>
                        
                      </div>
                    </div>
                  </div>
                  

                </div>
               
            
            </div>
          </div>
        </div>
         {/*<OnlineCourses />*/}
      </section>
    </>
  )
}

export default HAbout
