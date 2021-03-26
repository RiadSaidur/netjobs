import React from 'react'

import HeroSvg from './HeroSvg'
import HeroText from './HeroText'

import '../../css/heroSection.css'

const HeroSection = () => {
  return (
    <div className="heroSection">
      <HeroText />
      <HeroSvg />
    </div>
  )
}

export default HeroSection
