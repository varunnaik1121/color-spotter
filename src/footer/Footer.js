import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="w-full justify-center items-center text-center font-poppins text-[#fff] py-[20px] text-sm">
      <div>
        Coded with <AiFillHeart className="inline" color="rgb(127,166,80)" /> by{' '}
        <a href="https://github.com/varunnaik1121 " className="underline">
          @varunnaik
        </a>
      </div>
    </div>
  );
};

export default Footer;
