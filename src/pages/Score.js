import React from 'react';

const Score = () => {
  const highscore = localStorage.getItem('highscore' || 0);
  return (
    <div className=" flex flex-col text-[rgb(127,166,80)] justify-center items-center mt-12 text-2xl">
      <h2 className="text-2xl">High Score </h2>
      <h2>{highscore}</h2>
    </div>
  );
};

export default Score;
