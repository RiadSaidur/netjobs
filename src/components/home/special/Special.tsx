import React from 'react'

import '../../../css/special/special.css'

import SpecialHeading from './SpecialHeading'
import SpecialList from './SpecialList'


const Special = () => {
  return (
    <div className="special">
      <section>
        <SpecialHeading />
        <p className='option'>IT & Telecommunication <img src={require('../../../assets/dropdown-arrow.png').default} alt=""/></p>
      </section>
      <SpecialList />
    </div>
  )
}

export default Special
