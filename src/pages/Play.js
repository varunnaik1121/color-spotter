import React, { useEffect, useState } from 'react';
import Board from '../components/Board';

const Play = () => {
  const [rows, setRows] = useState(2);
  const [grid, setGrid] = useState(new Array(rows * rows).fill(''));
  const [clickedTimes, setClickedTimes] = useState(0);

  useEffect(() => {
    setGrid(new Array(rows * rows).fill(''));
  }, [rows]);
  console.log({ grid });
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full overflow-x-hidden h-[90vh]">
        {rows && (
          <Board
            grid={grid}
            rows={rows}
            setRows={setRows}
            clickedTimes={clickedTimes}
            setClickedTimes={setClickedTimes}
          />
        )}
      </div>
    </>
  );
};

export default Play;
