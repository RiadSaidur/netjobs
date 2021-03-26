import React from 'react'
import Facebook from '../svg/Facebook'
import Google from '../svg/Google'
import IBM from '../svg/IBM'
import LinkedIn from '../svg/LinkedIn'
import Microsoft from '../svg/Microsoft'

const Promotions = () => {
  return (
    <div className="promotions">
      <h2>Recent Job Openings</h2>
      <IBM />
      <Microsoft />
      <Google />
      <LinkedIn />
      <Facebook />
    </div>
  )
}

export default Promotions
