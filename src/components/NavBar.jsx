import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center">
        <img src={logo} alt="Bank of Linea" className="w-[94px] h-[68px]" />
        <span className="text-white ml-4 font-poppins font-extrabold text-4xl">Bank of Linea</span>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((el) => {
          const isActive = el.id === activeLink;
          return (
            <li
              key={el.id}
              className={`font-poppins font-normal cursor-pointer font-bold text-xl underline-offset-8  ${
                isActive ? 'underline text-white' : 'text-white'
              } ${el.id === navLinks[navLinks.length - 1].id ? 'mr-0' : 'mr-10'}`}
              onClick={() => setActiveLink(el.id)}
            >
              <a href={`#${el.id}`}>{el.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((el) => {
              const isActive = el.id === activeLink;
              return (
                <li
                  key={el.id}
                  className={`font-poppins font-normal cursor-pointer text-lg ${
                    isActive ? 'text-secondary' : 'text-white'
                  } ${el.id === navLinks[navLinks.length - 1].id ? 'mr-0' : 'mb-4'}`}
                  onClick={() => {
                    setActiveLink(el.id);
                    setToggle(false);
                  }}
                >
                  <a href={`#${el.id}`}>{el.title}</a>
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
