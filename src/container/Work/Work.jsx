import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import { AiFillInstagram } from 'react-icons/ai'
import { images } from '../../constants';
import './Work.scss'

const project = [
    {
        title: 'Nutrition',
        description: 'I offer Nutritional counseling and diet planning to help you achieve your desired body shape, whether you wish to lose weight or gain it.',
        projectLink: 'https://www.instagram.com',
        imgUrl: images.nutrition,
        tags: 'Nutrition'
    },
    {
        title: 'Cardio Management',
        description: 'I offer the finest cardio plan to get your fitness level to a height that it has never been before',
        projectLink: 'https://www.instagram.com',
        imgUrl: images.runningIcon,
        tags: 'Cardio' 
    },
    {
        title: 'Strength Programming',
        description: 'Having competed in powerlifting competitions myself, i know what it takes to push my body to new limits and get as strong as i possibly can, something i will help you with along this journey together.',
        projectLink: 'https://www.instagram.com',
        imgUrl: images.dumbbellLogo,
        tags: 'Strength'
    },
    {
        title: 'Goal Setting',
        description: 'Whilst getting you into the best physical shape you possibly can reach, i help you set goals along the way and make sure they are completed during your time with me.',
        projectLink: 'https://www.instagram.com',
        imgUrl: images.goalSetting,
        tags: 'Goal Setting'
    },
    {
        title: '24/7 Support',
        description: 'I provide 24/7 support so you can reach out to me anytime with any questions you may have.',
        projectLink: 'https://www.instagram.com',
        imgUrl: images.support,
        tags: 'Support' 
    }
]

const Work = () => {

    const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1})

  return (
    <>
        <h2>What you get by <span>Working with me</span></h2>

        <div className='app__work-filter'>
            {['Nutrition', 'Cardio', 'Strength', 'Goal Setting', 'Support'].map((item,index)=>(
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