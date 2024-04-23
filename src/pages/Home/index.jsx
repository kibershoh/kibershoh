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
      <div id='home' className='h-screen relative mt-20 grid justify-center items-center  mx-lg:pt-20 max-md:pt-20'>
        {/* <ParticlesBg  num={40} type="cobweb"  bg={true} /> */}

        {/* <div className='flex justify-around items-start px-20  max-md:flex-col max-md:text-center max-md:px-5     '> */}
        {/* <div className='w-full max-md:w-full'>
          <h1 className='text-4xl py-2 font-mono  text-white font-bold max-lg:text-2xl max-md:py-1 '></h1>
          <h1 className='text-4xl py-2 font-mono  text-white font-bold max-lg:text-2xl max-md:py-1 '>{t('MyName')}</h1>
          <h1 className='text-4xl py-2 font-mono  text-white  font-semibold max-lg:text-2xl max-md:text-xl py-1 flex w-full max-md:flex-col max-md:flex max-md:justify-start' >
           <span className='max-md:ml-8  pr-1'>
            {t('me')}
           </span>
            <p className='text-orange-500'>
              <Typewriter
              options={{
                strings: [
                   t('Frontend'),        
                   t('Backend'),        
                   t('Freelancer'),        
                                
                ],
                autoStart: true,
                loop: true,
              }}
            />
              </p> 
          </h1>
          <div className='flex max-md:justify-around pt-4 max-md:pt-3 max-md:mx-auto'>
            <button className='p-1 font-mono  text-lg font-semibold  px-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white mr-10 '> <a className='flex items-center max-md:mr-3 max-md:text-sm aboutMe' href={`#${'aboutMe'}`}>{t('aboutMeBtn')} <FiChevronDown size={22} className='downIcon pl-1' /></a> </button>
            <button className='p-1 font-mono text-lg font-semibold  px-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white flex items-center max-md:mr-3 max-md:text-sm aboutMe'>Resume <TbArrowBarToDown size={22} className='downIcon pl-1'/> </button>
           
          </div>
              <div className="flex items-center max-md:justify-around mt-6">
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-5   rounded-full p-2 text-white">
            <BsLinkedin size={20} />
          </Link>
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-5   rounded-full p-2 text-white">
            <BsGithub size={20} />
          </Link>
          <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-5  rounded-full  p-2 text-white">
            <BsInstagram size={20} />
          </Link>
          <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-5 rounded-full  p-2 text-white">
            <BsTelegram size={20} />
          </Link>
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-5  rounded-full p-2 text-white">
            <BsTwitter size={20} />
          </Link>
        </div>
        </div> */}

        {/* </div> */}

        <div id="scroll_container">
          <div id="scroll_text" className='text-white'>
            <h1 className='text-6xl max-lg:text-4xl w-[1500px] tracking-wide	font-mono'>{t('hello')}, {t('MyName')}</h1>
          </div>
        </div>
        <div id="scroll_container2">
          <div id="scroll_text2" className='text-white'>
            <h1 className='text-6xl max-lg:text-4xl w-[1500px] tracking-wide	font-mono'>{t('me')}, {t('Frontend')} {t('Freelancer')} </h1>
          </div>
        </div>
            <div className='absolute inset-0 grid items-start max-sm:items-center justify-center'>
        <Tilt
                    
          options={{
            max: 25,
            transition: 0.3,
            scale: 1,
            speed: 450,
          }}
        >
          <img className='w-60 h-60  max-sm:h-44 max-sm:w-44'style={{borderRadius:"circle"}} src={me1} alt="" />

        </Tilt> 
     </div>
      </div>
 

    </>
  )
}

export default Home;
