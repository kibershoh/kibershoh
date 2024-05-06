import React, { Children, useState } from 'react'
import { translations } from '../constants/translations'
import { LanguageContext } from './LanguageContext'

const LanguageProvider = ({children}) => {
    const [language,setLanguage] = useState('en')

    const t = key =>{
        return translations[language][key] || key
    }
  return (
    <LanguageContext.Provider value={{language,setLanguage,t}}>
       {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider;