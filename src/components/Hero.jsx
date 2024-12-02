import React, { useEffect } from 'react'
import AOS from 'aos';
import AnimatedButton from './AnimatedButton';
import man_image from "../images/3D-Man (1).png"
import window_img from "../images/window.png"
import hero_bg from "../images/Hero_bg3.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
        once: false // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount


  return (
    <main className="">
      <section className="container   dark:text-neutral-200 text-neutral-800 mx-auto px-4 flex flex-col lg:flex-row max-w-[1400px]">
        <div className="py-4 lg:py-10 flex flex-col gap-1 lg:mt-20 items-start w-full lg:w-5/6">
          {/* <div  className="flex flex-col text-4xl font-semibold md:text-6xl lg:font-bold"> */}
            <p data-aos="fade-up" data-aos-delay="700"  data-aos-offset="50" daa-aos-duration="400" className="text-4xl font-semibold md:text-6xl lg:font-bold">Smart Choices</p>
            <p data-aos="fade-up" data-aos-delay="850" className=" text-4xl font-semibold md:text-6xl lg:font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800">
                Strong Results
            </p>
              <p data-aos="fade-up" data-aos-delay="1000" className="text-4xl font-semibold md:text-6xl lg:font-bold">Choose Us</p>
          {/* </div> */}
          <p data-aos="fade-up" data-aos-delay="1200" className="p-2  ">
            We Help Event Planning Service & Businesses Produce Spine-Chilling
            ROI Via Paid Advertisement. Stop wasting time and money on faulty
            and ineffective ad campaigns. It's time to make your ad-budget
            count, scale your business and blow up your sales.
          </p>
          <div className="mt-2" data-aos="fade-up" data-aos-offset="150" data-aos-delay="50" >
            
            <AnimatedButton name={"BOOK A QUICK CALL"} myWidth="300px" />
          </div>
        </div>
        <div className="p-6 lg:p-16" >
          <img src={hero_bg} alt="hero image" data-aos="fade-up" data-aos-delay="1200" data-aos-anchor-placement="top-center" daa-aos-duration="5000"/>
          
        </div>
      </section>
    </main>
  );
}

export default Hero