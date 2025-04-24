import React, { useState, useRef } from "react";
import "./index.css";

const MIN_MOVES = 2;
const COLOR_MAPPING = {
  0: "green",
  1: "blue",
  2: "black",
  3: "orange",
  4: "pink",
};
export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [winningMoves, setWinningMoves] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState();
  const [showMessage, setShowMessage] = useState(false);
  // const ref = useRef({});
  const prepareWinningMoves = async () => {
    setShowMessage("");
    let count = 0,
      id;
    while (count < currentLevel + MIN_MOVES) {
      id = Math.floor((Math.random() * 10) % 5);
      await new Promise((res, rej) => {
        setTimeout(() => {
          console.log(id);
          setHighlightedIndex(id);
          // ref.current[id].focus();
          res();
        }, 1000);
      });
      winningMoves.push(id);
      count++;
    }
    setTimeout(() => setHighlightedIndex(), 1200);
  };

  const handleUserAction = (index) => {
    let expectedMove = winningMoves.shift();
    if (Number(expectedMove) !== index) {
      setShowMessage("Better luck next time");
      setWinningMoves([]);
      setCurrentLevel(1);
    } else if (!winningMoves.length) {
      setShowMessage("Bravo ! Click Start Game to play next level");
      setCurrentLevel((currentLevel) => currentLevel + 1);
      setWinningMoves([]);
    }
  };

  return (
    <>
      <div className="game-container">
        {Array.from({ length: 5 }).map((_, index) => {
          console.log(index, highlightedIndex, "klm");
          return (
            <div
              // ref={(ele) => {
              //   console.log(ele, index);
              //   ref.current[index] = ele;
              // }}
              key={index}
              style={{ "--light-ball-color": COLOR_MAPPING[index] }}
              className={`light-ball ${
                index === Number(highlightedIndex) ? "highlight" : ""
              }`}
              onClick={() => handleUserAction(index)}
            ></div>
          );
        })}
      </div>
      <button onClick={prepareWinningMoves}>Start Game</button>
      Level {currentLevel}
      {<p>{showMessage}</p>}
    </>
  );
}
