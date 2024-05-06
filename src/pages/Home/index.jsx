import React, { useContext } from 'react'
import me1 from '../../assets/me1.png'
import { FiChevronDown } from 'react-icons/fi'
import { TbArrowBarToDown } from 'react-icons/tb'
import Typewriter from "typewriter-effect";
import './style.scss'
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import { LuMoveRight } from "react-icons/lu";

import ParticlesBg from 'particles-bg';
import { LanguageContext } from '../../context/LanguageContext';
import { Header } from '../../components';
const Home = () => {
  const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <>
    <Header/>
      <div id='home' className='h-screen w-full relative  grid justify-between items-center gap-20'>
    

        <div id="scroll_container">
          <div id="scroll_text" className='text-black dark:text-white'>
            <h1 className='text-6xl max-lg:text-4xl max-md:text-2xl max-md:w-[800px] tracking-wide	font-mono'><span className='text-orange-500'>{t('hello')}</span>, {t('MyName')}</h1>
          </div>
        </div>
         <div className='absolute top-[60%]  left-16 max-lg:top-[85%] max-lg:left-50%'>
          <button className='text-white text-lg bg-blue-600 p-3 rounded-lg flex items-center gap-5 max-lg:p-2 px-4'>
            Read more about me <LuMoveRight className='hover:rotate-90'/> 
          </button>
        </div>
       
        <div id="scroll_container2"> 
          <div id="scroll_text2" className='text-black dark:text-white'>
            <h1 className='text-6xl max-lg:text-4xl max-md:text-2xl w-[1500px] tracking-wide	font-mono'><span className='text-orange-500'>{t('me')}</span>, {t('Frontend')}, {t('Freelancer')}  </h1>
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
          <img className='w-60 h-60 max-sm:h-40 max-sm:w-40  shadow-lg shadow-slate-800	dark:shadow-slate-300  backdrop-blur-sm  rounded-lg rounded-t-full'style={{borderRadius:"circle"}} src={me1} alt="" />

        </Tilt> 
     </div>
      </div>
 

    </>
  )
}

export default Home;
