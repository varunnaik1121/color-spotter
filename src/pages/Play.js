import React, { useEffect, useState } from 'react';
import Board from '../components/Board';
import HealthBar from '../components/HealthBar';
import { useGlobalContext } from '../context/context';
import GameOver from '../components/GameOver';
const Play = () => {
  const { lives, setLives } = useGlobalContext();
  const [rows, setRows] = useState(2);
  const [grid, setGrid] = useState(new Array(rows * rows).fill(''));
  const [clickedTimes, setClickedTimes] = useState(0);

  useEffect(() => {
    setGrid(new Array(rows * rows).fill(''));
  }, [rows]);
  console.log({ grid });

  if (lives === 0) {
    return (
      <div className="w-full flex h-full justify-center items-center">
        <GameOver />
      </div>
    );
  }
  return (
    <>
      <div className="flex border-2  items-center flex-col w-full overflow-x-hidden h-[90vh]">
        <HealthBar lives={lives} />
        {rows && (
          <Board
            grid={grid}
            rows={rows}
            setRows={setRows}
            clickedTimes={clickedTimes}
            setClickedTimes={setClickedTimes}
            setGrid={setGrid}
          />
        )}
      </div>
    </>
  );
};

export default Play;
