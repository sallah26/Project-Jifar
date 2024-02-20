import React, { useEffect, useMemo, useState } from 'react'
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

import image0 from "../images/case-study-4 (1).png"
import image1 from "../images/case-study-5.png";
import image2 from "../images/case-study-6.png";
import AnimatedCounter from './AnimatedCounter ';
import { MdOutlineVerifiedUser } from "react-icons/md";


const Services = () => {
  useEffect(() => {
    AOS.init({
      // offset: 50,
        once: false // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  //  const [counterValue, setCounterValue] = useState(0);

  //  const limit = 1100;

  const servicesData = [
    {
      id: 0,
      title: "MASTERY DEMANDS FOCUS SO....",
      description1:
        "We don't offer any other services except for paid advertising on Meta...",
      description2:
          ["No SOCIAL MEDIA MANAGEMENT",	"​No INSTAGRAM GROWTH",	"No WEB DESIGN",	"No PR SERVICE", "​No CONTENT CREATION",	"​No EMAIL MARKETING",	"No SEO]"],
    },
          {
      id: 3,
      title: "Interior design leads using the power of Meta ads.",
      description1:
        "We help home interior design business owners escape the competition on YouTube & Google and instead leverage the power of Meta ads. It's a powerful, dynamic advertising platform that offers huge opportunity for business owners.",
      description2:
        null,
    },
    {
      id: 2,
      title: "We only work with interior design businesses. We only do Meta ads.",
      description1:
        "We are a specialist interior design leads,S company that works only with interior design businesses. We do not work with any other industry. We use Meta ads to locate and attract motivated, qualified ‘ready to buy’ customers.",
      description2:
        null,
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
                  <p className="text-md lg:text-lg -pb-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ED7D31] to-[#a34f17]" data-aos="fade-left" data-aos-delay="0" >
                    Our services are
                  </p>
                  <p className="text-3xl lg:text-4xl" data-aos="fade-right" data-aos-delay="50" >{testimonial.title}</p>
                  <p className="text-md" data-aos="fade-left" data-aos-delay="100" >{testimonial.description1}</p>
                  {testimonial.description2 ? <div>
                         {testimonial.description2.map((datm) => {
                          return(
                            <div className='flex gap-1 items-center mt-0.5'>
                            <MdOutlineVerifiedUser color='#ED7D31' size={24}/><p>{datm}</p>
                            </div>
                          )
                         })}
                  </div> : <div>
                          </div>}
                  {/* <p className="text-md" data-aos="fade-right" data-aos-delay="150" >{testimonial.description2}</p> */}
                  <div className="my-2 flex gap-8 lg:gap-16 text-4xl lg:text-5xl text-[#ED7D31] odos">
                    <div data-aos="fade-left" data-aos-delay="350">
                      <AnimatedCounter value={23} />%
                      <p className="text-white " style={{ fontSize: "20px" }}>
                        this is nice
                      </p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" className=" border-l-2 border-neutral-500">
                      <span  className="h-5 my-line bg-red-500"></span>
                    </div>
                    <div className="" data-aos="fade-left" data-aos-delay="350">
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
            data-aos="fade-right" 
            data-aos-delay="200"
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