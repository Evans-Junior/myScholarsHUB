import React from 'react'
import "./apply.css"
import Head from "./head"

function Apply() {
  return (
    <div className="apply">
    <Head/>
    <h1 className='apply-title'>Learn more</h1>
    <p className='scroll'>scroll up 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.71 8.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"/></svg>
    </p>
      <section className="whyUs">
      <h3 className='whyus-title'>Why you should join myScholarsHUB SCHOLARS</h3>
      <div className='whyus-points'>
      <p>myScholarsHUB offers support to academically driven, economically disadvantaged high school graduates from Ghana. The program helps them secure full scholarships to attend the most reputable colleges and universities in Ghana. With most of the program's scholars coming from humble backgrounds, myScholarsHUB gives them access to world-class education that they may have otherwise been unable to afford.</p>

      <p>In addition to college application training, myScholarsHUB also provides its scholars with mentorship and career development opportunities. The program helps scholars explore different career fields and personal growth areas, ultimately acquiring essential skills in public speaking and communication.</p>
      
      <p>myScholarsHUB's support for its students does not end once they gain admission to their preferred universities. The program continues to assist scholars to navigate different mentorship and educational opportunities. Additionally, myScholarsHUB pairs students with mentors and buddies who provide additional support throughout their academic journeys.</p>
      </div>
      </section>
      <section className='selectionProcess'>
      <div>
      <h2 className='firstColumn'>SELECTION PROCESS</h2>
      <p className='firstColumn-contents'>The process of selecting scholars for myScholarsHUB is very rigorous. Our selection criteria primarily focus on academic performance, extracurricular activities, family background, and other individual qualities. Once chosen, the scholars participate in an intensive 8-week program that prepares them for the application process for both school and scholarship opportunities. During this time, they also receive instruction in, writing school applications, resume building, as well as proper email and LinkedIn etiquette. </p>
      <p className='firstColumn-contents-two'>Every year, myScholarsHUB receives numerous applications, but only a select few (5 - 10) are chosen to join the program. To qualify for consideration, applicants must be high school graduates or in their final year of high school and must have taken or prepared to take the West African Secondary School Certificate Examination (WASSCE). Given the high level of competition from other highly qualified students across the country, we have strict academic requirements for our scholars.</p></div>
      <div><h4 className='SecondColumn-header'>WE LOOK OUT FOR THE FOLLOWING:</h4>
      <ul className='SecondColumn-contents'>
      <li>
      &#x2022; Strong academic performance
      </li>
      <li>
      &#x2022; Proficiency in solving problems
      </li>
      <li>
      &#x2022; Exhibited leadership abilities within their school and community.
      </li>
      <li>
      &#x2022; Economic hardship
      </li>
      <li>
      &#x2022; Demonstrated interest in community service
      </li>
      </ul>
      <p className='SecondColumn-contents-two'>
      mySholarsHUB selects its scholars through a rolling basis process that commences in January and ends in May of each year. The initial stage of the application process entails a review of the applicant's high school academic records, extracurricular activities, and community involvement. Additionally, applicants must complete a set of essay prompts to help the selection committee understand more about them and their background. The second stage involves individual interviews and further assessments.
      </p>
      </div>
      </section>
      <section className='Disclaimer-group'>
      <div className='Disclaimers'>
      <h3 className='disclaimers'>Disclaimers</h3>
        <p>Becoming a myScholarsHUB Scholar does not automatically guarantee admission to university on scholarship. To secure scholarships, our scholars must compete with other exceptional candidates from around the country. We offer our scholars the best possible training and support to help them compete for these limited scholarship opportunities.
        </p>
        <p>Note that myScholarsHUB does not provide university scholarships to our scholars. Instead, we apply to schools and other organisations that provide scholarships.
        </p>
        <p>Please note that YAF Ghana exclusively works with high school graduates seeking undergraduate studies in Ghanaian universities. We do not work with students who want to pursue postgraduate studies.</p>
      </div>
      </section>
      <section className='sub-buttom'>
      <div className="space final">
    <a href="https://lnkd.in/dTNvf3iS" className='register-space' target="_blank">Register</a>
    </div>
      </section>
    </div>
  )
}

export default Apply