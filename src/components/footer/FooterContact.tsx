import React from 'react'

const FooterContact = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <ul>
        <li>
          <img src={require('../../assets/icons_blue_map.png').default} alt="location"/>
          <p>200 West Franklin Street, Chapel Hill, NC 27516, United States.</p>
        </li>
        <li>
          <img src={require('../../assets/icons_blue_telephone.png').default} alt="phone"/>
          <a href="tel:+16175751300">+1 617-575-1300</a>
        </li>
        <li>
          <img src={require('../../assets/icons_blue_mail.png').default} alt="phone"/>
          <a href="mailto:dummy@email.com">dummy@email.com</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterContact
