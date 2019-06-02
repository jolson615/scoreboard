import React from 'react';
import Player from './components/player'
import './App.css';

const App = () => {
  const component = new React.Component()
  component.state = {
    playerAScore: 0,
    winningScore: 0,
    winner: "Player A",
  }

  const handlePlayerAClick = () => {
    // Take a copy of state
    let newState = {...component.state}
    // Modify state
    newState.playerAScore += 1
    // Trigger a re-render by using the setState() method
    component.setState(newState)
  }

  const reset = () => {
    component.setState({
      playerAScore: 0,
      winningScore: 0,
      winner: "Player A",
    })
  }

  component.render = () => {
    return (
      <div className="App">
        <div className="banner">SCOREBOARD</div>
        <h1 className="Winner">Player ## is in the lead!</h1>
        <h3>The winner has ## points</h3>
        <div className="Players">
          <Player id={0} score={component.state.playerAScore} clickHandler={handlePlayerAClick}/>
        </div>
        <button className="ResetButton" onClick={reset}>Reset</button>
      </div>
    )
  }
  return component
}

export default App;
