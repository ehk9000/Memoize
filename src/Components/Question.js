import React, {Component} from 'react';
import '../scss/Question.scss';



class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMsg: ''
        }
    }
    

    checkAnswer = (e) => {
        e.preventDefault();
        let input = e.target.closest('.card-container').querySelector('input').value
        if (input.toLowerCase() === this.props.currentQuestion.answer.toLowerCase()) {
            this.setState({
                errorMsg: "Nice!"
            }) 
            setTimeout(() => this.nextQuestion(), 2000);
            
        } else {
            this.setState({
                errorMsg: "Try again!"
            })
        }
    }

    nextQuestion = () => {
         this.setState({errorMsg: ''});
         this.props.removeQuestion();
    }


    render() {  
    if (this.props.currentQuestion === undefined) {
        return null;
    }

        return (
            <article className="card-container">
                <h3>{this.props.currentQuestion.question}</h3>
                <h3>{this.props.currentQuestion.exampleString}</h3>
                <p>{this.state.errorMsg}</p>
                <input type="text" className="user-guess" id="user-guess"/>
                <input type="submit" onClick={this.checkAnswer} className="submit"/>
            </article>
        )
    }
}

export default Question;