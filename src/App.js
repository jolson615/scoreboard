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

  const handleClick = (n, id) => {
    component.setState(prevState => {
      prevState.players[id] += n
      if (prevState.players[id] > prevState.players[prevState.winner]) {
        prevState.winner = id
      }
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
