import React from 'react'
import meta_image from "../images/logo-Meta.png";


const WhatWeDoFirst = () => {
  return (
    <section className="bg-stone-800 special-bg">
      <div className="container p-5 md:py-24 dark:text-neutral-100 text-neutral-800 mx-auto px-4 grid md:grid-cols-2 max-w-[1340px]">
        <div className="flex p-2 flex-col gap-1">
          <p className="text-md font-bold">
            What we offer | Ads, Just Ads | Only For Event Planners
          </p>
          <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800">
            PAID ADVERTISING
          </h1>
          <p className="text-md mt-8">
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
          <h2 className='text-2xl font-semibold mt-8'>MASTERY DEMANDS FOCUS SO....</h2>
        </div>
        <div>
        <img src={meta_image} alt="Meta-imagee" />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoFirst