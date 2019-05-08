import React from 'react';
import './player.css';

const Player = (props) => {
  const component = new React.Component(props)

  component.render = () => {
    console.log(props)
    return (
      <div className="Player">
        <h1>{props.scores[props.id]}</h1>
        <div>
          <button onClick={()=>props.clickHandler(-1, props.id)}>⬇️</button>
          <button onClick={()=>props.clickHandler(1, props.id)}>⬆️</button>
        </div>
      </div>
    )
  }
  return component
}

export default Player;
