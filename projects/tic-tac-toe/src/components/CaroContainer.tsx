import { useState } from "react";
import { NameBroard } from "./NameBoard";
import { GameBoard } from "./GameBoard";
import { OverBox } from "./OverBox";

export function CaroContainer() {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [turn, setTurn] = useState(true);
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [over, setOver] = useState(0);
     return (
     <>         
          {(over) ? <OverBox winner={over === 1 ? "PLAYER 1" : "PLAYER 2"}/> : null}
          <div className="caro-box">
               <div className="name-broad">
                    <NameBroard name="PLAYER 1" symbol="X" turn={turn ? 'PLAYER 1' : 'PLAYER 2'}/>
                    <NameBroard name="PLAYER 2" symbol="O" turn={turn ? 'PLAYER 1' : 'PLAYER 2'}/>
               </div>
               <GameBoard turn={turn} setTurn={setTurn} setOver={setOver} ></GameBoard>

          </div>
     </>

     )
}