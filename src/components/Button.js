import React from 'react';

const Button = ({ title, onClick, minWidth }) => {
  return (
    <button
      onClick={onClick}
      style={{ minWidth: minWidth }}
      className="bg-[rgb(127,166,80)] rounded-md text-xl tracking-wider shadow-inner shadow-[rgba(0,0,0,.2)]  text-[#ffffff] py-2 mt-4"
    >
      {title}
    </button>
  );
};

export default Button;
