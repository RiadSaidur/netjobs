import React from 'react'

import '../../css/welcome/welcometext.css'
import BaseSectionTitle from '../base/BaseSectionTitle'

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
  content: Content;
  flexColumn: boolean;
}

const WelcomeText: React.FC <Props> = ({ content, flexColumn }) => {
  return (
    <div className={`welcomeText ${flexColumn ? 'wide' : ''}`}>
      <BaseSectionTitle title={content.title} />
      <h1 className="title" dangerouslySetInnerHTML={{ __html: content.heading }}>
      </h1>
      { content.paragraph && (
        <p>
          { content.paragraph }
        </p>
      )}
      { content.button.haveCTA && (
        <button className="cta">
          { content.button.buttonText }
        </button>
      )}
    </div>
  )
}

export default WelcomeText
