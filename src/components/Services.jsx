import React, { useEffect, useMemo, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image0 from "../images/case-study-4 (1).png"
import image1 from "../images/case-study-5.png";
import image2 from "../images/case-study-6.png";

const Services = () => {
    
    const [currentSlideIndex , setCurrentSlideIndex] = useState(0);

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
    const Images = [image0, image1, image2]

  const splideOptions = useMemo(
    () => ({
      type: "loop",
      perPage: 1,
      perMove: 1,
      arrows: true,
      pagination: false,
      
    }),
    [] // Empty dependency array means the object will be memoized once
  );

  return (
    <section className="flex justify-center bg-red-300">
      <div className="flex max-w-[1340px]">
        <div className="w-full lg:w-6/12">
          <Splide options={splideOptions} id="your-slider-id">
            {servicesData.map((testimonial) => (
              <SplideSlide key={testimonial.id}>
                {/* //   <Splide options={splideOptions}> */}
                {/* //     {servicesData.map((testimonial) => ( */}
                {/* //       <SplideSlide key={testimonial.id}> */}
                <div className="flex flex-col gap-5 ">
                  <p className="text-5xl">{testimonial.title}</p>
                  <p className="">{testimonial.description1}</p>
                  <p className="">{testimonial.description2}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="hidden lg:flex">
          <p className="text-6xl">{currentSlideIndex} This is image part????</p>
        </div>
      </div>
    </section>
  );
}

export default Services