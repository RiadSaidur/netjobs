import React from 'react'

import '../../../css/welcome/welcometext.css'
import BaseSectionTitle from '../../base/BaseSectionTitle'

const WelcomeText = () => {
  return (
    <div className="welcomeText">
      <BaseSectionTitle title="welcome" />
      <h1 className="title">
        Explore Your <span className="bluetext">Dream Job</span> & Build Up Your Career With <span className="pinktext">net</span>JOBS
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum id porta neque, amet. Enim est euismod hendrerit vulputate nisl, donec varius tristique vel. Vestibulum montes, nibh id nunc, faucibus ipsum ac, ullamcorper tempus. Mi id tellus suspendisse dignissim mattis morbi id ut porta.
      </p>
      <button className="cta">
        Get Started &#8594;
      </button>
    </div>
  )
}

export default WelcomeText
