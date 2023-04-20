import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { BsThreeDots } from 'react-icons/bs';
import Menu from '../components/Menu';
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          <BsThreeDots className="text-text text-2xl mx-2 cursor-pointer " />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
