import React, { useContext } from 'react'
import me1 from '../../assets/me1.png'
import { FiChevronDown } from 'react-icons/fi'
import { TbArrowBarToDown } from 'react-icons/tb'
import Typewriter from "typewriter-effect";
import './style.scss'
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import ParticlesBg from 'particles-bg';
import { LanguageContext } from '../../context/LanguageContext';
const Home = () => {
  const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <div id='home' className='h-screen w-full relative  grid justify-between items-center gap-20'>
    

        <div id="scroll_container">
          <div id="scroll_text" className='text-white'>
            <h1 className='text-6xl max-lg:text-4xl max-md:w-[800px] tracking-wide	font-mono'><span className='text-orange-500'>{t('hello')}</span>, {t('MyName')}</h1>
          </div>
        </div>
        <div id="scroll_container2">
          <div id="scroll_text2" className='text-white'>
            <h1 className='text-6xl max-lg:text-4xl w-[1500px] tracking-wide	font-mono'><span className='text-orange-500'>{t('me')}</span>, {t('Frontend')}, {t('Freelancer')}  </h1>
          </div>
        </div>
            <div className='absolute inset-0 grid items-center max-sm:items-center justify-center'>
        <Tilt
                    
          options={{
            max: 25,
            transition: 0.3,
            scale: 1,
            speed: 450,
          }}
        >
          <img className='w-60 h-60 max-sm:h-44 max-sm:w-44 bg-orange-600  backdrop-blur-sm  rounded-lg rounded-t-full'style={{borderRadius:"circle"}} src={me1} alt="" />

        </Tilt> 
     </div>
      </div>
 

    </>
  )
}

export default Home;
