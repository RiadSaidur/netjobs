import React from 'react'

import WelcomeText from './WelcomeText'

import '../../../css/welcome/welcome.css'

import image from '../../../assets/landing_page_img.png'

const Welcome = () => {
  return (
    <div className="welcome">
      <WelcomeText />
      <img src={image} alt="portrait" className="landing_page_decoration"/>
    </div>
  )
}

export default Welcome
