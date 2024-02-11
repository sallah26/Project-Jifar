import React, { useEffect, useMemo, useState } from 'react'
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

import image0 from "../images/case-study-4 (1).png"
import image1 from "../images/case-study-5.png";
import image2 from "../images/case-study-6.png";
import AnimatedCounter from './AnimatedCounter ';



const Services = () => {
  useEffect(() => {
    AOS.init({
        once: false // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  //  const [counterValue, setCounterValue] = useState(0);

  //  const limit = 1100;

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
    <section
      id="services"
      className="flex justify-center special-bg text-neutral-100"
    >
      <div className="flex w-full lg:max-w-[1470px]  py-5 lg:py-10 t">
        <div className="w-full serv lg:w-6/12">
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
                  <p className="text-md lg:text-lg -pb-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700" data-aos="fade-right" data-aos-delay="50" >
                    Our services are
                  </p>
                  <p className="text-3xl lg:text-4xl" data-aos="fade-right" data-aos-delay="150" >{testimonial.title}</p>
                  <p className="text-md" data-aos="fade-right" data-aos-delay="300" >{testimonial.description1}</p>
                  <p className="text-md" data-aos="fade-right" data-aos-delay="450" >{testimonial.description2}</p>
                  <div className="my-4 flex gap-8 lg:gap-16 text-4xl lg:text-5xl text-fuchsia-600 odos">
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
                        this is nicee
                      </p>
                    </div>

                    {/* <AnimatedCounter valu .
                    e={95} /> */}
                  </div>
                  {/* </div> */}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="hidden lg:flex img-center ">
          <img
            src={Images[currentSlideIndex]}
            alt={`${currentSlideIndex} Img from my`}
            className=""
          />
          {/* <p className="text-6xl">{currentSlideIndex} This is image part????</p> */}
        </div>
      </div>
    </section>
  );
}

export default Services