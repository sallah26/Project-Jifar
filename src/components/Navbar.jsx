// Navbar.js
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import AnimatedButton from './AnimatedButton';
import DarkModeToggle from './DarkMode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    AOS.init({
        once: false // Whether animation should happen only once
    });
}, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    // Check the scroll position and update isSticky state
    const scrollPosition = window.scrollY;
    const stickyThreshold = 600; // Adjust as needed based on your design
    setIsSticky(scrollPosition > stickyThreshold);
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` ${isSticky ? 'special-bg2 top-0' : 'bg-transparent text-md text-neutral-900 dark:text-slate-200 pt-5'} transition-all duration-300 ${isSticky ? 'z-40 fixed left-0  right-0 shadow-lg' : ''}`}>
      <div className="container max-w-[1400px] mx-auto flex items-center justify-between p-5">
        <div data-aos="fade-down" data-aos-delay="200" className="cursor-pointer z-30 " onClick={scrollToTop}>
          Your Logo
        </div>
        {/* Large devices */}
        <div className="hidden z-30 lg:flex items-center space-x-7 text-md">
          <ScrollLink
            to="services"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
            data-aos="fade-down" 
            data-aos-delay="200"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 duration-100"
            data-aos="fade-down" 
            data-aos-delay="300"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300"
            data-aos="fade-down" 
            data-aos-delay="400"
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300"
            data-aos="fade-down" 
            data-aos-delay="500"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=""
            data-aos="fade-down" 
            data-aos-delay="600"
          >
          <div className="hidden lg:flex z-30">
            <AnimatedButton name={"BOOK NOW"} />
          </div>
          </ScrollLink>
          
        </div>
        <div className='lg:hidden z-40 flex gap-6'>
        <div className=''>
            <DarkModeToggle />
          </div>
        <div className="z-30 lg:hidden cursor-pointer" onClick={toggleNavbar}>
          <HiOutlineMenuAlt2 size={30} />
          </div>
        </div>

        {/* Small devices */}
        {/* Sidebar for small devices */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-1/2 bg-gray-800 p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => { toggleNavbar(); }}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => { toggleNavbar(); }}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => { toggleNavbar(); }}
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => { toggleNavbar(); }}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






































// import React, { useEffect, useState } from 'react'
// import { Link } from "react-scroll";
// import AnimatedButton from './AnimatedButton';
// import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { MdOutlineMiscellaneousServices } from "react-icons/md";
// import DarkModeToggle from './DarkMode';
// import { IoIosArrowDropleft } from "react-icons/io";

// const Navbar = () => {
//   const [sidebar, setSidebar] = useState(false);
//   const [isMobile, setIsMobile] = useState(
//     window.matchMedia("(max-width: 1024px)").matches
//   );
//   const showSidebar = () => {
//     setSidebar(!sidebar);
//   };
  // useEffect(() => {
  //   let handler = ()=>{
  //     setSidebar(false);
  //   };

  //   document.addEventListener("mousedown", handler)
  // })

//   // Mobile size detecter

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
// const handleScroll = () => {
//   const scrollPosition = window.scrollY;
//   // console.log("Vertical Scroll Position:", scrollPosition);

//   // Your logic based on the scroll position goes here
// };

// const [isScrolled, setIsScrolled] = useState(false);

// // COMMENTED NAVBAR SCROLL DETECTOR
// //  useEffect(() => {
// //    const handleScroll = () => {
// //      const scrollPosition = window.scrollY;
// //      setIsScrolled(scrollPosition > 900); // Set isScrolled to true after scrolling 500px
// //    };

// //    window.addEventListener("scroll", handleScroll);

// //    return () => {
// //      window.removeEventListener("scroll", handleScroll);
// //    };
// //  }, []);




