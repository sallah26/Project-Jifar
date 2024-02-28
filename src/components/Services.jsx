import React, { useEffect, useMemo, useState } from 'react'
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "odometer/themes/odometer-theme-default.css";

import image0 from "../images/service1.png"
import image1 from "../images/case-study-5.png";
import image2 from "../images/service3.webp";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Services = () => {
  useEffect(() => {
    AOS.init({
      // offset: 50,
        once: false 
    });
}, []); 
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

 
  const servicesData = [
    {
      id: 0,
      title: "Mastery requires focus, therefore...",
      description1:
        "We don't offer any other services except for paid advertising on Meta...",
      description2:
      [  "No social media management",  "No instagram growth",  "No web design",  "No PR service",  "No content creation",  "No email marketing",  "No seo"]      
    },
          {
      id: 1,
      title: "Interior design leads using the power of Meta ads.",
      description1:
        "We help home interior design business owners escape the competition on YouTube & Google and instead leverage the power of Meta ads. It's a powerful, dynamic advertising platform that offers huge opportunity for business owners.",
      description2:
        null,
    },
    {
      id: 2,
      title: "Leads that convert over and over again. Quality.",
      description1:
        "Our clients rave about our leads, highlighting three key advantages over those from Google ads, Facebook ads, Instagram ads, and other traffic sources: they're more cost-effective to acquire, convert into sales faster, and are more reliable in securing successful transactions.",
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
        <div className="w-full lg:mt-16 serv lg:w-6/12 relative" >
                
               
             
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              arrows: true,
              pagination: true,
              paginationDirection: true,
            }}
            onMoved={(splide) => {
              setCurrentSlideIndex(splide.index);
            }}
          >
            {servicesData.map((testimonial) => (
              <SplideSlide key={testimonial.id}>
                <div className="flex flex-col gap-3 ">
            
                  <p className="text-md lg:text-lg -pb-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ED7D31] to-[#a34f17]" data-aos="fade-left" data-aos-delay="0" >
                    Our service:
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