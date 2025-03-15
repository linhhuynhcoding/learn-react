/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export function NameBroard({name, symbol, turn, setName} : {name: string, symbol: string, turn: string, setName: (name: string) => void}) {
  const [editMode, setEditMode] = useState(false);

  function handleChangeName(value: string) {
    setName(value);
  }

  return (
    <div className={`name-broad-player ${turn === name ? 'active' : ''}`}>
      {!editMode ? <span>{name}</span>
      : <input onChange={({target}) => handleChangeName(target.value)} value={name}></input>}
      <span>{symbol}</span>
      
      {!editMode ? <span onClick={() => {setEditMode(true)}}>Edit</span>
      : <span onClick={() => {setEditMode(false)}} >Save</span>}
    </div>
  );
}