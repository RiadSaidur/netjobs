import React from 'react'

import '../../css/footer/footerDescription.css'

const socials = [
  {
    icon: 'icons_blue_facebook',
    to: '#'
  },
  {
    icon: 'icons_blue_instagram',
    to: '#'
  },
  {
    icon: 'icons_blue_linkedin',
    to: '#'
  },
  {
    icon: 'icons_blue_twitter',
    to: '#'
  },
]

const FooterDescription = () => {
  return (
    <div className='footerDescription'>
      <h3 className="logo">
        <span>net</span>
        <span>Jobs</span>
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum id porta neque, amet. Enim est euismod hendrerit vulputate nisl, donec varius tristique vel. Vestibulum montes.</p>
      <ul>
        { socials.map((social, idx) => (
          <li key={ idx }>
            <a href={ social.to } title={ social.icon }>
              <img src={require(`../../assets/${social.icon}.png`).default} alt={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterDescription
