import React from 'react'

import '../../css/herotext.css'

const HeroText = () => {
  return (
    <div className="heroText">
      <p className="welcome">WELCOME</p>
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

export default HeroText
