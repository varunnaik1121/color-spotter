import React, { useEffect, useState } from 'react';
import Board from '../components/Board';
import HealthBar from '../components/HealthBar';
import { useGlobalContext } from '../context/context';
import GameOver from '../components/GameOver';

const Play = () => {
  const { lives, setLives, score } = useGlobalContext();
  const [rows, setRows] = useState(2);
  const [grid, setGrid] = useState(new Array(rows * rows).fill(''));
  const [clickedTimes, setClickedTimes] = useState(0);

  useEffect(() => {
    setGrid(new Array(rows * rows).fill(''));
  }, [rows]);

  useEffect(() => {
    if (lives === 0) {
      let previousScore = localStorage.getItem('highscore') || 0;
      if (score > previousScore) {
        localStorage.setItem('highscore', score);
      } else {
        localStorage.setItem('highscore', previousScore);
      }
    }
  }, [lives]);

  if (lives === 0) {
    return (
      <div className="w-full flex h-full justify-center translate-y-[-40%] items-center">
        <GameOver setLives={setLives} setRows={setRows} setGrid={setGrid} />
      </div>
    );
  }
  return (
    <>
      <div className="flex  items-center justify-start flex-col w-full overflow-x-hidden h-max  flex-1 py-[40px]">
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
