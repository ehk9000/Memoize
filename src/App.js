import React, { Component } from 'react';
import GameContainer from './Components/GameContainer.js';
import './scss/App.scss';
import dataSet from './dataSet.js'
import finnLoad from './images/finn-load.jpg';
import lspLoad from './images/lsp-load.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      questions: dataSet.cards
    }
    console.log(this.state.questions)
  }

  render() {
    let gameContainer = this.state.questions.length ? <GameContainer questions={this.state.questions} /> 
    : <img src={finnLoad}>loading...</img>;
    return (
      <div className="App">
       <main>
            <header>
                <h1>Adventure Time!</h1>      
                <h2> Master String Prototypes </h2>
                <h3>Click on a difficulty to begin!</h3>
            </header>
            {gameContainer}
            
        </main>
      </div>
    );
  }
}

export default App;
