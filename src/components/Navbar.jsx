import React from 'react'
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  return (
   
    <nav className=" bg-slate-800 min-h-20 flex items-center">
        <div className="container max-w-[1400px] mx-auto px-4 flex  justify-between">
          {/* <img src={} alt="" /> */}
          <p className="text-3xl text-blue-500">Jifar LOGO</p>
          <ul className="hidden lg:flex gap-10  items-center">
            <li className="flex justify-center">
              <a href="#login" className="text-sm text-white hover:bg-rounded ">
                Services
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#about" className="text-sm text-white">
                CRM
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#about" className="text-sm text-white">
                Case Studies
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#about" className="text-sm text-white">
                Contact
              </a>
            </li>
            <div className='hidden lg:flex'>
            <AnimatedButton name={"BOOK NOW"} />
            </div>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar