import React from 'react';
import Navbar from '../navbar/Navbar';
import colorGif from '../assets/color.gif';
import Button from '../components/Button';
const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <div className="mt-8">
        <img src={colorGif} className="rounded-md"></img>
      </div>
      <div className="mt-2">
        <Button title={'START'} minWidth={250} />
      </div>
    </div>
  );
};

export default Home;
