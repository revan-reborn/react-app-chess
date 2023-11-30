import React from "react";
import { useDrop } from "react-dnd";
import { move } from "./Game";

const Square = ({ children, colorValue, positionControl }) => {
   console.log(positionControl);
   const [, drop] = useDrop({
      accept: "chess",
      drop: (item) => {
         const [fromPosition] = item.id.split("_");
         move(fromPosition, positionControl);
      },
   });
   return (
      <div
         ref={drop}
         className={`${
            colorValue ? "bg-sky-800" : "bg-sky-200"
         }  w-[100px] h-[100px] flex items-center justify-center cursor-grab`}
      >
         {children}
      </div>
   );
};

export default Square;
