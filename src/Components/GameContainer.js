import React, {Component} from 'react';
import Question from './Question.js'
import '../scss/GameContainer.scss';



class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            filteredQuestions: [],
            questionsRemaining: [],
            currentIndex: 0,
            currentQuestion: {}
        }
    }

    componentDidMount() {
        const questionsRemaining = JSON.parse(localStorage.getItem('questionsRemaining')) || [];
        this.setState({
            questionsRemaining : questionsRemaining
        });
        this.getQuestions();

    }

    getQuestions = () => {
        const questionList = this.props.questions;
        const questionsRemaining = this.state.questionsRemaining;
        if(this.state.questionsRemaining.length) {
            this.setState({
                questionsRemaining: questionsRemaining
            }, () => this.indexGenerator());
        } else {
            this.setState({
                questionsRemaining: questionList
            }, () => this.saveToStorage(), () => this.indexGenerator());
        }
    }

    saveToStorage = () => {
        localStorage.setItem('questionsRemaining', JSON.stringify(this.state.questionsRemaining));
    }

    filterQuestions = (e) => {
        let value = e.target.innerText.toLowerCase();
        let filteredQuestions = this.state.questionsRemaining.filter(question => {
            return question.category === value;
        });
        this.setState({
            filteredQuestions: filteredQuestions
        }, () => this.indexGenerator())
        
    }

    indexGenerator = () => {
        const index = Math.floor(Math.random() * this.state.filteredQuestions.length);
        const card = this.state.filteredQuestions[index];
        this.setState({
            currentQuestion: card,
            currentIndex: index
        })        
    }

    removeQuestion = () => {
        let cardsRemaining = this.state.questionsRemaining;
        let filteredCards = this.state.filteredQuestions;
        cardsRemaining.splice(cardsRemaining.indexOf(this.state.currentQuestion.id), 1);
        filteredCards.splice(this.state.currentIndex, 1);
        this.indexGenerator();
        this.saveToStorage();
    }

    render() {
        let card = this.state.filteredQuestions.length ?
                <Question currentQuestion={this.state.currentQuestion}
                removeQuestion={this.removeQuestion} />
         : 
         <div>
             <h2>String Prototypes </h2>
             <h3 className="difficulty-title">Click on a difficulty to begin!</h3>
             <section className="difficulty-wrapper">
                <button onClick={this.filterQuestions} className="hard">Hard</button>
                <button onClick={this.filterQuestions} className="easy">Easy</button>
                <button onClick={this.filterQuestions} className="medium">Medium</button>
             </section>
         </div>
        return ( 
        <div>
                {card}
        </div>
        )   
    }

}

export default GameContainer;