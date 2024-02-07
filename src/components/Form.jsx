import React from "react";
import { FaPhoneAlt, FaUserAlt, FaMailchimp, FaFax, FaPassport } from "react-icons/fa";
const Form = () => {
  

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
          <div className="flex flex-col  lg:flex-row items-center justify-center gap-3 lg:gap-4">
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
                  <FaPassport
                    size={18}
                    className="absolute right-3 text-gray-600 bottom-3"
                  />
                </div>
              </div>
            </div>
            <div className="second-col px-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam adipisci laudantium, minus magni distinctio vero
                laboriosam veniam, maiores praesentium, saepe voluptatem illo
                eligendi fugit! Porro perspiciatis eligendi amet unde tempore?
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 md:w-1/3 bg-gradient-to-br from-slate-700 to-gray-900 hover:-translate-y-1 border-[1px] border-slate-700 duration-150 rounded-full p-2 px-5 text-white mt-4"
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





// import React from 'react'

// const Form = () => {
//   return (
//     <section className="z-40 top-0 flex justify-center items-center w-full min-h-full bg-neutral-900 bg-opacity-30">
//       <div className="flex flex-col justify-center z-50  rounded-xl md:w-1/2 lg:min-w-[500px] p-5 lg:p-14 bg-slate-100 dark:bg-[#2C3333] border-[1px] border-slate-600 dark:text-neutral-300">
//         <p className="text-neutral-900  text-xl lg:text-4xl text-center font-bold mb-5 dark:text-neutral-300">
//           Lorem ipsum dolor sit amet adipisicing elit!
//         </p>
//         <div className="border-neutral-700 border-b-[1px] w-3/4 flex mx-auto mb-5"></div>
        // <form action=" " className="flex flex-col gap-3 lg:gap-4 ">
        //   <div className="flex flex-col gap-1">
        //     <label htmlFor="name">Enter Your Name Here</label>
        //     <input
        //       type="text"
        //       name=""
        //       id="name"
        //       placeholder="Your Name"
        //       className="h-9 px-3 rounded-lg border-2 border-neutral-300"
        //     />
        //   </div>

        //   <div className="flex flex-col gap-1">
        //     <label htmlFor="email">Your Work Email</label>
        //     <input
        //       type="email"
        //       name=""
        //       id="email"
        //       placeholder="Your Email"
        //       className="h-9 px-3 rounded-lg border-2 border-neutral-300"
        //     />
        //   </div>

        //   <div className="flex flex-col gap-1">
        //     <label htmlFor="phNumber">Your Phone Number</label>
        //     <input
        //       type="text"
        //       name=""
        //       id="phNumber"
        //       placeholder="phone number"
        //       className="h-9 px-3 rounded-lg border-2 border-neutral-300"
        //     />
        //   </div>

        //   <div className="flex flex-col gap-1">
        //     <label htmlFor="date">Select your calander</label>
        //     <input
        //       type="date"
        //       name=""
        //       id="date"
        //       placeholder="Your Name"
        //       className=""
        //     />
        //   </div>
        //   <div className="flex justify-center">
        //     <button
        //       type="submit"
        //       className="w-1/2 bg-gradient-to-br from-slate-700 to-gray-900 hover:-translate-y-1 border-[1px] border-slate-700 duration-150 rounded-full p-2 px-5 text-white mt-4"
        //     >
        //       Book Now
        //     </button>
        //   </div>
        // </form>
//       </div>
//     </section>
//   );
// }

// export default Form
