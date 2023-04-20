import React from 'react';

const Button = ({ title, onClick, minWidth }) => {
  return (
    <button
      onClick={onClick}
      style={{ minWidth: minWidth }}
      className="bg-game-secondary rounded-md text-xl tracking-wider shadow-md  text-text py-2 mt-4"
    >
      {title}
    </button>
  );
};

export default Button;
