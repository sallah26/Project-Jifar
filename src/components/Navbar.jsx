import React, { useState } from 'react'
import AnimatedButton from './AnimatedButton';
import { RiMenuFoldLine } from "react-icons/ri";
import DarkModeToggle from './DarkMode';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
      setSidebar(!sidebar)    
  }
  return ( 
    <nav className="bg-slate-800 min-h-20 flex items-center">
      <div className="container max-w-[1400px] mx-auto px-4 flex  justify-between">
        {/* <img src={} alt="" /> */}
        <p className="text-3xl text-blue-500">Jifar LOGO</p>
        <ul className="hidden lg:flex gap-10  items-center">
          <li className="flex justify-center">
            <a href="#login" className="text-sm text-white hover:bg-rounded ">
              Services
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#about" className="text-sm text-white">
              CRM
            </a>
          </li>

          <li className="flex justify-center">
            <a href="#about" className="text-sm text-white">
              Case Studies
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#about" className="text-sm text-white">
              Contact
            </a>
          </li>
          <div className="hidden lg:flex">
            <AnimatedButton name={"BOOK NOW"} />
          </div>
        </ul>
<div className='flex gap-3 items-center justify-center'>

<div className="lg:hidden h-9 p-1 ">
        <DarkModeToggle />
        </div>
        <div className="lg:hidden">
          <button onClick={showSidebar}>
            <RiMenuFoldLine size={30} color='white' />
          </button>
        </div>
</div>
        {sidebar && (
          <div className="transition-transform z-40 duration-1000 p-4 delay-300 translate-x-0  absolute h-screen w-48 bg-gray-300 text-neutral-900 font-bold dark:text-white dark:bg-neutral-900 left-0 top-0">
            {/* Jifar's logo */}

            <div className="flex justify-start mt-0">
            <img src="logo" alt="Jifar's logo" />
            <button onClick={() => setSidebar(!sidebar)} className='absolute text-lg w-6 h-6 p-1 flex justify-center items-center top-4 right-1 rounded-md border-2 border-slate-700'>
              X
            </button>
            </div>
            <ul className="flex flex-col gap-5 items-start mt-7">
              <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500 ">
                <a
                  href="#login"
                  className="text-sm  hover:bg-rounded "
                >
                  Services
                </a>
              </li>
              <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
                <a href="#about" className="text-sm ">
                  CRM
                </a>
              </li>

              <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
                <a href="#about" className="text-sm ">
                  Case Studies
                </a>
              </li>
              <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
                <a href="#about" className="text-sm ">
                  Contact
                </a>
              </li>
              <div className="mt-3 flex justify-center w-full">
                <AnimatedButton name={"BOOK NOW"} />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar