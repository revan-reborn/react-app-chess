import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

const SquareBord = ({ brd, positionControl }) => {
   const [{ isDragging }, drag, dragPreview] = useDrag({
      type: "chess",
      item: { id: `${positionControl}_${brd.type}_${brd.color}` },
      collect: (monitor) => {
         return { isDragging: !!monitor.isDragging };
      },
   });
   const pieceImage = require(`../public/assets/${brd.type}_${brd.color}.png`);
   return (
      <div ref={drag}>
         <DragPreviewImage src={pieceImage} connect={dragPreview} />
         <img className="w-[60px]" src={pieceImage} alt="" />
      </div>
   );
};

export default SquareBord;
