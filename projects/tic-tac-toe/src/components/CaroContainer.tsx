import { useState } from "react";
import { NameBroard } from "./NameBoard";
import { GameBoard } from "./GameBoard";
import { OverBox } from "./OverBox";

export function CaroContainer() {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [turn, setTurn] = useState(true);
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [over, setOver] = useState(0);
     const [firstPlayer, setFirstPlayer] = useState("Player 1");
     const [secondPlayer, setSecondPlayer] = useState("Player 2");

     return (
     <>         
          {(over) ? <OverBox winner={over === 1 ? firstPlayer : secondPlayer}/> : null}
          <div className="caro-box">
               <div className="name-broad">
                    <NameBroard name={firstPlayer} symbol="X" turn={turn ? firstPlayer : secondPlayer} setName={setFirstPlayer} />
                    <NameBroard name={secondPlayer} symbol="O" turn={turn ? firstPlayer : secondPlayer} setName={setSecondPlayer}/>
               </div>
               <GameBoard turn={turn} setTurn={setTurn} setOver={setOver} ></GameBoard>

          </div>
     </>

     )
}