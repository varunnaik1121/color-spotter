import React, { useEffect, useState } from 'react';
import Board from '../components/Board';

const Play = () => {
  const [rows, setRows] = useState(2);
  const [grid, setGrid] = useState(new Array(rows * rows).fill(''));

  useEffect(() => {
    setGrid(new Array(rows * rows).fill(''));
  }, [rows]);
  console.log({ grid });
  return (
    <>
      <div className="flex justify-center items-center border w-full h-[90vh]">
        {rows && <Board grid={grid} rows={rows} />}
      </div>
      <button onClick={() => setRows(rows + 1)}>CLick next</button>
    </>
  );
};

export default Play;
