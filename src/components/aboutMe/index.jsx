import React, { useContext } from 'react'
import me1 from '../../assets/me2.png'
import { Tilt } from 'react-tilt'
import { FaLaptopCode } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { LanguageContext } from '../../context/LanguageContext';
import { RiTimerFlashLine } from 'react-icons/ri';



const AboutMe = () => {
  const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <div id="about" className='w-full h-auto pt-20 px-40 max-lg:px-10  max-md:px-2'>
      <div className='flex justify-between items-start'>
        <div className='text-start pb-10'>
          <h1 className='text-gray-900 mb-4 dark:text-slate-300 font-thin text-4xl max-lg:text-3xl max-md:text-2xl font-mono'>Oybek Saminov</h1>
          <h1 className='text-slate-500 text-xl font-semibold font-mono'>Frontend Developer</h1>
        </div>
        <div className=' w-fill max-md:w-full max-md:pb-10  '>
          <Tilt
            options={{
              max: 10,
              transition: 1.6,
              scale: 3.2,
              speed: 250,
            }}
          >
            <img className='w-28 animate-pulse animate-infinite duration-1000 ml-auto shadow-2xl shadow-gray-950 dark:shadow-gray-100  rounded-full   h-28 max-md:w-2/3 max-[420px]:h-60 max-[420px]:w-11/12 max-md:mx-auto' src={me1} alt="" />

          </Tilt>
        </div>
      </div>
      <div className='w-full py-5 items-start'>
        <div className='max-md:w-full '>
          <p className='text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
            {t('aboutMe')}
          </p>
        </div>

        <div className='text-start py-10 mt-14'>
          <h1 className='text-gray-900 mb-8 dark:text-slate-100 font-thin text-3xl max-lg:text-3xl max-md:text-2xl font-mono flex gap-2 items-center'>Currently working on <FaLaptopCode /> </h1>


          {
            t('currentlyWorking').map((item) => (
              <p key={item.id} className='flex items-center text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
                <LiaLongArrowAltRightSolid size={30} className='mr-10 h' /> {item.text}
              </p>
            ))
          }




        </div>
        <div className='text-start py-10 mt-14'>
          <h1 className='text-gray-900 mb-8 dark:text-slate-100 font-thin text-3xl max-lg:text-3xl max-md:text-2xl font-mono flex gap-2 items-center'>Education  <PiStudentFill /> </h1>


          <p className='flex items-center text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
            {t('education')}
          </p>




        </div>
        <div className='text-start py-10 mt-14'>


          <h1 className='text-gray-900 mb-8 dark:text-slate-100 font-thin text-3xl max-lg:text-3xl max-md:text-2xl font-mono flex gap-2 items-center'>Timeline <RiTimerFlashLine /></h1>






          <div className='mb-16'>

            <h2 className='font-semibold text-3xl '><i>-2021</i></h2>
            <ul className='mt-5'>
              <li className='flex items-center text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
                <LiaLongArrowAltRightSolid className='mr-10 w-12 h-12' /> {t('year2021')}
              </li>
            </ul>
          </div>
          <div className='mb-16'>

            <h2 className='font-semibold text-3xl '><i>-2022</i></h2>
            <ul className='mt-5'>
              <li className='flex items-center text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
                <LiaLongArrowAltRightSolid className='mr-10 w-12 h-12' /> {t('year2021')}
              </li>
            </ul>
          </div>
          <div className='mb-16'>

            <h2 className='font-semibold text-3xl '><i>-2023</i></h2>
            <ul className='mt-5'>
              <li className='flex items-center text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
                <LiaLongArrowAltRightSolid className='mr-10 w-12 h-12' /> {t('year2021')}
              </li>
            </ul>
          </div>
          <div className='mb-16'>

            <h2 className='font-semibold text-3xl '><i>-2024</i></h2>
            <ul className='mt-5'>
              <li className='flex items-center text-xl text-gray-900 leading-relaxed tracking-normal  font-mono dark:text-slate-300   max-md:break-all max-md:px-3'>
                <LiaLongArrowAltRightSolid className='mr-10 w-12 h-12' /> {t('year2021')}
              </li>
            </ul>
          </div>



        </div>
      </div>
    </div>
  )
}

export default AboutMe
