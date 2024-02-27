import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AOS from "aos";
import jifar_logo from "../images/jifar_logo.svg";
import { FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
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
      <div className='flex flex-col gap-4 items-center justify-center py-4'>
        <img src={jifar_logo} alt="jifar logo" className='w-1/2 md:w-40 pt-3'/>
        <p className='text-3xl lg:text-4xl text-[#ED7D31] font-semibold'>Jifar Home Services Agency</p>
        <p><a href='https://jifarhomes.com' className="text-sm">JifarHomeS.com </a>| nesredin@jifarhomes.com</p>
        <div className='flex gap-3 sm:max-w-[300px]'>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#1DA1F2] duration-150'>
            <FaTwitter size={22}/>
          </a>
          <a href='#' className='p-2.5  bg-slate-900 rounded-sm hover:text-[#1877F2] duration-150'>
            <FaFacebookF size={22}/>
          </a>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#bc2a8d] duration-150'>
            <FaInstagram size={22}/>
          </a>
          <a href='https://www.youtube.com/channel/UCpIilKN9IOLBX2I6PWRPHGQ' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#FF0000] duration-150'>
            <FaYoutube size={22}/>
          </a>
          <a href='#' className='p-2.5 bg-slate-900 rounded-sm hover:text-[#E60023] duration-150'>
            <FaPinterestP size={22}/>
          </a>
        </div>
      </div>
        <p className="text-center p-2 bg-slate-800 cpright mt-5"><span className='text-[#ED7D31]'>©copyright 2024 Jifar Agency</span> | <a className='text-blue-500' href="https://SelahadinH.vercel.app">Developed By Selahadin H.</a></p>
      <div className="absolute z-50 flex flex-col gap-1 mb-less  rounded-full bg-[#ED7D31] text-white  ">
        <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className=""
            
              >
                <div className=' pb-1 pt-2 px-1 hover:cursor-pointer'>
                  <IoArrowUpSharp size={35}  className='bounc-up '/>
                </div>
          </ScrollLink>
      </div>
    </footer>
  );
}

export default Footer