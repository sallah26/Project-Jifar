import React, { useEffect } from 'react'
import AOS from 'aos';
import meta_image from "../images/logo-Meta.png";
import right_curv from "../images/bubble-42.png";

const WhatWeDoFirst = () => {
  useEffect(() => {
    AOS.init({
        once: false, 
        offset: 20
    });
}, []); 
  return (
    <section id='about-us' className="relative bg-stone-800 text-neutral-100 special-bg ">
      <div className="absolute left-0 mt-6 lg:mt-24 z-10!important">
        <img src={right_curv} className="h-auto" alt="right curv img" />
      </div>
      <div className="z-30 container p-5 md:py-24  mx-auto px-4 flex flex-col md:flex-row justify-center items-center max-w-[1340px]">
        <div className="flex py-2 flex-col w-full">
          <p className="text-md my-1 font-bold " data-aos="fade-right" data-aos-delay="50" >
            What we offer | Ads, Just Ads | for Interior Designers
          </p>
          <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700" data-aos="fade-right" data-aos-delay="100" >
            PAID ADVERTISING
          </h1>
         <p className="text-md mt-8 text-neutral-200" data-aos="fade-right" data-aos-delay="150" >
          We specialize in one thing: running ads. With unwavering focus, we excel at it like no other. 
          If you're seeking an agency that delivers results by cutting through the noise, we're your perfect fit. Say goodbye to 
          distractions and hello to impactful advertising that drives real growth.
          
          </p>
          <p className="text-md mt-5" data-aos="fade-right" data-aos-delay="200" >
          If you're seeking an agency where you can easily track your expenses, revenue, 
          and net profit with just a couple of clicks, then we're the right choice for you.
          </p>
        
        </div>
        <div style={{}} className=" w-full ">
          <img src={meta_image} alt=" Meta-imagee" data-aos="fade-left" data-aos-delay="300"  className="" />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoFirst