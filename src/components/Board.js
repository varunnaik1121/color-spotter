import React, { useEffect, useState, useRef } from 'react';

//lets use rgba(0,0,0,level);
//if index===selectedindex then it will be opacity of 0.9 for hard .7 for medium .6 for easy
const Board = ({ grid, rows, setRows, clickedTimes, setClickedTimes }) => {
  let timeoutref = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isShaking, setIsShaking] = useState(false);
  const [currentColor, setCurrentColor] = useState('');
  const 
  const level = localStorage.getItem('level');

  const containerRef = useRef(null);
  console.log({ currentColor });

  //lets create a random color

  useEffect(() => {
    generateRandomColor();
    getRandomNumber();
    setIsShaking(false);
  }, [grid]);

  useEffect(() => {
    if (isShaking) {
      containerRef.current.classList.add('shake');
      timeoutref.current = setTimeout(() => {
        setIsShaking(false);
        setRows((prev) => prev + 1);
        containerRef.current.classList.remove('shake');
      }, 500);
    }

    return () => clearTimeout(timeoutref.current);
  }, [isShaking]);

  const generateRandomColor = () => {
    let hex = [];
    for (let i = 0; i < 3; i++) {
      hex.push(randomNumberInRange(0, 255));
    }
    let difficlutyValue = changeDifficultyBasedOnLevel(level);
    setCurrentColor(`rgba(${hex[0]},${hex[1]},${hex[2]},${difficlutyValue})`);
  };

  const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * grid.length);
    setSelectedIndex(randomNumber);
  };

  const changeDifficultyBasedOnLevel = (level) => {
    if (level === 'easy') return 0.8;
    else if (level === 'medium') return 0.2;
    else return 0.48;
  };

  const setOpacity = (level) => {
    if (level === 'easy') return 0.7;
    else if (level === 'medium') return 0.78;
    else return 0.9;
  };
  console.log(changeDifficultyBasedOnLevel(level));
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const updateLevelAndScore = (e, index) => {
    if (index === selectedIndex) {
      console.log('right');
      setIsShaking(false);
      //update score to db
      //increase the click count
      //proceed to the next level
    } else {
      setIsShaking(true);

      //add shake class
      //proceed to next level
      //dont update the score
    }
  };

  return (
    <>
      <div
        className={`w-[300px] h-[300px]  md:mt-[5%]   md:w-[500px] md:h-[500px]   grid `}
        style={{ gridTemplateColumns: `repeat(${rows},1fr)` }}
        ref={containerRef}
      >
        {grid.map((item, index) => {
          return (
            <button
              className="w-full     flex justify-center items-center outline-none  border "
              onClick={(e) => updateLevelAndScore(e, index)}
              key={index}
              style={{
                backgroundColor: currentColor,
                opacity: index === selectedIndex ? setOpacity(level) : '1',
              }}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default Board;