//   return (
//     <>
//       <header
//         className={`${
//           isScrolled
//             ? "fixed transform transition-transform duration-700 ease-in-out translate-y-0 opacity-100 "
//             : "translate-y-0 opacity-100 "
//         } z-50 top-0 w-full h-16 lg:h-20 flex items-center ${
//           isScrolled ? `special-bg2` : "bg-transparent opacity-0 "
//         }`}
//       >
//         <div className="container max-w-[1400px] mx-auto pt-5 px-4 flex justify-between ">
//           {/* <img src={} alt="" /> */}
//           <Link
//             href=""
//             to="hero"
//             spy={true}
//             smooth={true}
//             offset={5}
//             duration={500}
//             className="text-3xl text-blue-500"
//           >
//             Jifar LOGO
//           </Link>
//           <nav>
//           <ul
//             className={`hidden lg:flex gap-10  items-center  dark:text-neutral-100 ${
//               isScrolled ? "text-neutral-100" : "text-neutral-800"
//             }`}
//           >
//             <li className="flex justify-center">
//               <Link
//                 href=""
//                 className="text-sm hover:bg-rounded "
//                 to="performance"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 performance
//               </Link>
//             </li>
//             <li className="flex justify-center">
//               <Link
//                 href=""
//                 className="text-sm hover:bg-rounded "
//                 to="services"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 services
//               </Link>
//             </li>

//             <li className="flex justify-center">
//               <Link
//                 href=""
//                 className="text-sm hover:bg-rounded "
//                 to="testimonials"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 testimonials
//               </Link>
//             </li>
//             <li className="flex justify-center">
//               <Link
//                 href=""
//                 className="text-sm hover:bg-rounded "
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={50}
//                 duration={500}
//               >
//                 about
//               </Link>
//             </li>
//             <div className="hidden lg:flex">
//                 <AnimatedButton name={"BOOK NOW"} />
//             </div>
//           </ul>
//           </nav>
//           {isMobile && (
//             <div className="flex gap-3 items-center justify-center">
//               <div className="lg:hidden h-9 p-1 text-slate-800 dark:text-slate-100 flex items-center justify-center">
//                 <DarkModeToggle />
//               </div>
//               <div className="lg:hidden flex items-center justify-center">
//                 <button onClick={showSidebar}>
//                   <HiOutlineMenuAlt2
//                     size={27}
//                     className="text-slate-800 dark:text-slate-100 "
//                   />
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//       {/*Mobile sidebar  */}
//       <div
//         className={`sidebar ${
//           sidebar && "visible"
//         } dark:text-white dark:bg-neutral-900 z-50`}
//       >
//         <div className="flex justify-start mt-3">
//           <img src="logo" alt="Jifar's logo" />
//           <button
//             onClick={() => setSidebar(!sidebar)}
//             className="absolute top-6 right-2 opacity-70"
//           >
//             <IoIosArrowDropleft size={39} />
//           </button>
//         </div>
//         <ul className="flex flex-col text-lg gap-5 items-start mt-7">
//           <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500 ">
//             <Link
//                 href=""
//                 className="text-sm w-full hover:bg-rounded flex gap-3"
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 <MdOutlineMiscellaneousServices size={30}/>
//                 Services
//               </Link>
//           </li>
//           <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
//           <Link
//                 href=""
//                 className="text-sm w-full hover:bg-rounded flex gap-3"
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 <MdOutlineMiscellaneousServices size={30}/>
//                 Services
//               </Link>
//           </li>

//           <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
//           <Link
//                 href=""
//                 className="text-sm w-full hover:bg-rounded flex gap-3"
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 <MdOutlineMiscellaneousServices size={30}/>
//                 Services
//               </Link>
//           </li>
//           <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
//           <Link
//                 href=""
//                 className="text-sm w-full hover:bg-rounded flex gap-3"
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 <MdOutlineMiscellaneousServices size={30}/>
//                 Services
//               </Link>
//           </li>
//           <li className="w-full p-0.5 border-b-2 hover:border-slate-200 border-slate-500">
//           <Link
//                 href=""
//                 className="text-sm w-full hover:bg-rounded flex gap-3"
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 <MdOutlineMiscellaneousServices size={30}/>
//                 Services
//               </Link>
//           </li>
//           <li className="w-full p-0.5  ">
//           <Link
//                 href=""
//                 className="text-sm w-1/2 border-b-2 hover:border-slate-200 hover:bg-rounded flex gap-3"
//                 to="footer"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}
//               >
//                 <MdOutlineMiscellaneousServices size={30}/>
//                 Services
//               </Link>
//           </li>
        
//           <div className="mt-3 flex justify-center w-full" >
//             {/* <button> */}
//             <AnimatedButton name={"BOOK NOW"} />
//             {/* </button> */}
//           </div>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Navbar