import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../Components/Question.js';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const mockEvent = { preventDefault: jest.fn() }
const mockRemoveQuestion = {
    removeQuestion: jest.fn()}
const testEvent =  {target: { value: 'foo' }} 



const mockQuestion = {
    "question": "How would you split each word into its own string?",
    "exampleString": "let bemo = \"Yes, Finn. It goes in my butt.\"",
    "answer": "bemo.split(\" \")",
    "category": "easy",
    "id": 7
}

describe('Question', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Question 
            currentQuestion={mockQuestion} 
            removeQuestion = {mockRemoveQuestion}/>
        )
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('should have default state', () => {
        expect(wrapper.state()).toEqual({
            errorMsg: ''
        })
    })

    it('should check answer', () => {
        wrapper.find('.submit').simulate('click', mockEvent)
        wrapper.instance().checkAnswer(testEvent)
    })

    it('should fire method to delete question in parent', () => {
        wrapper.instance().nextQuestion();

        expect(mockRemoveQuestion).toHaveBeenCalled()
    })
})

