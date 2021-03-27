import React from 'react'
import Welcome from '../components/home/welcome/Welcome'
import Promotions from '../components/home/Promotions'
import Special from '../components/special/Special'

const Home = () => {
  return (
    <div className="container">
      <Welcome />
      <Promotions />
      <Special />
    </div>
  )
}

export default Home
