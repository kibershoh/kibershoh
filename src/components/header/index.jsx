import React from 'react'
import './style.scss'
import ReactLogo from '../../constants/animations/ReactLogo/reactLogo'
import ReactLogo2 from '../../constants/animations/ReactLogo2'
import CIcon from '@coreui/icons-react'
import { cibRedux, cilList } from '@coreui/icons'
import { motion } from 'framer-motion'
import redux from '../../assets/redux1.png'
import js from '../../assets/js1.png'
import nodejs from '../../assets/nodejs.png'
const Header = () => {
  return (
    <div className='relative'>
      <div className="absolute top-0 h-auto w-full z-0">
        <div className="line dark:darkLine"></div>
        <div className="line dark:darkLine"></div>
        <div className="line dark:darkLine"></div>
        <div className="line dark:darkLine"></div>

        <div className='absolute top-32 left-96 max-lg:left-40 max-sm:left-16 text-white'>
          <ReactLogo />
        </div>
        <div className='absolute top-48 right-64 max-lg:top-32 '>
          <img
           
            src={redux} alt="" className='w-24 animate-bounce animate-infinite' />

        </div>
        <div className='absolute top-52 right-20 max-lg:top-24 max-lg:right-4  rounded-md'>
          <img
            
           
            src={js} alt="" className='w-24 animate-pulse animate-infinite ' />

        </div>
        <div className='absolute top-80 right-44 rounded-md max-lg:right-4 max-lg:top-60'>
          <img
            
           
            src={nodejs} alt="" className='w-24 animate-ping animate-infinite ' />

        </div>
      </div>

    </div>
  )
}

export default Header