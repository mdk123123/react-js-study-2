import { useState, useCallback } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from '../question.js'
import quizCompleteImg from '../assets/quiz-complete.png'
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
   
    const [answerState, setAnswerState] = useState('');//question unanswered
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers((prevAnswers)=>{
            return [...prevAnswers,selectedAnswer];
        });
        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {//first answer in file is correct
                setAnswerState('correct');
            }
            else {
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('')
            })

        }, 1000)
    }, [activeQuestionIndex]);

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
            <Question questionText={QUESTIONS[activeQuestionIndex].text}
            key={activeQuestionIndex}//built in attributes
            answers = {QUESTIONS[activeQuestionIndex].answers}
            onSelectAnswer = {handleSelectAnswer}
            answerState ={answerState}
            selectedAnswer = {userAnswers[userAnswers.length-1]}
            onSkipAnswer = {handleSkipAnswer}/>
        </div>
    );
}