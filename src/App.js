import React from 'react';
import Player from './components/player'
import './App.css';

const genScoreboardMessage = winner => {
  return "Player " + winner + " wins!"
}

const range = n => Array.from(Array(n).keys())

const players = (howManyPlayers, parent) => {
  return range(howManyPlayers).map((i)=>
    <Player key={i} id={i} parent={parent}/>)
}

const GenericApp = (howManyPlayers) => {
  const component = new React.Component()
  component.state = {
    players: Array(howManyPlayers).fill(0),
    winner: 0
  }

  component.render = () => {
    return (
      <div>
        <h1 className="Winner">{genScoreboardMessage(component.state.winner)}</h1>
        <div className="Players">{players(howManyPlayers, component)}</div>
      </div>
    )
  }
  return component
}

const App = () => GenericApp(4)

export default App;
