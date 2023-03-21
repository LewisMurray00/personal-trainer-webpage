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

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

  return (
    <>
        <h2 className='app__showcase-header head-text'>Take a look at <span>my transformations</span></h2>

        <div className='app__showcase-item app__flex'>
            
            <img src={show.imgUrl} alt='showcase'/>
            <div>
                <h4>{show.name}</h4>
            </div>

        </div>

        <div className='app__showcase-btns app__flex'>
            <div className='app__flex' onClick={(()=> handleClick(currentIndex === 0 ? showcases.length - 1 : currentIndex - 1))}>
                <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={(()=> handleClick(currentIndex === showcases.length - 1 ? 0 : currentIndex + 1))}>
              <HiChevronRight />
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