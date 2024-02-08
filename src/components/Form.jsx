import React, { useState } from "react";
import DateTimePicker from "react-datetime";
import "./styles/form.css"

import { FaPhoneAlt, FaUserAlt, FaPassport } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);
const [isOpen, setIsOpen] = useState(true);
  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section
      id="form"
      className="py-8  lg:py-20 mx-auto text-neutral-800 dark:text-neutral-100 relative max-w-[1340px]"
    >
      <div className="absolute z-20 left-0 mt-6 lg:mt-24">
        {/* <img src={right_curv} className="h-auto" alt="right curv img" /> */}
      </div>
      <div className="flex flex-col items-center justify-center mb-5 lg:mb-10 mx-auto">
        <p className="text-md lg:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">
          Get in touch with us
        </p>
        <p className="text-3xl lg:text-4xl p-2">How can you find us</p>
        <p className="text-base w-full lg:w-1/2 text-center p-2">
          Here at E-wamp, we've worked with the best in the industry to produce
          thousands of dollars in return on ad spend. We do away with the the
          inefficiencies & formalities that plague most agencies.
        </p>
      </div>
      <div>
        <form action="" className=" ">
          <div className="flex flex-col  lg:flex-row  justify-center gap-3 lg:gap-4">
            <div className="first-col w-full flex flex-col gap-4 px-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Enter your name here</label>

                <div className="flex relative">
                  <input
                    className="w-full h-10 dark:text-gray-700 border-2 rounded-lg pr-9 px-3 border-gray-400"
                    type="text"
                    id="name"
                    placeholder="your name"
                  />
                  <FaUserAlt
                    size={18}
                    className="absolute right-3 text-gray-600 bottom-3"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="tel">Telephone address</label>

                <div className="flex relative">
                  <input
                    className="w-full h-10 dark:text-gray-700 border-2 rounded-lg pr-9 px-3 border-gray-400"
                    type="text"
                    id="tel"
                    placeholder="+251 9262..."
                  />
                  <FaPhoneAlt
                    size={18}
                    className="absolute right-3 text-gray-600 bottom-3"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Work email</label>
                <div className="flex relative">
                  <input
                    className="w-full h-10 dark:text-gray-700 border-2 rounded-lg pr-9 px-3 border-gray-400"
                    type="email"
                    id="email"
                    placeholder="abdullah@gmail.com"
                  />
                  <MdEmail
                    size={24}
                    className="absolute right-3 text-gray-600 bottom-3"
                  />
                </div>
                <div className="flex gap-1 items-start mt-2">
                  <input
                    className="w-7 h-7 rounded-md"
                    type="checkbox"
                    id="check"
                  />
                  <p>
                    I confir i fill correct and real information and i agree on
                    privacy and policy issues with jifar construction!
                  </p>
                </div>
              </div>
            </div>
            <div className="second-col px-4 py-2 lg:w-11/12 lg:ml-10">
              <label htmlFor="datepci">
                Pick suitable day for you to have a phone call.
              </label>
              <DateTimePicker
                id="datepci"
                className="pt-2"
                input={false}
                onChange={handleChange}
                value={selectedDate}
                open={isOpen}
                onFocus={() => setIsOpen(false)} // Open the date picker when the input is focused
              />
              <p className="mt-2">
                {selectedDate && (
                  <p>You have selected: {selectedDate.toLocaleString()}</p>
                )}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4 lg:mt-6">
            <button
              type="submit"
              className="w-3/4 md:w-1/3 bg-gradient-to-br dark:from-slate-600 from-slate-700 to-gray-900 hover:-translate-y-1 border-[1px] border-slate-700 duration-150 rounded-full p-2 px-5 text-white mt-4"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;