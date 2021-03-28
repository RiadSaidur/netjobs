import React from 'react'

import Welcome from '../components/base/Welcome'
import Promotions from '../components/home/Promotions'
import Special from '../components/home/special/Special'

import '../css/home.css'

import landing_page_img from '../assets/landing_page_img.png'
import profiling_img from '../assets/profiling_img.png'
import world_map from '../assets/world_map.png'

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

const welcomeContents: Props = {
  image: landing_page_img,
  content: {
    title: 'WELCOME',
    heading: 'Explore Your <span class="bluetext">Dream Job</span> & Build Up Your Career With <span class="pinktext">net</span>JOBS',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum id porta neque, amet. Enim est euismod hendrerit vulputate nisl, donec varius tristique vel. Vestibulum montes, nibh id nunc, faucibus ipsum ac, ullamcorper tempus. Mi id tellus suspendisse dignissim mattis morbi id ut porta.',
    button: {
      haveCTA: true,
      buttonText: 'Get Started &#8594;'
    }
  }
}

const profilingContents: Props = {
  image: profiling_img,
  content: {
    title: 'PROFILING',
    heading: 'Build Up Your <span class="bluetext">Smart Profile</span> & Get the Opportunities You <span class="bluetext">Deserve</span>',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum id porta neque, amet. Enim est euismod hendrerit vulputate nisl, donec varius tristique vel. Vestibulum montes, nibh id nunc, faucibus ipsum ac, ullamcorper tempus. Mi id tellus suspendisse dignissim mattis morbi id ut porta.',
    button: {
      haveCTA: false
    }
  }
}

const feedbackContents: Props = {
  flexColumn: true,
  image: world_map,
  content: {
    title: 'FEEDBACK',
    heading: 'Let’s Have a Look at What <span class="bluetext">Job Seekers</span> Say About <span class="bluetext">Us</span>',
    button: {
      haveCTA: false
    }
  }
}

const Home = () => {
  return (
    <div className="container home">
      <Welcome image={ welcomeContents.image } content={ welcomeContents.content } />
      <Promotions />
      <Special />
      <Welcome image={ profilingContents.image } content={ profilingContents.content } />
      <Welcome image={ feedbackContents.image } content={ feedbackContents.content } flexColumn={ feedbackContents.flexColumn } />
    </div>
  )
}

export default Home
