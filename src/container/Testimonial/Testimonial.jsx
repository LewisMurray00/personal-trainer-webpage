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
    <>
        <div className='app__testimonial-item app__flex'>
            
            <img src={test.imgUrl} alt='testimonials' />
            
            <div className='app__testimonial-content'>
                <p className='p-text'>{test.feedback}</p>
                <div>
                    <h4 className='bold-text'>{test.name}</h4>
                    <h5 className='p-text'>{test.age}</h5>
                </div>
            </div>
        </div>

        <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={(()=> handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1))}>
                <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={(()=> handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1))}>
              <HiChevronRight />
            </div>
        </div>

    </>
  )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg'
)