import React, { useEffect, useState } from 'react'
import AnimatedButton from './AnimatedButton';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DarkModeToggle from './DarkMode';
import { IoIosArrowDropleft } from "react-icons/io";



const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1024px)').matches);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // Mobile size detecter

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
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
          {isMobile && (
            <div className="flex gap-3 items-center justify-center">
              <div className="lg:hidden h-9 p-1 flex  items-center justify-center">
                <DarkModeToggle />
              </div>
              <div className="lg:hidden flex items-center justify-center">
                <button onClick={showSidebar}>
                  <HiOutlineMenuAlt2 size={27} color="white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/*Mobile sidebar  */}
      <div
        className={`sidebar ${
          sidebar && "visible"
        } dark:text-white dark:bg-neutral-900`}
      >
        <div className="flex justify-start mt-3">
          <img src="logo" alt="Jifar's logo" />
          <button
            onClick={() => setSidebar(!sidebar)}
            className="absolute top-6 right-2 opacity-70"
          >
            <IoIosArrowDropleft size={39} />
          </button>
        </div>
        <ul className="flex flex-col text-lg gap-5 items-start mt-7">
          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500 ">
            <a href="#login" className="  hover:bg-rounded ">
              Services
            </a>
          </li>
          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
            <a href="#about" className=" ">
              CRM
            </a>
          </li>

          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
            <a href="#about" className=" ">
              Case Studies
            </a>
          </li>
          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
            <a href="#about" className=" ">
              Contact
            </a>
          </li>
          <div className="mt-3 flex justify-center w-full">
            <AnimatedButton name={"BOOK NOW"} />
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar