import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants';
import './Testimonial.scss';

const testimonials = [
    {
        name: 'John Doe',
        age: '25',
        imgUrl: images.pressIcon,
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.'
    },
    {
        name: 'Sarah Marah',
        age: '29',
        imgUrl: images.profile,
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
    },
]

const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const test = testimonials[currentIndex];

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

  return (
    <div>Testimonial</div>
  )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'app__primarybg'
)