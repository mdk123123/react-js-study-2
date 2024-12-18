import { useState, useCallback } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from '../question.js'
import quizCompleteImg from '../assets/quiz-complete.png'
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;// update in Question component
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers)=>{
            console.log(selectedAnswer);
            return [...prevAnswers,selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer] );
    if(quizIsComplete) {
        return (
        <div id ="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz completed</h2>
        </div>
        );
    }
 
    return (
        <div id ="quiz">
            <Question
            questionIndex={activeQuestionIndex}//built in attributes
            onSelectAnswer = {handleSelectAnswer}
            onSkipAnswer = {handleSkipAnswer}/>
        </div>
    );
}