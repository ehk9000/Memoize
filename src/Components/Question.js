import React, {Component} from 'react';


class Question extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {  
    console.log("question ", this.props.currentQuestion)
    if (this.props.currentQuestion === undefined) {
        return null;
    }

        return (
            <article className="card-container">
                <h3>{this.props.currentQuestion.question}</h3>
                <h3>{this.props.currentQuestion.exampleString} </h3>
                <input type="text" />
            </article>
        )
    }
}

export default Question;