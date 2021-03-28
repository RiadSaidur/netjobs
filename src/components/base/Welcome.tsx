import React from 'react'

import WelcomeText from './WelcomeText'

import '../../css/welcome/welcome.css'

interface CTA {
  haveCTA: boolean;
  buttonText?: string;
}

interface Content {
  title: string;
  heading: string;
  paragraph?: string;
  button: CTA;
}

interface Props {
  flexColumn?: boolean;
  image: string;
  content: Content;
}

const Welcome: React.FC <Props> = ({ image, content, flexColumn }) => {
  return (
    <div className={`welcome ${flexColumn ? 'flex-column' : ''}`}>
      <WelcomeText content={ content } flexColumn={flexColumn ?? false } />
      <img src={image} alt="portrait" className="landing_page_decoration"/>
    </div>
  )
}

export default Welcome

