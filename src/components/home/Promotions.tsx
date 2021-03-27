import React from 'react'

import '../../css/promotions/promotions.css'

const companyLogos = [ 'ibm', 'microsoft', 'google', 'linkedin', 'facebook' ]

const Promotions = () => {
  return (
    <div className="promotions">
      <h2>Recent Job Openings</h2>
      {companyLogos.map((logo, idx) => (
        <img src={require(`../../assets/logos_${logo}.png`).default} alt={logo} key={idx}/>
      ))}
    </div>
  )
}

export default Promotions
