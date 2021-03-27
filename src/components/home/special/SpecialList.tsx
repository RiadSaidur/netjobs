import React from 'react'

import SpecialListItem from './SpecialListItem'

import '../../../css/special/specialList.css'

const jobs = [
  {
    icon: 'google',
    title: 'Sr. Web Developer',
    company: 'Uber',
    hours: 'Full Time',
    location: 'San Diago',
    salary: '110,000'
  },
  {
    icon: 'twitter',
    title: 'Sr. Web Developer',
    company: 'Uber',
    hours: 'Full Time',
    location: 'San Diago',
    salary: '110,000'
  },
  {
    icon: 'facebook',
    title: 'Sr. Web Developer',
    company: 'Uber',
    hours: 'Full Time',
    location: 'San Diago',
    salary: '110,000'
  },
  {
    icon: 'uber',
    title: 'Sr. Web Developer',
    company: 'Uber',
    hours: 'Full Time',
    location: 'San Diago',
    salary: '110,000'
  },
]

const SpecialList = () => {
  return (
    <ul className='specialList'>
      {jobs.map((job, idx) => (
        <SpecialListItem job={job} key={idx} />
      ))}
    </ul>
  )
}


export default SpecialList
