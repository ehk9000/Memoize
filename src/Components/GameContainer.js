import React, {Component} from 'react';
import ScoreBoard from './ScoreBoard';
import Question from './Question.js'
import '../scss/GameContainer.scss';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            filteredQuestions: [],
            currentQuestion: {},
            currentIndex: 0

        }
        this.filterQuestions = this.filterQuestions.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
        this.indexGenerator = this.indexGenerator.bind(this);

    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions() {
        const questionList = this.props.questions;
        this.setState({
            questionList: questionList
        }, () => this.indexGenerator());
        console.log("question list", questionList)
    }

    saveToStorage() {
        localStorage.setItem('questionsRemaining', JSON.stringify(this.state.questionList));
    }

    filterQuestions(e) {
        let value = e.target.innerText.toLowerCase();
        let filteredQuestions = this.state.questionList.filter(question => {
            return question.category === value;
        });
        this.setState({
            filteredQuestions: filteredQuestions
        }, () => this.indexGenerator())
        
        
        console.log("filtered questions", this.state.filteredQuestions);
    }

    indexGenerator() {
        const index = Math.floor(Math.random() * this.state.filteredQuestions.length);
        const card = this.state.filteredQuestions[index];
        this.setState({
            currentQuestion: card,
            currentIndex: index
        })
    }

    removeQuestion() {
        let currentIndex = this.state.currentIndex;
        this.state.filterQuestions.splice(currentIndex, 1)
    }

    render() {
        let card = this.state.filteredQuestions.length ?
                <Question currentQuestion={this.state.currentQuestion} />
         : null;
        return ( 
        <div>
            <section className="difficulty-wrapper">
                <button onClick={this.filterQuestions}>Hard</button>
                <button onClick={this.filterQuestions}>Easy</button>
                <button onClick={this.filterQuestions}>Medium</button>
            </section>
            <section className="card-area">
                {card}
            </section>
        </div>
        )   
    }

}

export default GameContainer;