import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import AnimatedButton from './AnimatedButton';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DarkModeToggle from './DarkMode';
import { IoIosArrowDropleft } from "react-icons/io";
import Form from './Form';



const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [form, setForm] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // Mobile size detecter

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  console.log("Vertical Scroll Position:", scrollPosition);

  // Your logic based on the scroll position goes here
};

window.addEventListener("scroll", handleScroll);

const handlClick = () => {
  setForm(true);
  alert("Hello world");
}


  return (
    <>
      <nav className="fixed z-50 top-0 w-full min-h-20 flex items-center bg-red-300">
        <div className="container max-w-[1400px] mx-auto px-4 flex bg-red-600 justify-between">
          {/* <img src={} alt="" /> */}
          <Link
                href=""
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
               className="text-3xl text-blue-500">Jifar LOGO</Link>
          <ul className="hidden lg:flex gap-10  items-center">
            <li className="flex justify-center">
              <Link
                href=""
                className="text-sm text-white hover:bg-rounded "
                to="performance"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                performance
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                href=""
                className="text-sm text-white hover:bg-rounded "
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                services
              </Link>
            </li>

            <li className="flex justify-center">
              <Link
                href=""
                className="text-sm text-white hover:bg-rounded "
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                testimonials
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                href=""
                className="text-sm text-white hover:bg-rounded "
                to="footer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                about
              </Link>
            </li>
            <div className="hidden lg:flex">
              <button onClick={handlClick}>
                <AnimatedButton name={"BOOK NOW"} />
              </button>
            </div>
          </ul>
          {isMobile && (
            <div className="flex gap-3 items-center justify-center">
              <div className="lg:hidden h-9 p-1 flex  items-center justify-center">
                <DarkModeToggle />
              </div>
              <div className="lg:hidden flex items-center justify-center">
                <button onClick={showSidebar}>
                  <HiOutlineMenuAlt2 size={27} color="white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/*Mobile sidebar  */}
      <div
        className={`sidebar ${
          sidebar && "visible"
        } dark:text-white dark:bg-neutral-900`}
      >
        <div className="flex justify-start mt-3">
          <img src="logo" alt="Jifar's logo" />
          <button
            onClick={() => setSidebar(!sidebar)}
            className="absolute top-6 right-2 opacity-70"
          >
            <IoIosArrowDropleft size={39} />
          </button>
        </div>
        <ul className="flex flex-col text-lg gap-5 items-start mt-7">
          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500 ">
            <a href="#login" className="  hover:bg-rounded flex">
              Services
            </a>
          </li>
          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
            <a href="#about" className=" flex">
              CRM
            </a>
          </li>

          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
            <a href="#about" className=" flex">
              Case Studies
            </a>
          </li>
          <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
            <a href="#about" className="flex ">
              Contact
            </a>
          </li>
          <div className="mt-3 flex justify-center w-full" onClick={handlClick}>
            {/* <button> */}
            <AnimatedButton name={"BOOK NOW"} />
            {/* </button> */}
          </div>
        </ul>
      </div>
      {/* Booking Form */}
      {form && <Form />}
    </>
  );
}

export default Navbar