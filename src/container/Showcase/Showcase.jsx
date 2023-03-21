import React, {useState} from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Showcase.scss';

const showcases = [
    {
        name: 'Caden',
        imgUrl: images.cadenOtter
    },
    {
        name: 'Charlie',
        imgUrl: images.charlieArcher
    },
    {
        name: 'Luke',
        imgUrl: images.lukeHopkins
    }
]

const Showcase = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const show = showcases[currentIndex];


  return (
    <>
        <div className='app__showcase-item app__flex'>
            
            <img src={show.imgUrl} alt='showcase'/>
            <div>
                <h4>{show.name}</h4>
            </div>

        </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Showcase, 'app__showcase'),
    'showcase',
    "app__primarybg"
)