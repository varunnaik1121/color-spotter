import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Menu from '../components/Menu';
import { useGlobalContext } from '../context/context';
const Navbar = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <div className="bg-game px-8 py-4 flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" className="w-8 h-8 object-cover" />
      </div>
      <div>
        <h1 className="font-bold text-text md:text-2xl text-xl">
          Color Spotter
        </h1>
      </div>
      <div className="flex items-center relative">
        <div className="px-2 py-2">
          {isOpen ? (
            <AiOutlineClose
              className="text-text text-2xl mx-2 cursor-pointer "
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <BsThreeDots
              className="text-text text-2xl mx-2 cursor-pointer "
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {isOpen && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
