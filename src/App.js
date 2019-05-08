import React from 'react';
import Player from './components/player'
import './App.css';

const genScoreboardMessage = winner => {
  if (winner === -1) {
    return "It's a tie!"
  }
  return "Player " + winner + " wins!"
}


const getMax = arr => {
  let maxVal = arr[0]
  let maxIdx = 0
  arr.slice(1).forEach((v, i) => {
    if (v > maxVal) {
      maxIdx = i
      maxVal = v
    } else if (v === maxVal) {
      maxIdx = -1
    }
  })
  return maxIdx
}

const App = () => {
  const component = new React.Component()
  component.state = {
    players: [0, 0],
    winner: -1,
  }

  const handleClick = (n, id) => {
    component.setState(prevState => {
      prevState.players[id] += n
      prevState.winner = getMax(prevState.players)
      return prevState
    })
  }

  component.render = () => {
    return (
      <div>
        <h1 className="Winner">{genScoreboardMessage(component.state.winner)}</h1>
        <div className="Players">
        <Player id={0} scores={component.state.players} clickHandler={handleClick}/>
        <Player id={1} scores={component.state.players} clickHandler={handleClick}/>
        </div>
      </div>
    )
  }
  return component
}

export default App;
