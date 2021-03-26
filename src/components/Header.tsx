import React from 'react'
import RouterLInks from './router/RouterLInks'

import "../css/header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="logo">
          <span>net</span>
          <span>jobs</span>
      </Link>
      <RouterLInks />
    </header>
  )
}

export default Header
