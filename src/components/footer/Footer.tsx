import React from 'react'

import '../../css/footer/footer.css'
import FooterLinks from './FooterLinks'
import FooterDescription from './FooterDescription'
import FooterContact from './FooterContact'

const about = {
  heading: 'About',
  links: [
    {
      to: '#',
      title: 'Company'
    },
    {
      to: '#',
      title: 'Groups'
    },
    {
      to: '#',
      title: 'Contribution'
    },
    {
      to: '#',
      title: 'Features'
    }
  ]
}

const contact = {
  heading: 'Contact',
  links: [
    {
      to: '#',
      title: 'About Us'
    },
    {
      to: '#',
      title: 'Contact Us'
    },
    {
      to: '#',
      title: 'News & Blogs'
    },
    {
      to: '#',
      title: 'Other Works'
    }
  ]
}

const Footer = () => {
  return (
    <div className='footer'>
      <FooterDescription />
      <div className="footerLinks-container">
        <FooterLinks heading={about.heading} links={about.links} />
        <FooterLinks heading={contact.heading} links={contact.links} />
      </div>
      <FooterContact />
    </div>
  )
}

export default Footer
