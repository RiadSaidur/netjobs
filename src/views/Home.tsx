import React from 'react'
import Welcome from '../components/home/welcome/Welcome'
import Promotions from '../components/home/Promotions'

const Home = () => {
  return (
    <div className="container">
      <Welcome />
      <Promotions />
    </div>
  )
}

export default Home
