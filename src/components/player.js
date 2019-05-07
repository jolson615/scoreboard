import React from 'react';

const Player = (props) => {
  const handleClick = (n) => {
    console.log(props.key)
    console.log(props.parent.players)

    props.parent.setState(prevState => {
      prevState.players[props.id] += n
      return prevState
    })
  }

  return (
    <div>
      <h1>{props.parent.state.players[props.id]}</h1>
      <div>
        <button onClick={()=>handleClick(-1)}>⬇️</button>
        <button onClick={()=>handleClick(1)}>⬆️</button>
      </div>
    </div>
  );
}

export default Player;
