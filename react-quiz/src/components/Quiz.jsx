import { useState, useCallback } from "react";
import QUESTIONS from '../question.js'
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;// update in Question component
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers)=>{
            return [...prevAnswers,selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer] );
    if(quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }
 
    return (
        <div id ="quiz">
            <Question
            key={activeQuestionIndex}
            questionIndex={activeQuestionIndex}
            onSelectAnswer = {handleSelectAnswer}
            onSkipAnswer = {handleSkipAnswer}/>
        </div>
    );
}