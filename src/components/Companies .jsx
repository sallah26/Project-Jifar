import React from "react";
import AnimatedCounter from "./AnimatedCounter ";
import right_curv from "../images/icon-3.png";
import logo_jifar1 from "../images/icon-3.png";
import logo_jifar2 from "../images/icon-34.png";
import logo_jifar3 from "../images/icon-37.png";
import logo_jifar4 from "../images/icon-39.png";

const Companies = () => {
const CompaniesData = [
  {
    id: 0,
    name: "Jifar Production",
    logo: logo_jifar1,
  },
  {
    id: 1,
    name: "Jifar Production",
    logo: logo_jifar2,
  },
  {
    id: 2,
    name: "Jifar Production",
    logo: logo_jifar3,
  },
  {
    id: 3,
    name: "Jifar Production",
    logo: logo_jifar4,
  },
  
];
  return (
    <section
      id="performance"
      className="py-8 flex flex-col special-bg  mx-auto text-neutral-100 "
    >
     
      <div className="flex flex-col items-center justify-center mb-5 lg:mb-10 mx-auto">
        <p className="text-md lg:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">
          Top Clients
        </p>
        <p className="text-3xl lg:text-4xl p-2">Companies That Trust Us</p>
        <p className="text-base w-full  text-center p-[2px]">
          Here at E-wamp, we've worked with the best in the
        </p>
      </div>
      <div className="flex gap-5 justify-center">
        {
            CompaniesData.map((company) => {
                return (
                  <div
                    key={company.id}
                    className="max-w-40 flex items-center py-6 lg:py-10 shadow-2xl  shadow-stone-900 dark:shadow-stone-500 special-bg border-2 border-neutral-700  text-white hover:bg-slate-700 hover:-translate-y-3 duration-300 rounded-2xl"
                  >
                    <p className="text-lg text-center p-3 lg:text-2xl">{company.name}</p>
                  </div>
                );
            })
        }
      </div>
    </section>
  );
};

export default Companies;
