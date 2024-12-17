import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {  
    const shuffledAnswers = useRef()//store and manage independently
    //shuffle answers if quizIsComplete = false
    if(!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a,b) => Math.random() - 0.5);//Shuffle answers
    }
    
    return (<ul id="answers">
        {shuffledAnswers.current.map((answer)=>{
            const isSelected = selectedAnswer === answer//check if the answer is selected - see handleSelectAnswer() function
            let cssClass = '';
            if(answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
            }
            if((answerState === 'correct'||answerState ==='wrong') && isSelected) {
                cssClass = answerState;
            }
            return (
               <li key={answer} className="answer">
               <button onClick={() => onSelect(answer)} className={cssClass} >{answer}</button>
                </li>
           );
        }             
        )}

    </ul>)
}