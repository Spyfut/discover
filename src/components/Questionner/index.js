import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Button from '../Button/index.js'
import QuestionDB from '../../questionDB.json';

export function randomQ(e) {
    e.preventDefault();
    const questionNumber = QuestionDB.questions.length,
    randomNumber = Math.floor((Math.random() * questionNumber)),
    randomQuestion = QuestionDB.questions[randomNumber].question,
    blockQuestion = document.querySelector('p');
    blockQuestion.innerHTML= randomQuestion;
}

function Questionner (props) {
    const {question} = props
    return (
        <div className='questionner'>
            <p>{question}</p>
            <Button link="#" onClick={randomQ}>Question suivante</Button>
        </div>
    )   
}

Questionner.propType = {
    question: PropTypes.string.isRequired
}

export default Questionner