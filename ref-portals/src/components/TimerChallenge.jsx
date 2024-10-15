import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer;
export default function TimerChallenge({title, targetTime}) {
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef(); // component instance specific, will not be cleared when component reexecute. React stored behind the scene
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;
    if(timeRemaining <= 0) {
        clearInterval(timer.current);//for setInterval not to keep executing
        //setTimeRemaining(targetTime*1000);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime*1000);
    }


    function handleStart() {
    //     timer.current = setTimeout(() => {setTimerExpired(true),
    //     setTimerStarted(true);// execute right after timer set, reflect on button, Time is running text etc...
    //     dialog.current.open();// refer to open() methdo in ResultModal
    // },
    //     targetTime * 1000); //set timer in miliseconds, in Javascript//Javascript method of dialog which you can call to show modal
        timer.current =setInterval(()=> {
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)
    }

    

    function handleStop() {//stop timer
        //clearTimeout(timer.current);
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
    <>
    <ResultModal targetTime={targetTime} ref={dialog} remainingTime = {timeRemaining} onReset={handleReset}/>
    <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
            {targetTime} second{targetTime >1 ?'s':''}
        </p>
        <button onClick={timerIsActive? handleStop: handleStart}>
            {timerIsActive? 'Stop': 'Start'} Challenge
        </button>
        <p className={timerIsActive? 'active': undefined}>
            {timerIsActive? 'Time is running...' : 'Timer Inactive'}
        </p> {/*use state to control */}
    </section>
    </>)
}