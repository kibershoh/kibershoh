import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import {
  IoCaretUpSharp, IoMoon
} from "react-icons/io5";
import {IoMdSunny} from "react-icons/io";
import clsx from "clsx";
import { LanguageContext } from "../../context/LanguageContext";
import { navLinks2 } from "../../constants/navbar2";
import DarkModeToggler from "../../UI/darkModeToggler";
// import ToggleButton from "../toggleButton";
const Navbar = () => {


  const [theme,setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem('theme') : 'system'
  )
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery, 'Darkquery');
const options = [
  {
    icon:"sunny",
    text:"light"
  },
  
  {
    icon:"sunny",
    text:"dark"
  },

]
useEffect(()=>{
  switch(theme){
    case 'dark': 
    element.classList.add('dark');
    localStorage.setItem('theme','dark')

    break;
    case 'light': 
    element.classList.remove('dark');
    localStorage.setItem('theme','light')
     
    break;

    default: 
    localStorage.removeItem('theme')
    
    break
  }
},[theme])

function onWindowMatch(){
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches) ){
    element.classList.add('dark')
  }
  else{
    element.classList.remove('dark')
  }

}
onWindowMatch()


  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };


  const activeInput = () => {
    setInput(!input);
  };


  const Profile = () => {
    setProfile(!profile);
  };


  // Outside sidebar close
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebar(false);
        setInput(false);
        setProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // Navbar scrool height
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [input, setInput] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { t, language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div className="w-full fixed z-30 dark:bg-slate-300 " ref={sidebarRef}>
      {/* Desktop */}
      <div
        className={clsx(
          "flex justify-between items-center backdrop-blur-sm border-b-2 border-blue-200 dark:border-blue-950 p-3 max-w-full w-full fixed top-0 left-0",
          scrolled ? "shadow-md" : " "
        )}
      >
        <Link to={"/"} className="block max-lg:hidden">
          <h1 className="text-2xl text-black dark:text-white max-xl:text-sm font-mono logotip pl-2">

            Oybek<span className="text-orange-600">Me</span>
          </h1>
        </Link>

        <Link to="#" className="block text-black dark:text-white lg:hidden">
          <button onClick={showSidebar}>
            {
              !sidebar ? <HiMenuAlt1 className="HiMenuAlt1" size={22} />
              :
            <MdOutlineClose className="HiMenuAlt1" size={22} />
            }
          </button>
        </Link>
        <div className="max-lg:hidden">
          <ul className="flex items-center w-full">
            {t('navLinks').map((nav) => (
              <li key={nav.id} className={clsx(
                    "mx-5 font-mono text-xl",
                    active === nav.title
                      ? "flex text-blue-600	 "
                      : "flex text-black dark:text-white items-center ",
                      

                  )
                  }>
                <NavLink
                  to={nav.path}
                 
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    document.title = nav.title;
                  }}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      
        
        <div className="flex items-center gap-10">
        <DarkModeToggler/>
            <select className="outline-none dark:text-white p-1 text-black font-semibold text-lg border-2 border-blue-600	 rounded-lg  bg-transparent	" value={language} onChange={handleLanguageChange}>
              <option value="en" className="text-md text-black  bg-transparent  font-semibold mb-10 outline-none" style={{ height: '30px' }}>ENG</option>
              <option value="uz" className="text-md text-black  bg-transparent  font-semibold mb-10 outline-none">UZB</option>
            </select>
          
        </div>
      </div>

      {/* Responsive */}
      <nav
        className={clsx(
          "h-[50vh] w-auto border border-s-amber-100 fixed top-16 backdrop-blur-xl rounded-md  duration-1000",
          !sidebar ? "-left-full" : " "
        )}
      >
       
        <ul className="mx-auto pl-10  my-6 ">
          {t('navLinks').map((nav) => (
            <li
              key={nav.id}
              className={clsx(
                "text-lg mb-3 mr-7 pr-3 links",
              )}
            >
              <NavLink
                to={nav.path}
                className={clsx(
                  "flex p-1 px-2  rounded-lg text-white",
                   
                )}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                  setSidebar(!sidebar);
                }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="px-3 pt-56">
          <div className="flex justify-between relative my-4 items-center">
            <h1 className="mr-3 ml-1">
              | Hello, <span className="font-semibold">John</span>
            </h1>
            <button className="flex items-center" onClick={Profile}>
              {/* <img
                src={logotip}
                alt="person"
                className="w-10 h-10 rounded-full bg-white border-2"
              /> */}
            </button>
          </div>
          <h3 className="text-sm">Restourant Admin Dashboard</h3>
          <p className="text-xs">@2023 All Rights Reserved</p>
          <p className="pt-3 text-xs">Made wuth by Peterdraw</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
