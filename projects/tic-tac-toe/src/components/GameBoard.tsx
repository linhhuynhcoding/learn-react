import {  useEffect, useState } from "react"

export function GameBoard({turn, setTurn, setOver} : {turn: boolean, setTurn: (turn: boolean) => void, setOver: (over: number) => void}) {
     const [board, setBoard] = useState([
          ['','',''],
          ['','',''],
          ['','','']
     ]);
     useEffect(() => {
          console.log("Mounted!");
          checkWinner();

     }, [board]);

     function handleClick (row: number, cell: number) {
          const newBoard = [...board];
          if (newBoard[row][cell] !== '') return;
          if (turn) {
               newBoard[row][cell] = 'X';
          }
          else {
               newBoard[row][cell] = 'O';
          }
          setBoard(newBoard);
          setTurn(!turn);
     }

     function checkWinner () {
          for (let i = 0; i < 3; i++) {
               if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                    if (board[i][0] === 'X') {
                         setOver(1);
                    }
                    else {
                         setOver(2);

                    }
               }
               if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                    if (board[i][0] === 'X') {
                         setOver(1);
                    }
                    else {
                         setOver(2);

                    }               }
          }
          if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
               if (board[1][1] === 'X') {
                    setOver(1);
               }
               else {
                    setOver(2);

               }          }
          if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
               if (board[1][1] === 'X') {
                    setOver(1);
               }
               else {
                    setOver(2);

               }
          }
     }

     return (
          <div className="game-board">
               {
                    board.map((row, rowIndex) => (
                         <div key={rowIndex} className="row">
                              {
                                   row.map((cell, cellIndex) => (
                                        <div onClick={() => handleClick(rowIndex, cellIndex)} key={cellIndex} className="cell">
                                             {cell}
                                        </div>
                                   ))
                              }

                         </div>
                    ))
               }
          </div>
     )
}