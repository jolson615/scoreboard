import React from 'react';
import './player.css';

const Player = (props) => {

  return (
    <div className="Player">
      <h1>{props.parent.state.players[props.id]}</h1>
      <div>
        <button onClick={()=>props.clickHandler(-1, props.id)}>⬇️</button>
        <button onClick={()=>props.clickHandler(1, props.id)}>⬆️</button>
      </div>
    </div>
  );
}

export default Player;
