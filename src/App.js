import React from 'react';
import Player from './components/player'
import './App.css';

const genScoreboardMessage = winner => {
  if (winner == -1) {
    return "It's a tie!"
  }
  return "Player " + winner + " wins!"
}

const range = n => Array.from(Array(n).keys())

const players = (howManyPlayers, parent, clickHandler) => {
  return range(howManyPlayers).map((i)=>
    <Player key={i} id={i} parent={parent} clickHandler={clickHandler}/>)
}

const getMax = arr => {
  let maxVal = arr[0]
  let maxIdx = 0
  arr.slice(1).forEach((v, i) => {
    if (v > maxVal) {
      maxIdx = i + 1
      maxVal = v
    } else if (v == maxVal) {
      maxIdx = -1
    }
  })
  return maxIdx
}

const GenericApp = (howManyPlayers) => {
  const component = new React.Component()
  component.state = {
    players: Array(howManyPlayers).fill(0),
    winner: -1
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
        <div className="Players">{players(howManyPlayers, component, handleClick)}</div>
      </div>
    )
  }
  return component
}

const App = () => GenericApp(4)

export default App;
