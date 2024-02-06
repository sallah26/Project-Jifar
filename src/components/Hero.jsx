import React from 'react'
import AnimatedButton from './AnimatedButton';
import man_image from "../images/3D-Man (1).png"
import hero_img from "../images/Hero_bg3.png"

const Hero = () => {
  return (
    <main className="py-1 " id='hero'>
      <section className="container min-h-screen  dark:text-neutral-200 text-neutral-800  mx-auto px-4 flex flex-col lg:flex-row max-w-[1400px]">
        <div className="py-4 lg:py-20 w-full lg:w-1/2 ">
          <div className="flex flex-col  text-5xl font-bold md:text-6xl lg:font-bold">
            <p className="lg:pb-2">Smart Choices</p>
            <p className="">
              <span className=" lg:py-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800">
                Strong Results
              </span>{" "}
              <span className='pt-2'>Choose Us</span>
            </p>
          </div>
          <p className="md:p-2 mt-3 lg:mt-0 lg:pt-6 text-md lg:text-lg">
            We Help Event Planning Service & Businesses Produce Spine-Chilling
            ROI Via Paid Advertisement. Stop wasting time and money on faulty
            and ineffective ad campaigns. It's time to make your ad-budget
            count, scale your business and blow up your sales.
          </p>
          <div className="mt-8 lg:mt-3 md:ml-2">
            <AnimatedButton name={"BOOK A QUICK CALL"} myWidth="300px" />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:p-4">
          <img src={hero_img} alt="hero imagee"/>
        </div>
      </section>
    </main>
  );
}

export default Hero