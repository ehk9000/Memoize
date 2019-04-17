import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockData = [
    {
        "question": "What string prototype would you use to find the first character in this string",
        "exampleString": "let lsp = \"Lumpy Space Princes\"",
        "answer": "lsp.charAt(0)",
        "category": "easy",
        "id": 1
    },
    {
        "question": "What string prototype would you use to see if \"glob\" is used in this string?",
        "exampleString": "let  finn = \"Oh my glob!\"",
        "answer": "finn.includes(\"glob\")",
        "category": "easy",
        "id": 2
    },
    {
        "question": "What string prototype would you use to find the first occurrence of \"Finn\"?",
        "exampleString": "let bemo = \" Who wants Finn cakes?\" ",
        "answer": "bemo.indexOf(\"Finn\")",
        "category": "easy",
        "id": 3
    },
    {
        "question": "What string prototype would you use to stop Ice King from yelling?",
        "exampleString": "let iceKing = \"I JUST WANTED TO BE LOVED!\"",
        "answer": "iceKing.toLowerCase()",
        "category": "easy",
        "id": 4
    },
    {
        "question": "How can we turn what Jake is saying into one variable?",
        "exampleString": "let jake = \"Dude, suckin at something is the first step\"  let theDog = \"to being sorta good at something\"",
        "answer": "jake.concat(theDog)",
        "category": "easy",
        "id": 5
    },
    {
        "question": "Make Bemo repeat himself three times",
        "exampleString": "let bemoChop = \"BMO Chop! If this were a real attack, you'd be dead.\"",
        "answer": "bemoChop.repeat(3)",
        "category": "easy",
        "id": 6
    },
    {
        "question": "How would you split each word into its own string?",
        "exampleString": "let bemo = \"Yes, Finn. It goes in my butt.\"",
        "answer": "bemo.split(\" \")",
        "category": "easy",
        "id": 7
    },
];

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <App/>
        )
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have the proper default state', () => {
        expect(wrapper.state('questions')).toEqual([]);
    });

    it('should set state to loading when snapshot is taken', () => {
        wrapper.setState({isLoading: true});
        expect(wrapper).toMatchSnapshot();
    })
});
