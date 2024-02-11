import React, { useEffect } from 'react'
import AOS from 'aos';
import AnimatedButton from './AnimatedButton';
import man_image from "../images/3D-Man (1).png"
import window_img from "../images/window.png"

const Hero = () => {
  useEffect(() => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        offset: 200,
        once: true // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount


  return (
    <main className="py-8 ">
      <section className="container min-h-screen  dark:text-neutral-200 text-neutral-800 mx-auto px-4 grid lg:grid-cols-2 max-w-[1400px]">
        <div className="py-4 lg:py-10 lg:mt-6">
          <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col text-4xl font-semibold md:text-6xl lg:font-bold">
            <p className="lg:pb-2">Smart Choices</p>
            <p className="">
              <span className=" lg:py-3  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800">
                Strong Results
              </span>{" "}
              <span className="pt-2">Choose Us</span>
            </p>
          </div>
          <p className="p-2 lg:pt-8">
            We Help Event Planning Service & Businesses Produce Spine-Chilling
            ROI Via Paid Advertisement. Stop wasting time and money on faulty
            and ineffective ad campaigns. It's time to make your ad-budget
            count, scale your business and blow up your sales.
          </p>
          <div className="mt-2">
            <AnimatedButton name={"BOOK A QUICK CALL"} myWidth="300px" />
          </div>
        </div>
        <div className="relative p-4">
          <img src={window_img} className="w-4/6 lg:w-3/4 h-auto" alt="" />
          <img
            src={man_image}
            alt=""
            className="absolute top-20 left-20  w-4/5 lg:w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero