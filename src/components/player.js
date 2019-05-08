import React from 'react';
import './player.css';

const Player = (props) => {
  const component = new React.Component()

  component.render = () => {
    return (
      <div className="Player">
        <h1>{props.score}</h1>
        <div>
          <button onClick={()=>props.clickHandler(-1, props.id)}>⬇️</button>
          <button onClick={()=>props.clickHandler(1, props.id)}>⬆️</button>
        </div>
      </div>
    )
  }
}

export default Player;
