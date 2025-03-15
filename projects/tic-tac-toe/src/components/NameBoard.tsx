export function NameBroard({name, symbol, turn} : {name: string, symbol: string, turn: string}) {
  return (
    <div className={`name-broad-player ${turn === name ? 'active' : ''}`}>
      <span>{name}</span>
      <span>{symbol}</span>
      <span>Edit</span>
    </div>
  );
}