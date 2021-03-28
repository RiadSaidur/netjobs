import React from 'react'

import '../../css/footer/footer.css'
import FooterLinks from './FooterLinks'
import FooterDescription from './FooterDescription'
import FooterContact from './FooterContact'

const about = {
  heading: 'About',
  links: [
    {
      to: '/company',
      title: 'Company'
    },
    {
      to: '/groups',
      title: 'Groups'
    },
    {
      to: '/contribution',
      title: 'Contribution'
    },
    {
      to: '/features',
      title: 'Features'
    }
  ]
}

const contact = {
  heading: 'Contact',
  links: [
    {
      to: '/about',
      title: 'About Us'
    },
    {
      to: '/contact',
      title: 'Contact Us'
    },
    {
      to: '/news',
      title: 'News & Blogs'
    },
    {
      to: '/other',
      title: 'Other Works'
    }
  ]
}

const Footer = () => {
  return (
    <div className='footer'>
      <FooterDescription />
      <FooterLinks heading={about.heading} links={about.links} />
      <FooterLinks heading={contact.heading} links={contact.links} />
      <FooterContact />
    </div>
  )
}

export default Footer
