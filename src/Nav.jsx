import React from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className='bg-white sticky top-0 z-50'>
      <div className='flex flex-wrap items-center justify-between p-4'>
        <div className='w-full md:flex md:-auto'>
          <ul className='font-medium flex flex-col sm:flex-row sm:justify-center sm:space-x-8'>
            <li>
              <a
                href='/'
                className={`block py-2 px-3 hover:text-black hover:underline active:text-black active:underline font-bold sm:justify-center ${
                  location.pathname === "/"
                    ? "text-black underline"
                    : " text-gray-5"
                }`}>
                PROFILE
              </a>
            </li>
            <li>
              <a
                href='/discography'
                className={`block py-2 px-3 hover:text-black hover:underline active:text-black active:underline font-bold sm:justify-center ${
                  location.pathname === "/discography"
                    ? "text-black underline"
                    : " text-gray-5"
                }`}>
                DISCOGRAPHY
              </a>
            </li>
            <li>
              <a
                href='/tour'
                className={`block py-2 px-3 hover:text-black hover:underline active:text-black active:underline font-bold sm:justify-center ${
                  location.pathname === "/tour"
                    ? "text-black underline"
                    : " text-gray-5"
                }`}>
                TOUR
              </a>
            </li>
            <li>
              <a
                href='/shop'
                className={`block py-2 px-3 hover:text-black hover:underline active:text-black active:underline font-bold sm:justify-center ${
                  location.pathname === "/shop"
                    ? "text-black underline"
                    : " text-gray-5"
                }`}>
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
