import React from 'react'

import '../../../css/special/specialListItem.css'

interface Job {
  icon: string;
  title: string;
  company: string;
  hours: string;
  location: string;
  salary: string;
}

interface Props {
  job: Job
}

const SpecialListItem: React.FC <Props> = ({ job }) => {
  return (
    <li className='specialListItem'>
      <div className="icon-container">
        <img src={require(`../../../assets/icons_${job.icon}.png`).default} alt="job.icon"/>
      </div>
      <h3>
        { job.title }
      </h3>
      <div className="side-by-side">
        <p>
          { job.company }
        </p>
        <p>
          { job.hours }
        </p>
      </div>
      <p>
        <img src={require('../../../assets/icons_map_marker.png').default} alt=""/>
        { job.location }
      </p>
      <div className='side-by-side'>
        <p>
          { job.salary }
        </p>
        <button>
          Apply Now
        </button>
      </div>
    </li>
  )
}

export default SpecialListItem
