import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg text-sm md:text-md text-neutral-100 flex justify-center">
      <div className="max-w-[1340px] p-5 lg:p-1 flex flex-col lg:flex-row justify-between items-center py-7 lg:py-14 ">
        <div className="lg:w-2/5">
          <div className="flex flex-col gap-6 lg:gap-10">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-mono">Jifar</p>
              <p className="text-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                veritatis ipsum. Fuga quo, quas dolore ducimus natus maxime est
                tempore pariatur magni similique omnis ipsam. Similique tenetur
                harum quis vitae.
              </p>
            </div>
            <div className="flex ml-24 gap-7">
              <img src="img" alt="TG" />
              <img src="img" alt="FB" />
              <img src="img" alt="TW" />
              <img src="img" alt="In" />
              <img src="img" alt="TG" />
            </div>
          </div>
        </div>

        <div className="w-full mb-10 lg:mb-2 lg:w-1/3 mt-10 lg:mt-1 flex justify-between">
          {/* <div className=""> */}
          <ul className='gap-2'> 
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Ethiopia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Africa</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Sudan</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Somalia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">China</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Eriteria</a></li>
          </ul>
          <ul className=''>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Ethiopia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Africa</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Sudan</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Somalia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Somalia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Somalia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">China</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Eriteria</a></li>
          </ul>
          <ul className='gap-2'>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Ethiopia</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Africa</a></li>
            <li className='pt-1 hover:translate-x-1 duration-150 hover:text-neutral-400 '><a href="#">Sudan</a></li>
          </ul>
          {/* </div> */}
        </div>
      </div>
      <p className="absolute  bottom-3  ">
        ©Copyright Jifar-constr | 2024
      </p>
    </footer>
  );
}

export default Footer