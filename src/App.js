import React, { Component } from 'react';
import GameContainer from './Components/GameContainer.js';
import './scss/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      questions: []
    }
    console.log(this.state.questions)
  }

  componentDidMount() {
    this.setState({isLoading: true})
    let base_Url = "https://fe-apps.herokuapp.com/";

    fetch(`${base_Url}api/v1/memoize/1901/ehk9000/prototypequestions`)
    .then(response => response.json())
    .then(json => this.setState({
      questions: json.prototypeQuestions,
      isLoading: false
    }))
    .catch(err => {
      throw new Error(err);
    })
  }

  render() {
    let gameContainer = this.state.isLoading ? 
    <div className="load-wrapper">
     <p>Loading...</p>
    </div> 
    :  <GameContainer questions={this.state.questions} />  
    return (
      <div className="App">
       <main>
            <header>
                <h1>Adventure Time!</h1>      
            </header>
            {gameContainer}
            
        </main>
      </div>
    );
  }
}

export default App;
