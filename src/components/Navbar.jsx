import React from 'react'

const Navbar = () => {
  return (
    <nav className="text-4xl bg-slate-800">
      <div className="flex justify-between p-4 font-light">
        {/* <img src={} alt="" /> */}
        <p className="text-3xl text-blue-500">Jifar LOGO</p>
        <ul className="flex gap-10">
          <li>
            <a href="#login" className="text-sm text-white hover:bg-rounded ">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm text-white">
              CRM
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm text-white">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm text-white">
              Contact
            </a>
          </li>
          <div className='gradient-wave-button rounded-full px-2'>
          <button className='bg-gray-900 text-white text-2xl p-1 rounded-full'>
            Contact us from
          </button>
          
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar