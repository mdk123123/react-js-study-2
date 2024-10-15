import { forwardRef, useImperativeHandle, useRef } from "react" //React native
import {createPortal} from 'react-dom'; //library for React to interact with DOM
const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset}, ref) {
    const dialog = useRef(); //need a separate ref for dialog to detach from other components
    const userLost = remainingTime <=0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);//To fixed to show decimal number
    const score = Math.round((1 -remainingTime/(targetTime * 1000)) *100);
    useImperativeHandle(ref, () =>{
        return {
            open() {
                console.log(formattedRemainingTime);
                dialog.current.showModal(); //free to change within class: may change from dialog -> other type like div and change code in this class only
            }
        }
    });
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>  You lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>The target time was <strong>{targetTime}</strong> seconds</p>
        <p> You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
        <form method ="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;