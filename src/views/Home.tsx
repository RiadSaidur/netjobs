import React from 'react'

import Welcome from '../components/home/welcome/Welcome'
import Promotions from '../components/home/Promotions'
import Special from '../components/home/special/Special'

import '../css/home.css'

const Home = () => {
  return (
    <div className="container home">
      <Welcome />
      <Promotions />
      <Special />
    </div>
  )
}

export default Home
