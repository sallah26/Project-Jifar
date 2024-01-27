import React from 'react'
import meta_image from "../images/logo-Meta.png";
import right_curv from "../images/bubble-42.png";
import line from "../images/line-9.png";


const WhatWeDoFirst = () => {
  return (
    <section className="bg-stone-800 text-neutral-100 special-bg relative">
      <div className="absolute z-20 left-0 mt-6 lg:mt-24">
        <img src={right_curv} className="h-auto" alt="right curv img" />
      </div>
      <div className="container z-20 p-5 md:py-24  mx-auto px-4 flex flex-col md:flex-row max-w-[1340px]">
        <div className="flex p-2 flex-col gap-1 w-full">
          <p className="text-md font-bold z-30 ">
            What we offer | Ads, Just Ads | Only For Event Planners
          </p>
          <h1 className=" z-30 text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">
            PAID ADVERTISING
          </h1>
          <p className="text-md mt-8 z-30 text-neutral-200">
            We do one thing - we just do it with a monastic focus and better
            than anyone else.If you want an agency that offers a full service
            solution of everything that won’t move the needle forward, we’re not
            for you.
          </p>
          <p className="text-md mt-5">
            If you want an agency where with two clicks, you can get a clear
            breakdown of how much was spent, how much was made & what your net
            profit was - we’re for you.
          </p>
          <h2 className="text-2xl font-semibold mt-8">
            MASTERY DEMANDS FOCUS SO....
          </h2>
        </div>
        <div style={{}} className=" w-full ">
          <img src={meta_image} alt=" Meta-imagee" className="" />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoFirst