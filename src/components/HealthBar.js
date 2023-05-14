import React from 'react';
import healthBar from '../assets/healthbar.png';
const HealthBar = ({ lives, setLives }) => {
  return (
    <div className="mt-[5%] md:mt-[2%] py-[10%] md:py-[15px] flex justify-center items-center border">
      <h3 className="text-xl text-[#fff]">Lives Left : </h3>
      {new Array(lives).fill('').map((live) => (
        <img src={healthBar} alt="helathbar" className="w-[38px]"></img>
      ))}
    </div>
  );
};

export default HealthBar;
