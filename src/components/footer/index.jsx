import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram,BsTelegram,BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t  border-slate-300 flex justify-between items-center py-4 max-md:flex-col'>
        <h1 className='text-slate-900 dark:text-white text-3xl '>Kibershoh</h1>
         <div className="flex items-center max-md:justify-around mt-6 px-10">
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-2   rounded-full p-2 text-white">
            <BsLinkedin size={20} />
          </Link>
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-2   rounded-full p-2 text-white">
            <BsGithub size={20} />
          </Link>
          <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-2  rounded-full  p-2 text-white">
            <BsInstagram size={20} />
          </Link>
          <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-2 rounded-full  p-2 text-white">
            <BsTelegram size={20} />
          </Link>
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-2  rounded-full p-2 text-white">
            <BsTwitter size={20} />
          </Link>
     
       </div>
    </div>
  )
}

export default Footer