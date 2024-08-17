import React, { useContext, useState } from 'react';
import Logo from '../Logo/Logo';
import { GlobalStateContext } from '../../Global/GlobalContext';

const Navber = () => {
  const { user, logout, handleSearch} = useContext(GlobalStateContext)
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="relative shadow">
        <div className="py-3 sm:flex justify-between mx-auto max-w-[1440px] w-[95%]">
          <div className="flex items-center justify-between">
            <a href="#">
              <Logo></Logo>
            </a>
  
            {/* Mobile menu button */}
            <div className="flex sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 md:hidden hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 bg-[#ecf0f1] z-20 px-6 py-4 transition-all duration-300 ease-in-out sm:mt-0 sm:p-0 sm:top-0 sm:relative sm:opacity-100 sm:translate-x-0 sm:flex sm:items-center sm:justify-between ${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex flex-col px-2 -mx-4 sm:flex-row md:mx-10 md:py-0">
              {/* <a
                href="#"
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
              >
                Home
              </a>
              <a
                href="#"
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
              >
                Contact
              </a> */}
            </div>
  
            <div className="relative mt-4 sm:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
  
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-black bg-[#ecf0f1] border border-pmColor rounded-lg focus:border-pmColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-pmColor"
                placeholder="Search"
              />
            </div>
              <button onClick={()=>logout()} className='py-2 px-5 sm:ml-5 sm:mt-0 mt-5 sm:mx-0 mx-auto block bg-secColor text-white rounded-lg hover:bg-pmColor duration-300'>Logout</button>
          </div>
        </div>
      </nav>
    );
};

export default Navber;
