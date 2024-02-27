import React, { useEffect } from 'react'
import AOS from "aos";
import AnimatedCounter from './AnimatedCounter ';
import right_curv from "../images/icon-3.png";
import feautre_img1 from "../images/icon-3.png";
import feautre_img2 from "../images/icon-34.png";
import feautre_img3 from "../images/icon-37.png";
import feautre_img4 from "../images/icon-39.png";


const Performance = () => {
  useEffect(() => {
    AOS.init({
        once: false // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount

    const PerformanceData = [
      {
        id: 0,
        title: "Clients Helped",
        img: feautre_img1,
        amount: 10,
        sign: "+",
        delay: "150",
      },
      
      {
        id: 1,
        title: "Max. clients",
        img: feautre_img2,
        amount: 25,
        sign: "",
        delay: "450",
      },
      {
        id: 2,
        title: "Total Ad Spend",
        img: feautre_img2,
        amount: 27,
        sign: "%",
        delay: "750",
      },
      
      {
        id: 2,
        title: "Service Offer",
        img: feautre_img4,
        amount: 1,
        //sign: "+",
        delay: "850",
      }
    ];
  return (
    <section
      id="performance"
      className="py-8  lg:py-20 mx-auto text-neutral-800 dark:text-neutral-100 relative max-w-[1340px]"
    >
      <div className="absolute z-20 left-0 mt-6 lg:mt-24">
        {/* <img src={right_curv} className="h-auto" alt="right curv img" /> */}
      </div>
      <div className="flex flex-col items-center justify-center mb-5 lg:mb-10 mx-auto">
        <p className="text-md lg:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ED7D31] to-[#a34f17]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
          Featured Case Study
        </p>
        <p className="text-3xl lg:text-4xl p-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">Performance Highlights</p>
        <p className="text-base w-full lg:w-1/2 text-center p-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
          Here at Jifar Home Services Agency, we've worked with the best in the industry to produce
          thousands of dollars in return on ad spend. We do away with the the
          inefficiencies & formalities that plague most agencies.
        </p>
      </div>
      <div className="container p-4 justify-center grid gap-3 lg:gap-5 grid-cols-2 lg:grid-cols-4">
        {PerformanceData.map((feature) => {
          return (
            <div
              key={feature.id}
              data-aos="fade-up" data-aos-delay={feature.delay}
              className="flex max-h-80 flex-col gap-4 items-center justify-center py-6 lg:py-10 shadow-2xl  shadow-stone-900 dark:shadow-stone-500 special-bg border-2 border-neutral-700  text-white hover:bg-slate-700 hover:-translate-y-3 duration-300 rounded-2xl "
            >
              <img src={feature.img} alt={`${feature.title} picturee`} />
              <p className="text-md lg:text-lg">{feature.title}</p>
              <div className="text-3xl lg:text-6xl text-[#ED7D31]">
                <p className="text-4xl lg:text-6xl">
                  <AnimatedCounter value={feature.amount} />
                  {feature.sign}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Performance