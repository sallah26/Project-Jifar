import React, { useEffect } from 'react'
import AOS from "aos";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({
        once: false // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <footer id='footer' className="relative special-bg text-sm md:text-md text-neutral-100 flex justify-center">
      <div className="max-w-[1340px] p-5 lg:p-1 flex flex-col lg:flex-row justify-between items-center py-7 lg:py-14 ">
        <div className="lg:w-2/5">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <p data-aos="fade-up" data-aos-delay="100" className="text-3xl font-mono">Jifar</p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                veritatis ipsum. Fuga quo, quas dolore ducimus natus maxime est
                tempore pariatur magni similique omnis ipsam. Similique tenetur
                harum quis vitae.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className="flex gap-7">
              <FaInstagram  size={25} className=' hover:-translate-y-1 duration-150 hover:cursor-pointer'/>
              <FaTelegram size={25} className=' hover:-translate-y-1 duration-150 hover:cursor-pointer'/>
              <FaFacebookF size={25} className=' hover:-translate-y-1 duration-150 hover:cursor-pointer'/>
              <FaTwitter size={25} className=' hover:-translate-y-1 duration-150 hover:cursor-pointer'/>
              <FaTiktok size={25} className=' hover:-translate-y-1 duration-150 hover:cursor-pointer'/>
            </div>
          </div>
        </div>

        <div className="w-full mb-10 lg:mb-10 lg:w-1/3 mt-10 lg:mt-1 flex justify-between">
          {/* <div className=""> */}
          <ul className="gap-2">
            <li data-aos="fade-up" data-aos-delay="50" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Ethiopia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Africa</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="150" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Sudan</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Somalia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="250" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">China</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Eriteria</a>
            </li>
          </ul>
          <ul className="">
            <li data-aos="fade-up" data-aos-delay="50" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Ethiopia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Africa</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="150" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Sudan</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Somalia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="250" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Somalia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Somalia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="350" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">China</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="400" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Eriteria</a>
            </li>
          </ul>
          <ul className="gap-2">
            <li data-aos="fade-up" data-aos-delay="50" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Ethiopia</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Africa</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="150" className="pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 ">
              <a href="#">Sudan</a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
      <p className="absolute  bottom-3  ">©Copyright Jifar-constr | 2024</p>
    </footer>
  );
}

export default Footer