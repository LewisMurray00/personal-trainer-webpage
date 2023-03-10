import React, { useState } from 'react';
import './Navbar.scss'

import { images } from '../../constants'

import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <h1>Navbar</h1>
    </nav>
  )
}

export default Navbar