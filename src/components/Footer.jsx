import React, { useEffect } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import AOS from "aos";
import jifar_logo from "../images/jifar_logo.svg"
import { FaArrowUp, FaInstagram, FaPinterest, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import { IoArrowUpSharp } from "react-icons/io5";

const Footer = () => {
  useEffect(() => {
    AOS.init({
        once: false
    });
}, []);

  return (
    <footer id='footer' className="relative special-bg text-md md:text-md text-neutral-200 ">
      <div className='flex flex-col gap-4 items-center py-4'>
        <img src={jifar_logo} alt="jifar logo" className='w-full lg:w-80 -pb-2'/>
        <p className='text-3xl lg:text-4xl text-[#ED7D31] font-semibold '>Jifar Agency</p>
        <p className="">JifarHomeS.com | jifar@homes.com</p>
        <div className='flex gap-3'>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#1DA1F2] duration-150'>
            <FaTwitter size={22}/>
          </a>
          <a href='#' className='p-2.5  bg-slate-900 rounded-sm hover:text-[#1877F2] duration-150'>
            <FaFacebookF size={22}/>
          </a>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#bc2a8d] duration-150'>
            <FaInstagram size={22}/>
          </a>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#FF0000] duration-150'>
            <FaYoutube size={22}/>
          </a>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#E60023] duration-150'>
            <FaPinterestP size={22}/>
          </a>
        </div>
      </div>
        <p className="text-center p-3 bg-slate-900 font-bold text-sm mt-5">©COPYRIGHT 2023 | <span className='text-[#ED7D31]'>JIFAR AGENCY</span> | POWERED BY JIFAR</p>
      
      
      
      
      
      
      
      
      <div className="absolute z-50 flex flex-col gap-1 bottom-10 right-10  rounded-full bg-zinc-900 text-white dark:bg-fuchsia-600 bg-opacity-35">
        <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className=""
            
              >
                <div className='pb-1 pt-2 px-1 hover:cursor-pointer'>
                  <IoArrowUpSharp size={45}  className='animate-bounce'/>
                </div>
          </ScrollLink>
      </div>
    </footer>
  );
}

export default Footer