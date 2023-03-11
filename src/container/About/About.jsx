import React from 'react'
import './About.scss'

import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts = [
    {
        title: 'Online Coaching',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        imgUrl: images.onlineCoaching
    },
    {
        title: '1-1 sessions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        imgUrl: images.oneToOne
    },
    {
        title: 'Bootcamp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        imgUrl: images.bootcamp
    },
]

const About = () => {
  return (
    <div>About</div>
  )
}

export default About