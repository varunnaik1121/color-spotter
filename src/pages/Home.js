import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import colorGif from '../assets/color.gif';
import Button from '../components/Button';
import { useState } from 'react';
import { useGlobalContext } from '../context/context';
import SelectLevel from '../components/SelectLevel';
const Home = () => {
  const [isMainMenu, setIsMainMenu] = useState(true);

  const handleStart = () => {
    setIsMainMenu(false);
  };

  return (
    <div className="  flex-1 relative">
      {isMainMenu ? (
        <>
          <div className="flex justify-center items-center flex-col h-full absolute md:relative translate-y-[-5%] ">
            <div className="mt-8">
              <img src={colorGif} className="rounded-md"></img>
            </div>
            <div className="mt-2">
              <Button title={'START'} minWidth={250} onClick={handleStart} />
            </div>
          </div>
        </>
      ) : (
        <div className="text-[#ffffff] flex justify-center items-center  w-full h-full ">
          <div className="flex flex-col mt-8 w-full justify-center items-center">
            <h2 className="mt-[6%]">Select Level</h2>
            <SelectLevel />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
