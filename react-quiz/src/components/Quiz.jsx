import { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from '../question.js'
import quizCompleteImg from '../assets/quiz-complete.png'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers)=>{
            return [...prevAnswers,selectedAnswer];
        })
    }
    if(quizIsComplete) {
        return (
        <div id ="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz completed</h2>
        </div>
        );
    }
    //shuffle answers if quizIsComplete = false
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort((a,b) => Math.random() - 0.5);//Shuffle answers
    return (
        <div id ="quiz">
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer)=>(
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>
            ))}

        </ul>
        </div>
        </div>
    )
}