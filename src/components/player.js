import React from 'react';
import './player.css';

const getMax = arr => {
  let maxVal = arr[0]
  let maxIdx = 0
  arr.slice(1).forEach((v, i) => {
    if (v > maxVal) {
      maxIdx = i
      maxVal = v
    } else if (v == maxVal) {
      maxIdx = -1
    }
  })
  return maxIdx
}

const Player = (props) => {
  const handleClick = (n) => {
    props.parent.setState(prevState => {
      prevState.players[props.id] += n
      prevState.winner = getMax(prevState.players)
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
