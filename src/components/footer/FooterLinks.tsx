import React from 'react'

interface Link {
  to: string;
  title: string;
}

interface Props {
  heading: string;
  links: Link[];
}

const FooterLinks: React.FC <Props> = ({ heading, links }) => {
  return (
    <div>
      <h3>{ heading }</h3>
      <ul>
        { links.map((link, idx) => (
          <li key={ idx }>
            <a href={`/${link.to}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks
