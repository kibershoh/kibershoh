import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import { IoMoon } from 'react-icons/io5'
import { IoMdSunny } from 'react-icons/io'
import {motion} from 'framer-motion'
const ToggleButton = () => {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 const [darkMode,setDarkMode] = useState(false)

  useEffect(()=>{
    let savedMode = localStorage.getItem('displayMode')
    if(!savedMode){
      const newMode = 'light'
      setDarkMode(false)
      localStorage.setItem("displayMode",newMode)
    }
    setDarkMode(savedMode === 'dark' ? true : false)
  },[])
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  return (
    <>
    <div 
  
   
    className="flex">
          <motion.IoMoon
          animate={animate}
            onTap={cycle}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-white dark:text-slate-900" size={20}/>
          <IoMdSunny onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-white dark:text-slate-900" size={20}/>
        </div>
         
    </>
  )
}

export default ToggleButton