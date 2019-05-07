import React from 'react';
import Player from './components/player'
import './App.css';

const compare = arr => {
  let winner = 0
  let tie = false
  arr.slice(1).forEach((v, i) => {
    if (arr[winner] < v) {
      winner = i+1
      tie = false
    } else if (arr[winner] == v) {
      tie = true
    }
  })
  return [winner, tie]
}

const genScoreboardMessage = ([winner, tie]) => {
  if (tie) {
    return "It's a tie!"
  } else {
    return "Player " + winner + " wins!"
  }
}

const range = n => Array.from(Array(n).keys())

const players = (howManyPlayers, parent) => {
  return range(howManyPlayers).map((i)=>
    <Player id={i} parent={parent}/>)
}

const GenericApp = (howManyPlayers) => {
  const component = new React.Component()
  component.state = {
    players: Array(howManyPlayers).fill(0)
  }

  component.render = () => {
    return (
      <div>
        {genScoreboardMessage(compare(component.state.players))}
        {players(howManyPlayers, component)}
      </div>
    )
  }
  return component
}

const App = () => GenericApp(10)

export default App;
