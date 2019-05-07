import React from 'react';
import Player from './components/player'
import './App.css';

const genScoreboardMessage = winner => {
  return "Player " + winner + " wins!"
}

const App = () => {
  const component = new React.Component()
  component.state = {
    players: [0, 0],
    winner: 0,
  }

  component.render = () => {
    return (
      <div>
        <h1 className="Winner">{genScoreboardMessage(component.state.winner)}</h1>
        <div className="Players">
          <Player id={0} parent={component}/>
          <Player id={1} parent={component}/>
        </div>
      </div>
    )
  }
  return component
}

export default App;
