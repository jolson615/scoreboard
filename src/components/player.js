import React from 'react';
import './player.css';

const Player = (props) => {
  const handleClick = (n) => {
    props.parent.setState(prevState => {
      prevState.players[props.id] += n
      if (prevState.players[props.id] > prevState.players[prevState.winner]) {
        prevState.winner = props.id
      }
      return prevState
    })
  }

  return (
    <div className="Player">
      <h1>{props.parent.state.players[props.id]}</h1>
      <div>
        <button onClick={()=>handleClick(-1)}>⬇️</button>
        <button onClick={()=>handleClick(1)}>⬆️</button>
      </div>
    </div>
  );
}

export default Player;
