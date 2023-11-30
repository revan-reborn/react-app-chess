import React from "react";
import SquareBord from "./SquareBord";
import Square from "./Square";

const Board = ({ board }) => {
   const colorCntrl = (i) => {
      const x = i % 8;
      const y = Math.abs(Math.floor(i / 8) - 7);
      return (x + y) % 2 === 0;
   };
   const positionControl = (i) => {
      const x = i % 8;
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
      const y = Math.abs(Math.floor(i / 8) - 7);
      return `${letters}${y + 1}`;
   };
   console.log(board.flat());
   return (
      <div className="w-[800px] h-[800px] bg-green-700 flex flex-wrap">
         {board.flat().map((brd, i) => (
            <Square
               colorValue={colorCntrl(i)}
               positionControl={positionControl(i)}
            >
               {brd && (
                  <SquareBord brd={brd} positionControl={positionControl(i)} />
               )}
            </Square>
         ))}
      </div>
   );
};

export default Board;
