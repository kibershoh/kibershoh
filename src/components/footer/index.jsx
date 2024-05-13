import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram,BsTelegram,BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t  border-slate-300 flex justify-between items-center py-4'>
        <h1 className='text-slate-900 dark:text-white text-3xl '>Kibershoh</h1>
         <div className="flex items-center max-md:justify-around mt-6">
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-4   rounded-full p-2 text-white">
            <BsLinkedin size={20} />
          </Link>
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-4   rounded-full p-2 text-white">
            <BsGithub size={20} />
          </Link>
          <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-4  rounded-full  p-2 text-white">
            <BsInstagram size={20} />
          </Link>
          <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-4 rounded-full  p-2 text-white">
            <BsTelegram size={20} />
          </Link>
          <Link to="/"  className="bg-blue-900 hover:bg-blue-600 mr-4  rounded-full p-2 text-white">
            <BsTwitter size={20} />
          </Link>
     
       </div>
    </div>
  )
}

export default Footer