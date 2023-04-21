import React from 'react';
import Navbar from '../navbar/Navbar';
import colorGif from '../assets/color.gif';
import Button from '../components/Button';
import { useState } from 'react';
import { useGlobalContext } from '../context/context';
const Home = () => {
  const { name } = useGlobalContext();
  const [isMainMenu, setIsMainMenu] = useState(true);
  const handleStart = () => {
    setIsMainMenu(false);
  };
  return (
    <>
      {isMainMenu ? (
        <>
          <div className="flex justify-center items-center flex-col h-full">
            <div className="mt-8">
              <img src={colorGif} className="rounded-md"></img>
            </div>
            <div className="mt-2">
              <Button title={'START'} minWidth={250} onClick={handleStart} />
            </div>
          </div>
        </>
      ) : (
        <div>
          
          <div />;
        </div>
      )}
    </>
  );
};

export default Home;
