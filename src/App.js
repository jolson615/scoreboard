import React from 'react';
import Player from './components/player'
import './App.css';

const compare = (a, b) => {
  return a == b ? "It's a tie" : a > b ? "Player 1 is the winner" : "Player 2 is the winner"
}

const App = () => {
  const component = new React.Component()
  component.state = {
    players: [0, 0]
  }

  component.render = () => {
    return (
      <div>
        {compare(component.state.players[0], component.state.players[1])}
        <Player id={0} parent={component}/>
        <Player id={1} parent={component}/>
      </div>
    )
  }
  return component
}

export default App;
