import React, { useEffect } from 'react'
import AOS from 'aos';
import AnimatedButton from './AnimatedButton';
import man_image from "../images/3D-Man (1).png"
import window_img from "../images/window.png"
import hero_bg from "../images/Hero_bg3.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
        once: false
    });
}, []);

  return (
    <main className="" id='hero'>
      
      <section className="container   dark:text-neutral-200 text-neutral-800 mx-auto px-4 flex flex-col lg:flex-row max-w-[1400px]">
        <div className="py-4 lg:py-10 flex flex-col gap-2 lg:gap-1 lg:mt-20 items-start w-full lg:w-5/6">
            <p data-aos="fade-up" data-aos-delay="700"  data-aos-offset="50" daa-aos-duration="400" className="text-5xl font-semibold md:text-6xl lg:font-bold">Smart Choices</p>
            <p data-aos="fade-up" data-aos-delay="850" className=" text-5xl font-semibold md:text-6xl lg:font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800">
                Strong Results
            </p>
              <p data-aos="fade-up" data-aos-delay="1000" className="text-5xl font-semibold md:text-6xl lg:font-bold">Choose Us</p>
          <p data-aos="fade-up" data-aos-delay="1200" className="p-2  ">
          We specialize in helping interior design businesses in achieving exceptionally high ROI through our expertise in paid advertising.
          Stop wasting your resources on flawed and inefficient advertising campaigns any longer.
          It's time to maximize the impact of your ad budget, expand your business, and skyrocket your sales.

          </p>

          <div className="mt-2" data-aos="fade-up" data-aos-delay="1000" >
            <AnimatedButton name={"BOOK A QUICK CALL"} myWidth="300px" />
          </div>
        </div>
        <div className="p-6 lg:p-16" >
          <img src={hero_bg} data-aos="fade-up" data-aos-delay="500" alt="hero image" />
        </div>
      </section>
    </main>
  );
}

export default Hero