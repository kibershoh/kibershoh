
import React, {useContext} from 'react'
import search from '../.././assets/search.jpg'
import giotto from '../.././assets/giotto.jpg'
import foods from '../.././assets/foods.jpg'
import noteapp from '../.././assets/noteapp.png'
import xurmo from '../.././assets/xurmo-market.png'
import auction from '../.././assets/auction.png'
import smartbooks from '../.././assets/smartbooks.png'
import gfuarm from '../.././assets/gfu-arm.png'
import {LanguageContext} from '../../context/LanguageContext'
import { Link } from "react-router-dom"
const Experience = () => {
    const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="p-20 max-lg:p-10 max-md:p-5 grid grid-cols-2 max-lg:grid-cols-1 gap-20">
     <div className="border border-slate-400 rounded p-4">
        
      <img className="w-11/12 h-11/12 rounded-lg hover:scale-105 duration-700" src={xurmo} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 p-2 px-4 text-xl rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://xurmo-market.vercel.app/'}>{t('view')}</Link></button>
     </div>
      <div className="border border-slate-400 rounded p-4">
        
      <img className="w-11/12 h-11/12 rounded-lg hover:scale-105 duration-700" src={noteapp} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 p-2 px-4 text-xl rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://note2-app.vercel.app/'}>{t('view')}</Link></button>
     </div>
      <div className="border border-slate-400 rounded p-4">
        
      <img className="w-11/12 h-11/12 rounded-lg hover:scale-105 duration-700" src={gfuarm} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 p-2 px-4 text-xl rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://gfu-arm-test.vercel.app/'}>{t('view')}</Link></button>
     </div>
     
     <div className="border border-slate-400 rounded p-4">
        
      <img className="w-11/12 h-11/12 rounded-lg  hover:scale-105 duration-700" src={foods} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 p-2 px-4 text-xl rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://dainty-horse-44700e.netlify.app/'}>{t('view')}</Link></button>
     </div>
      
      
     <div className="border border-slate-400 rounded p-4">
        
      <img className="w-11/12 h-11/12 rounded-lg hover:scale-105 duration-700" src={auction} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 p-2 px-4 text-xl rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://client-auction-hub.vercel.app/'}>{t('view')}</Link></button>
     </div>
      
     <div className="border border-slate-400 rounded p-4">
        
      <img className="w-11/12 h-11/12 rounded-lg hover:scale-105 duration-700" src={smartbooks} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 p-2 px-4 text-xl rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://smart-books.netlify.app/'}>{t('view')}</Link></button>
     </div>
      
    </div>
  )
}

export default Experience
