import React from 'react'
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  return (
    <nav className="text-4xl bg-slate-800">
      <div className="flex justify-between items-center p-4 font-light">
        {/* <img src={} alt="" /> */}
        <p className="text-3xl text-blue-500">Jifar LOGO</p>
        <ul className="flex gap-10 justify-center items-center">
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
          <AnimatedButton name={"BOOK NOW"}/>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar