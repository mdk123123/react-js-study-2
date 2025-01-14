import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout); 
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]) //rerun when timeout, onTimeout changes
    
    useEffect(() =>{//useEffect to avoid infinite loop (everytime setRemainingTime -> component reexecuted -> new interval component set)
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);
        return () => {
            clearInterval(interval); //clean up function
        }
    }, []);
   
    return <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
}