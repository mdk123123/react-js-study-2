import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        setTimeout(onTimeout, timeout); 
    }, [timeout, onTimeout]) //rerun when timeout, onTimeout changes
    
    useEffect(() =>{//useEffect to avoid infinite loop (everytime setRemainingTime -> component reexecuted -> new interval component set)
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100)
    }, []);
   
    return <progress id="question-time" max={timeout} value={remainingTime}/>
}