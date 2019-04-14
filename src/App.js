import React, { Component } from 'react';
import GameContainer from './Components/GameContainer.js';
import './scss/App.scss';
import dataSet from './dataSet.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      filteredQuestions:[],
      questions: dataSet.cards
    }

  }

  render() {
    return (
      <div className="App">
       <main>
            <header>
                <h1>Adventure Time!</h1>      
                <h2> Master String Prototypes </h2>
                <h3>Click on a difficulty to begin!</h3>
            </header>
            <section>
                <button onClick>Medium</button>
                <button>Easy</button>
                <button>Hard</button>
            </section>
        <GameContainer gameContainer= {GameContainer} /> 
        <section>

        </section>
        </main>
      </div>
    );
  }
}

export default App;
