import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/routerlinks.css'

const paths = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/about',
    name: 'About'
  }
]

const HeaderLinks = () => {
  return (
    <nav className="nav">
      <ul>
        {paths.map((path, idx) => (
          <li key={idx}>
            <Link to={path.to}>
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderLinks
