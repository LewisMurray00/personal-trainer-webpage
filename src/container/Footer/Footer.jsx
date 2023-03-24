import React from 'react';

import { AiFillInstagram, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss'

const Footer = () => {
  return (
    <>
        <h2 className='head-text'>Get in touch with me here</h2>

        <div className='app__footer-cards'>
            
            <div className='app__footer-card'>
                <AiFillInstagram className='app__footer-card-img' />
                <a href="https://www.instagram.com" className='p-text' target='_blank'>Follow me!</a>
            </div>

            <div className='app__footer-card'>
                <AiFillMail className='app__footer-card-img'/>
                <a href='mailto:test@gmail.com' className='p-text'>Test@gmail.com</a>
            </div>

            <div className='app__footer-card'>
                <AiFillPhone className='app__footer-card-img'/>
                <a href='tel: +447234567890'>07234567890</a>
            </div>
        </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)