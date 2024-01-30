import React, { useEffect, useMemo, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Odometer from "react-odometerjs";
import image0 from "../images/case-study-4 (1).png"
import image1 from "../images/case-study-5.png";
import image2 from "../images/case-study-6.png";

const Services = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
      <div className="flex max-w-[1340px] items-center justify-center">
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
                <div className="flex flex-col gap-5 ">
                  <p className="text-5xl">{testimonial.title}</p>
                  <p className="">{testimonial.description1}</p>
                  <p className="">{testimonial.description2}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="hidden lg:flex img-center">
          <Odometer value={1234} options={{ 
            // auto: false, // Don't automatically initialize everything with class 'odometer'
            // selector: '.my-numbers', // Change the selector used to automatically find things to be animated
            // format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
            // duration: 3000, // Change how long the javascript expects the CSS animation to take
            // theme: 'car', Specify the theme (if you have more than one theme css file on the page)
            // animation: 'count' // Count is a simpler animation method which just increments the value,
                     // use it when you're looking for something more subtle. 
                    }} />
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