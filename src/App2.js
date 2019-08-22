import React from 'react';
import Player from './components/player'
import './App.css';

const App = () => {
  const component = new React.Component()
  component.state = {
    order: ["Apple Laptop"],
    total: 0
  }

  const addToCart = (brand, item, price, quantity) => {
    previousOrder = {...component.state}
    previousState.order.push({

    })
  }

  component.render = () => {
    return (
      <div className="App">
        // <Hero />
        // <Vote party="democrat" castVote={castVote} />
        // <Vote party="republican" castVote={castVote} />
        // <Results state={component.state} />
        <Hero />
        <Product type="Laptop" price="999" buy={buy} />
        <Product type="Mechanical Pencil" price="0.25" buy={buy} />
        <Product type="College Ruled Loose Leaf" price="2.75" buy={buy} />
        <Summary globalState={component.state} />
      </div>
    )
  }
  return component
}

export default App;
