import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);

  return (
    <nav className="w-full flex py-4 sm:py-6 justify-between items-center navbar px-4 sm:px-6">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Bank of Linea"
          className="w-20 sm:w-24 h-auto object-contain"
        />
        <span
          className="text-white ml-2 sm:ml-4 font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl"
        >
          Bank of Linea
        </span>
      </div>

      <ul className="list-none hidden sm:flex justify-end items-center flex-1 gap-4 md:gap-8">
        {navLinks.map((el) => {
          const isActive = el.id === activeLink || el.id === window.location.pathname;
          return (
            <li
              key={el.id}
              className={`font-poppins font-normal cursor-pointer text-base sm:text-lg md:text-xl underline-offset-8 ${
                isActive ? 'underline text-white' : 'text-white'
              }`}
              onClick={() => setActiveLink(el.id)}
            >
              {el.type === 'route' ? (
  <Link to={el.id}>{el.title}</Link>
) : (
  <a href={`#${el.id}`}>{el.title}</a>
)}
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-4 sm:p-6 bg-black-gradient absolute top-16 sm:top-20 right-4 min-w-[160px] sm:min-w-[200px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((el) => {
              const isActive = el.id === activeLink || el.id === window.location.pathname;
              return (
                <li
                  key={el.id}
                  className={`font-poppins font-normal cursor-pointer text-base sm:text-lg ${
                    isActive ? 'text-secondary' : 'text-white'
                  } ${el.id === navLinks[navLinks.length - 1].id ? 'mb-0' : 'mb-3 sm:mb-4'}`}
                  onClick={() => {
                    setActiveLink(el.id);
                    setToggle(false);
                  }}
                >
                  {el.type === 'route' ? (
  <Link to={el.id}>{el.title}</Link>
) : (
  <a href={`#${el.id}`}>{el.title}</a>
)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
