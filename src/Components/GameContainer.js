import React, {Component} from 'react';
import ScoreBoard from './ScoreBoard';
import '../scss/GameContainer.scss';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            selectedQuestions:[]
        }
        this.filterQuestions = this.filterQuestions.bind(this);
        
    }
    componentDidMount() {
        this.getQuestions();
    }

    getQuestions() {
        const questionList = this.props.questions;
        console.log(questionList)
        this.setState({
            questionList: questionList
        })
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
            selectedQuestions: filteredQuestions
        })
        console.log(this.state.selectedQuestions);
    }

    render() {
        let card =  <Card selectedQuestions={this.state.selectedQuestions} /> : null;
        return ( 
       <section>
           <button onClick={this.filterQuestions}>Hard</button>
           <button onClick={this.filterQuestions}>Easy</button>
           <button onClick={this.filterQuestions}>Medium</button>
       </section>
        )   
    }

}

export default GameContainer;