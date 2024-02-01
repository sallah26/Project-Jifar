import React, { useEffect, useMemo, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

import image0 from "../images/case-study-4 (1).png"
import image1 from "../images/case-study-5.png";
import image2 from "../images/case-study-6.png";
import AnimatedCounter from './AnimatedCounter ';



const Services = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

   const [counterValue, setCounterValue] = useState(0);

   const limit = 1100;

  //  useEffect(() => {
  //    const intervalId = setInterval(() => {
  //      setCounterValue((prevValue) => {
  //        const newValue = prevValue + 100;

  //        // Check if the new value exceeds the limit
  //        if (newValue >= limit) {
  //          clearInterval(intervalId); // Stop the interval
  //          return limit // Set the counter value to the limit
  //        }
  //        return newValue;
  //      });
  //    }, 100);

  //    return () => {
  //      clearInterval(intervalId);
  //    };
  //  }, [])




  const servicesData = [
    {
      id: 0,
      title: "Wedding Planner's Success Story",
      description1:
        "Challenge: Lovely Events Wedding Planning, a local wedding planner, was looking to expand its clientele beyond word-of-mouth referrals. They wanted to reach a wider audience to increase bookings.",
      description2:
        "Solution: We crafted a targeted digital advertising campaign for Lovely Events, highlighting their unique wedding planning services. We utilized platforms like Facebook and Instagram to showcase their beautiful weddings, expert team, and client testimonials.",
    },
    {
      id: 3,
      title: "This part will talk about ?",
      description1:
        "Challenge: Lovely Events Wedding Planning, a local wedding planner, was looking to expand its clientele beyond word-of-mouth referrals. They wanted to reach a wider audience to increase bookings.",
      description2:
        "Solution: We crafted a targeted digital advertising campaign for Lovely Events, highlighting their unique wedding planning services. We utilized platforms like Facebook and Instagram to showcase their beautiful weddings, expert team, and client testimonials.",
    },
    {
      id: 2,
      title: "Jifar construction is my bes?",
      description1:
        "Challenge: Lovely Events Wedding Planning, a local wedding planner, was looking to expand its clientele beyond word-of-mouth referrals. They wanted to reach a wider audience to increase bookings.",
      description2:
        "Solution: We crafted a targeted digital advertising campaign for Lovely Events, highlighting their unique wedding planning services. We utilized platforms like Facebook and Instagram to showcase their beautiful weddings, expert team, and client testimonials.",
    },
  ];
  const Images = [image0, image1, image2];

  return (
    <section className="flex justify-center special-bg text-neutral-100">
      <div className="flex w-full lg:max-w-[1340px] items-center justify-center">
        <div className="w-full lg:w-6/12">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              arrows: false,
              pagination: true,
              paginationDirection: true,
            }}
            onMoved={(splide) => {
              setCurrentSlideIndex(splide.index);
            }}
          >
            {servicesData.map((testimonial) => (
              <SplideSlide key={testimonial.id}>
                <div className="flex flex-col gap-3 lg:gap-5 ">
                  <p className="text-3xl lg:text-4xl">{testimonial.title}</p>
                  <p className="text-md">
                    {testimonial.description1}
                  </p>
                  <p className="text-md">
                    {testimonial.description2}
                  </p>
                  <div className="mt-4 flex gap-8 lg:gap-16 text-4xl lg:text-5xl text-fuchsia-600 odos">
                    <div>
                      <AnimatedCounter value={23} />%
                      <p className="text-white " style={{ fontSize: "20px" }}>
                        this is nice
                      </p>
                    </div>
                    <div className=" border-l-2 border-neutral-500">
                      <span className="h-5 my-line bg-red-500"></span>
                    </div>
                    <div className="">
                      <AnimatedCounter value={56} />%
                      <p className="text-white " style={{ fontSize: "20px" }}>
                        this is nice
                      </p>
                    </div>

                    {/* <AnimatedCounter value={95} /> */}
                  </div>
                  {/* </div> */}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="hidden lg:flex img-center">
          <img
            src={Images[currentSlideIndex]}
            alt={`${currentSlideIndex} Img from my`}
          />
          {/* <p className="text-6xl">{currentSlideIndex} This is image part????</p> */}
        </div>
      </div>
    </section>
  );
}

export default Services