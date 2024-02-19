import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/dist/styles/splide.css";
import profile1 from "../images/profile_pics/testimonial-1.png"
import profile2 from "../images/profile_pics/testimonial-2.png"
import profile3 from "../images/profile_pics/testimonial-3.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      // offset: 50,
        once: false // Whether animation should happen only once
    });
  })
  const testimonialsData = [
    {
      id: 0,
      name: "Selahadin Hamid",
      expertise: "Software Engineer",
      delay: "200",
      profile: profile1,
      message:
        "“Their Facebook Ads expertise brought a flood of inquiries, and I've seen a substantial bookings. They understand the event industry inside out, and it shows in the results they deliver. ”",
    },
    {
      id: 1,
      name: "Alice Johnson",
      expertise: "UX Designer",
      delay: "400",
      profile: profile2,
      message:
        "“Their Facebook Ads expertise brought a flood of inquiries, and I've seen a substantial bookings. They understand the event industry inside out, and it shows in the results they deliver. ”",
    },
    {
      id: 2,
      name: "Kian Rashidi",
      expertise: `Frontend Developer at Google`,
      delay: "600",
      profile: profile3,
      message:
        "“Their Facebook Ads expertise brought a flood of inquiries, and I've seen a substantial bookings. They understand the event industry inside out, and it shows in the results they deliver. ”",
    },
    {
      id: 3,
      name: "Kian Rashidi",
      expertise: `Frontend Developer at Google`,
      delay: "800",
      profile: profile3,
      message:
        "“Their Facebook Ads expertise brought a flood of inquiries, and I've seen a substantial bookings. They understand the event industry inside out, and it shows in the results they deliver. ”",
    },
    {
      id: 4,
      name: "Kian Rashidi",
      expertise: `Frontend Developer at Google`,
      delay: "1000",
      profile: profile3,
      message:
        "“Their Facebook Ads expertise brought a flood of inquiries, and I've seen a substantial bookings. They understand the event industry inside out, and it shows in the results they deliver. ”",
    },
  ];

  const [slidesPerPage, setSlidesPerPage] = useState(3);
  
  const [totalPages, setTotalPages] = useState(3);

  const splideOptions = {
    type: "loop",
    perPage: slidesPerPage,
    perMove: 1,
    arrows: true,
    pagination: true,
    paginationClickable: true,
    // pagination: "slider", // Use "slider" for dynamic pagination
  };

   useEffect(() => {
     const updateSlidesPerPage = () => {
       const screenWidth = window.innerWidth;

       if (screenWidth >= 1024) {
         setSlidesPerPage(3); // Large screens, show 3 cards
       }  else {
         setSlidesPerPage(1); // Small screens, show 1 card
       }
     };

     updateSlidesPerPage(); // Call it initially
     window.addEventListener("resize", updateSlidesPerPage);
     const totalSlides = testimonialsData.length;
     const calculatedTotalPages = Math.ceil(totalSlides / slidesPerPage) + 2;

     return () => {
       window.removeEventListener("resize", updateSlidesPerPage);
     };
     setTotalPages(calculatedTotalPages);
   }, [slidesPerPage, testimonialsData]);

  return (
    <section className="flex justify-center py-6 lg:py-20 text-black dark:text-neutral-200" id="testimonials">
      <div className="testimonials w-full lg:max-w-[1400px]">
        <div className="p-6 lg:ml-11  flex flex-col gap-2  items-center justify-center">
          <p data-aos="fade-left" data-aos-delay="200" className="text-3xl lg:text-4xl">What Clients Say about us</p>
          <p data-aos="fade-left" data-aos-delay="350" className="text-md w-full lg:w-1/2 text-center">
            We ask our clients to share their experience with us by posting on
            social media and here it goes...
          </p>
        </div>
        <Splide options={splideOptions}>
          {testimonialsData.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <div data-aos="fade-left" data-aos-delay={testimonial.delay} className="flex testi duration-100 hover:border-b-2  border-slate-600 flex-col gap-5 p-2 md:pb-4 w-full md:max-w-[470px]">
                <p className="italic">{testimonial.message}</p>
                <div className="flex gap-2">
                  <div className="w-1/6">
                    <img
                      src={testimonial.profile}
                      alt="testimonial giver profile"
                      className="rounded-full w-12"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.expertise}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Testimonials;
