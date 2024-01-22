import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import image from "../images/3D-Man (1).png"


const Testimonials = () => {
  const testimonialsData = [
    { id: 1, name: "John Doe", text: "Great service! I'm very satisfied." },
    {
      id: 2,
      name: "Jane Smith",
      text: "Awesome experience with this company.",
    },
    { id: 3, name: "Bob Johnson", text: "Highly recommend their services." },
    { id: 4, name: "Bob Johnson", text: "Highly recommend their services." },
    { id: 5, name: "Bob Johnson", text: "Highly recommend their services." },
    { id: 6, name: "Bob Johnson", text: "Highly recommend their services." },
    { id: 7, name: "Bob Johnson", text: "Highly recommend their services." },
    { id: 8, name: "Bob Johnson", text: "Highly recommend their services." },
    { id: 9, name: "Bob Johnson", text: "Highly recommend their services." },
  ];

  const splideOptions = {
    type: "loop",
    perPage: 5,
    perMove: 1,
  };

  return (
    <div className="testimonials">
      <Splide options={splideOptions}>
        {testimonialsData.map((testimonial) => (
          <SplideSlide key={testimonial.id}>
            <div className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonials;