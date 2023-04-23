import React, { useEffect, useState } from 'react';

const Board = ({ grid, rows }) => {
  const [randomIndex, setRandomIndex] = useState(null);

  const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * grid.length);
    setRandomIndex(randomNumber);
  };

  useEffect(() => {
    getRandomNumber();
  }, [rows]);

  return (
    <>
      <div
        className={`w-[300px] h-[400px]  md:mt-[5%]   md:w-[500px] md:h-[500px]  border-2 grid border-red-600 `}
        style={{ gridTemplateColumns: `repeat(${rows},1fr)` }}
      >
        {grid.map((item, index) => {
          return (
            <div className="w-full  bg-red-500 border flex justify-center items-center"></div>
          );
        })}
        <div className="text-[#fff]">{randomIndex && randomIndex}</div>
        <button onClick={() => getRandomNumber(grid.length)}>
          genrate random
        </button>
      </div>
    </>
  );
};

export default Board;
