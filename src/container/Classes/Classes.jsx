import React from 'react'
import './Classes.scss'

import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';


const abouts = [
    {
        title: 'Online Coaching',
        description: 'I offer personalised online coaching tailer made to suit your requirements to get you in your ideal shape and mindset.',
        imgUrl: images.computer
    },
    {
        title: '1-1 sessions',
        description: 'Fancy something a bit more personal ? I offer 1-1 sessions where you can get that in person experience where i can make sure everything you are doing is correct and can provide more assistance and support.',
        imgUrl: images.pressIcon
    },
    // {
    //     title: 'Bootcamp',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
    //     imgUrl: images.bootcamp
    // },
]

const Classes = () => {
  return (
    <>
        <h2 className='head-text'>
            Here is the classes that i have available to help you <span>achieve your goals</span>
        </h2>

        <div className='app__profiles'>
            {abouts.map((about,index) => (
                <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween'}}
                className="app__profile-item"
                key={about.title + index}
                >
                    <img src={about.imgUrl} alt={about.title} />
                    <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                    <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                </motion.div>
            ))}
        </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Classes, 'app__about'),
    'programmes',
    'app__whitebg'
);