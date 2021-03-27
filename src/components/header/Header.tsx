import React from 'react'
import HeaderLinks from './HeaderLinks'

import "../../css/header.css"
import { Link } from 'react-router-dom'
import HeaderUser from './HeaderUser'

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="logo">
          <span>net</span>
          <span>jobs</span>
      </Link>
      <HeaderLinks />
      <HeaderUser />
    </header>
  )
}

export default Header
