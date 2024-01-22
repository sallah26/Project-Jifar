import React from 'react'
import AnimatedButton from './AnimatedButton';
import man_image from "../images/3D-Man (1).png"
import window_img from "../images/window.png"

const Hero = () => {
  return (
    <main className="py-8 ">
      <section className="container min-h-screen  dark:text-neutral-200 text-neutral-800 mx-auto px-4 grid lg:grid-cols-2 max-w-[1400px]">
        <div className="py-4 lg:py-10 lg:mt-6">
          <div className="flex flex-col text-5xl font-bold md:text-6xl lg:font-bold">
            <p className="lg:pb-2">Smart Choices</p>
            <p className="">
              <span className=" lg:py-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800">
                Strong Results
              </span>{" "}
              <span className='pt-2'>Choose Us</span>
            </p>
          </div>
          <p className="md:p-2 mt-3 lg:mt-0 lg:pt-8 text-md lg:text-lg">
            We Help Event Planning Service & Businesses Produce Spine-Chilling
            ROI Via Paid Advertisement. Stop wasting time and money on faulty
            and ineffective ad campaigns. It's time to make your ad-budget
            count, scale your business and blow up your sales.
          </p>
          <div className="mt-8 lg:mt-3 md:ml-2">
            <AnimatedButton name={"BOOK A QUICK CALL"} myWidth="300px" />
          </div>
        </div>
        <div className="relative md:p-4">
          <img src={window_img} className="w-4/6 lg:w-3/4 h-auto" alt="" />
          <img
            src={man_image}
            alt=""
            className="absolute top-5 left-10 md:top-20 md:left-20  w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero