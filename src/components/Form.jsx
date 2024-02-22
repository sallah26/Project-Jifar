import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App h-auto ">
      <div className="flex flex-col items-center ">
        <p data-aos="fade-up" data-aos-delay="250" className="text-md lg:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ED7D31] to-[#a34f17]">
        Let's Work Together
        </p>
        <p data-aos="fade-up" data-aos-delay="350" className="text-3xl lg:text-4xl dark:text-neutral-200">Book a Quick Call With Us?</p>
        
      </div>
      <InlineWidget url="https://calendly.com/nesredin/welcome-to-jifar-agency-booking" />
    </div>
  );
};

export default App;
