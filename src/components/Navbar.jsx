// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import AnimatedButton from './AnimatedButton';
import DarkModeToggle from './DarkMode';
import { IoIosArrowDropright } from 'react-icons/io';
import jifar_logo from "../images/jifar_logo.svg";
import { MdOutlineElectricalServices } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { FaUsersGear } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    AOS.init({
        once: false 
    });
}, []); 


  let menuRef = useRef();


  
  useEffect(() => {
  
          document.addEventListener("mousedown", (e)=>{
            if(!menuRef.current.contains(e.target)){
              setIsOpen(true)}}); 
             }
          );
          
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    
    const scrollPosition = window.scrollY;
    const stickyThreshold = 200; 
    setIsSticky(scrollPosition > stickyThreshold);
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav ref={menuRef} className={` ${isSticky ? 'special-bg2 top-0 text-slate-200' : 'bg-transparent text-md text-neutral-900 dark:text-slate-200 pt-5'} transition-all duration-300 ${isSticky ? 'z-40 fixed left-0  right-0 shadow-lg' : ''}`}>
      <div className="container max-w-[1400px] mx-auto flex items-center justify-between p-1 pb-5                            lg:pb-2">
        <div data-aos="fade-down" data-aos-delay="200" className="cursor-pointer z-30 " onClick={scrollToTop}>
          <img src={jifar_logo} alt="jifar logo" className={` ${isSticky ? 'w-32 lg:w-40' : 'w-32 lg:w-52'}`}/>
        </div>
        {/* Large devices */}
        <div className="hidden z-30 lg:flex items-center space-x-7 text-md">
          <ScrollLink
            to="services"
            href=''
          
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 hover:underline hover:underline-offset-8 "
            data-aos="fade-down" 
            data-aos-delay="200"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about-us"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 hover:underline hover:underline-offset-8"
            data-aos="fade-down" 
            data-aos-delay="300"
          >
            About us
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 hover:underline hover:underline-offset-8"
            data-aos="fade-down" 
            data-aos-delay="400"
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="footer"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 hover:underline hover:underline-offset-8"
            data-aos="fade-down" 
            data-aos-delay="500"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="calendly"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=""
            data-aos="fade-down" 
            data-aos-delay="600"
          >
          <div className="hidden lg:flex z-30 ">
            <AnimatedButton namee={"BOOK NOW"} />
          </div>
          </ScrollLink>
          
        </div>
        <div className='lg:hidden z-40 flex gap-6'>
        <div className=''>
            <DarkModeToggle />
          </div>
        <div className="z-30 lg:hidden cursor-pointer" onClick={() =>  setIsOpen(!isOpen)}> 
          <HiOutlineMenuAlt2 size={27} />
          </div>
        </div>

        {/* Small devices */}
        {/* Sidebar for small devices */ }
        <article  className={`lg:hidden fixed z-50 top-0 bottom-0 -left-1/2 h-screen w-1/2 text-black bg-zinc-300 dark:text-white dark:bg-neutral-900 py-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col'>
            <div className="flex justify-start mt-3">
              <img src={jifar_logo} className='w-32' alt="Jifar's logo" />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-6 right-2 opacity-70"
              >
                <IoIosArrowDropright size={30} color='#ED7D31' />
              </button>
            </div>
            <div>
              <ul className="flex flex-col text-sm md:text-lg items-start mt-7">
                <li className="w-full border-b-2 truncate  hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400  hover:cursor-pointer ">
                  <ScrollLink
                    to="services"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-1 md:px-3 py-2 flex gap-2 hover:translate-x-3 duration-150 items-center "
                    onClick={() => { setIsOpen(!isOpen) }}
                      >
                        <MdOutlineElectricalServices className='hid' size={20}/>
                    Services
                  </ScrollLink>
                </li>
                <li className="w-full  border-b-2 hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400 hover:cursor-pointer">
                  <ScrollLink
                    to="about-us"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-1 md:px-3 py-2 flex gap-2 items-center hover:translate-x-3 duration-150"
                    onClick={() => { setIsOpen(!isOpen) }}
                      >
                        <IoHome className='hid' size={20}/>
                        About us
                  </ScrollLink>
                </li>
                <li className="w-full truncate  border-b-2 hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400 hover:cursor-pointer">
                  <ScrollLink
                    to="testimonials"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-1 md:px-3 py-2 flex gap-2 items-center hover:translate-x-3 duration-150"
                    onClick={() => { setIsOpen(!isOpen) }}
                      >
                        <FaUsersGear className='hid' size={20}/>
                        Testimonials
                  </ScrollLink>
                </li>
                <li className="w-full  border-b-2 hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400 hover:cursor-pointer">
                  <ScrollLink
                    to="footer"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-1 md:px-3 py-2 flex gap-2 items-center hover:translate-x-3 duration-150"
                    onClick={() => { setIsOpen(!isOpen) }}
                      >
                        <GrContact className='hid' size={20}/>
                        Contact
                  </ScrollLink>
                </li>
                
              </ul>
              <ScrollLink
                to="calendly"
                href=''
                spy={true}
                smooth={true}
                offset={-7}
                duration={500}
                onClick={() => { setIsOpen(!isOpen) }}
              >
               <div className="flex justify-center truncate mt-5">
                  <AnimatedButton namee={"BOOK NOW"} />
                </div>
              </ScrollLink>
            </div>
          </div>
        </article>
      </div>
    </nav>
  );
};

export default Navbar;