import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context';
import { data } from '../data/data';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SelectLevel = () => {
  const { selectedLevel, setSelectedLevel } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelected = (level) => {
    setSelected(level);
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log({ selected });
  }, [selected]);

  return (
    <div className="mt-4 w-full flex justify-center max-w-[400px] items-center">
      <div className="relative w-full">
        <div className="flex bg-buttons-primary items-center justify-between px-4 py-4 text-center rounded-md hover:bg-buttons ">
          <button onClick={handleOpen} id="level" className="w-full text-xl">
            {selected ? selected : 'choose level'}
          </button>
          <label htmlFor="level">
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </label>
        </div>
        {isOpen && (
          <div className="flex flex-col">
            {['easy', 'medium', 'hard'].map((level, index) => {
              return (
                <button
                  className="py-3 hover:bg-buttons "
                  onClick={() => handleSelected(level)}
                  key={index}
                >
                  {level}
                </button>
              );
            })}
          </div>
        )}
        <div className="w-full flex">
          <button className="bg-game-secondary text-text text-xl w-full py-4 rounded-md mt-4">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectLevel;
