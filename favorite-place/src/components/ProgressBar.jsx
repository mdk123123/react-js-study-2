import { useState, useEffect } from "react";
const TIMER = 3000;

export default function ProgressBar() {
    const [remainingTime, setRemainingTime] = useState(TIMER);
    useEffect(() => {
        const interval = setInterval(() => {
        console.log("INTERVAL");
        setRemainingTime(prevTime => prevTime-10);
        return () => {
          clearInterval(interval);
        }
      },10 )}, []);
      return <progress value={remainingTime} max={TIMER}/>
}