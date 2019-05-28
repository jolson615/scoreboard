import React from 'react';
import './player.css';

const Player = (props) => {
  return (
    <div className="Player">
      <h1>Player {props.id}</h1>
      <h3>Score: {props.score}</h3>
      <div>
        <button onClick={()=>props.clickHandler()}>
          <span role="img" aria-label="up">
            ⬆️
          </span>
        </button>
      </div>
    </div>
  )
}

export default Player;
