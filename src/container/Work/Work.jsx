import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import { AiFillInstagram } from 'react-icons/ai'
import { images } from '../../constants';
import './Work.scss'

const project = [
    {
        title: 'Diet plans',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        projectLink: 'www.instagram.com',
        imgUrl: images.pressIcon,
        tags: 'Diets'
    },
    {
        title: 'Weight sessions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        projectLink: 'www.instagram.com',
        imgUrl: images.dumbbellLogo,
        tags: 'Strength' 
    },
    {
        title: 'Cardio sessions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        projectLink: 'www.instagram.com',
        imgUrl: images.dumbbellLogo,
        tags: 'Cardio'
    },
    {
        title: 'Accountability',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam urna, tincidunt sed sodales quis, porttitor a metus. Sed et porta nibh. Proin posuere tortor non sem posuere, eu bibendum.',
        projectLink: 'www.instagram.com',
        imgUrl: images.oneToOne,
        tags: 'Accountability'
    }
]

const Work = () => {

    const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1})

  return (
    <>
        <h2>What you get by <span>Working with me</span></h2>

        <div className='app__work-filter'>
            {['Cardio', 'Strength', 'Diets', 'Accountability', 'Goal Setting'].map((item,index)=>(
                <div 
                key={index}
                className='app__work-filter-item app__flex p-text'
                >
                    {item}
                </div>
            ))}

        </div>

        <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
        >
            {project.map((work,index)=>(
                <div className='app__work-item app__flex' key={index}>
                    <div className='app__work-img app_flex'>
                        <img src={work.imgUrl} alt={work.name} />
                        
                        <motion.div
                        whileHover={{ opacity: [0,1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className='app__work-hover app__flex'
                        >
                            <a href={work.projectLink} target="_blank" rel='noreferrer'>

                                <motion.div
                                whileInView={{ scale: [0,1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className='app__flex'
                                >
                                    <AiFillInstagram />
                                </motion.div>

                            </a>
                        </motion.div>

                    </div>

                    <div className='app__work-content app__flex'>
                        <h4 className='bold-text'>{work.title}</h4>
                        <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>

                        <div className='app__work-tag app__flex'>
                            <p className='p-text'>{work.tags}</p>
                        </div>
                    </div>

                </div>
            ))}
        </motion.div>
    </>
  )
}



export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    "app__whitebg"
)