import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";


const DarkModeToggler = () => {
  const [theme,setTheme] = useState('light');

  useEffect(()=>{
    if(theme === 'light'){
        document.documentElement.classList.add("dark");

    }else{
      document.documentElement.classList.remove("dark");

    }
  },[theme])
 
  const toggleModeHandler = () => {
    localStorage.setItem('theme', theme)
    setTheme(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')

  };
  return (
    <div className="">
      <Icon
        onClick={toggleModeHandler}
        icon={localStorage.getItem('theme') === 'light' ? "circum:dark" : "iconamoon:mode-light"}
        className="text-3xl text-black cursor-pointer dark:text-white"
      />
    </div>
  );
};
export default DarkModeToggler;