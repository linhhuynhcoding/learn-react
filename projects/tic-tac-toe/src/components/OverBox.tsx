

export function OverBox({winner} : {winner: string}) {
     return (
          <div className="over-box">
                    <h1>Game Over</h1>
                    <h3>{winner} win!!!</h3>
                   <button>Play Again</button>
          </div>
     )
}