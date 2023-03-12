import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';


import { images } from '../../constants';
import './Work.scss'

const Work = () => {
  return (
    <div>work</div>
  )
}

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    "app__primarybg"
)