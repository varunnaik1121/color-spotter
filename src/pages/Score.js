import React from 'react';
import highScore from '../assets/high-score.png';
const Score = () => {
  const highscore = localStorage.getItem('highscore' || 0);
  return (
    <div className=" flex flex-col text-[rgb(127,166,80)] justify-center items-center mt-12 text-2xl">
      <div className="m-8">
        <img
          src={highScore}
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
        />
      </div>
      <h2 className="text-2xl">High Score </h2>
      <h2 className="text-[#fff]">{highscore}</h2>
    </div>
  );
};

export default Score;
