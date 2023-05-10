import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const GameOver = () => {
  const navigate = useNavigate();
  const handleMainMenu = () => {
    navigate('/');
  };
  return (
    <div className="min-w-[350px] max-w-[500px] text-lg  text-[#fff] shadow-lg  mt-[10%]">
      <div className="w-full flex justify-center items-center py-2 bg-[rgb(127,166,80)] ">
        <h2 className="text-center text-xl">Game Over</h2>
      </div>
      <div className="w-full px-6 py-8 bg-[rgb(39,37,34)]">
        <h2 className="mt-4 text-center">Your Score : 125</h2>
        <div className="flex justify-between mt-4">
          <Button title={'Restart'} minWidth={120} />
          <Button title={'Main Menu'} minWidth={130} onClick={handleMainMenu} />
        </div>
      </div>
    </div>
  );
};

export default GameOver;
