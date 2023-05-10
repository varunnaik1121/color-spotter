import React from 'react';
import healthBar from '../assets/healthbar.png';
const HealthBar = ({ lives, setLives }) => {
  return (
    <div className="mt-[5%] py-[10%] flex justify-center items-center text-">
      <h3 className="text-xl text-[#fff]">Lives Left : </h3>
      {new Array(lives).fill('').map((live) => (
        <img src={healthBar} alt="helathbar" className="w-[38px]"></img>
      ))}
    </div>
  );
};

export default HealthBar;
