import { useState, useRef } from "react";
export default function Player() {
  const[enteredPlayerName, setEnteredPlayerName] = useState('');
  // const[submitted, setSubmitted] = useState(false);
  const playerName = useRef();
 
  function handleClick() {
    //setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''//Clear
  }
  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName: 'unknown entity'}</h2> */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
