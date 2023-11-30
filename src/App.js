import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Board from "./Board";
import Game, { initGame } from "./Game";
import subjectGame from "./Game";
import { useEffect, useState } from "react";
function App() {
   const [board, setBoard] = useState([]);
   const [isGameOver, setisGameOver] = useState();
   const [result, setresult] = useState();
   useEffect(() => {
      initGame();
      const subscribe = subjectGame.subscribe((sub) => {
         setBoard(sub.chess);
         setisGameOver(sub.isGameOver);
         setresult(sub.result);
      });

      return () => subscribe.unsubscribe();
   }, []);
   return (
      <DndProvider backend={HTML5Backend}>
         <div className="bg-black h-screen flex items-center justify-center relative">
            {isGameOver && (
               <div className="absolute bg-white bg-opacity-80 rounded-lg p-3 flex flex-col items-center justify-center ">
                  <h1 className="font-bold">OYUN BİTTİ !</h1>
                  {result && <div>{result}</div>}
               </div>
            )}
            <Board board={board} />
         </div>
      </DndProvider>
   );
}

export default App;
