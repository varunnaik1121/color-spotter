import React from 'react';
import healthBar from '../assets/healthbar.png';
const HealthBar = ({ lives, setLives }) => {
  return (
    <div className=" md:mt-[1%] py-[10%] md:py-[10px] flex justify-start items-center ">
      <h3 className="text-xl text-[#fff]">Lives Left : </h3>
      {new Array(lives).fill('').map((live, index) => (
        <img
          src={healthBar}
          alt="helathbar"
          className="w-[38px]"
          key={index}
        ></img>
      ))}
    </div>
  );
};

export default HealthBar;
