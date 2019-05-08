import React from 'react';
import Player from './components/player'
import './App.css';

const genScoreboardMessage = winner => {
  return "Player " + winner + " wins!"
}

const App = () => {
  const component = new React.Component()
  component.state = {
    players: [0,0,0,0,0,0],
    winner: 0
  }

  component.render = () => {
    return (
      <div>
        <h1 className="Winner">{genScoreboardMessage(component.state.winner)}</h1>
        <div className="Players">
          <Player key={0} id={0} parent={component}/>
          <Player key={1} id={1} parent={component}/>
          <Player key={2} id={2} parent={component}/>
          <Player key={3} id={3} parent={component}/>
          <Player key={4} id={4} parent={component}/>
          <Player key={5} id={5} parent={component}/>
        </div>
      </div>
    )
  }
  return component
}

export default App;
