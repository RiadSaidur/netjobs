import React from 'react'

import '../../../css/special/specialHeading.css'
import BaseSectionTitle from '../../base/BaseSectionTitle'

const SpecialHeading = () => {
  return (
    <div className='specialHeading'>
      <BaseSectionTitle title='special' />
      <h1 className="title">
        Find the <span className='bluetext'>Best Job</span> Search by <span className='bluetext'>Category</span>
      </h1>
    </div>
  )
}

export default SpecialHeading
