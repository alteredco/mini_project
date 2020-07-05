import React, {useState, useEffect} from 'react';

const Countdown = (props) => {
  const calculateTime = () => {
    const timeLeft= +new Date(props.endDate) - +new Date();
    let totalTime = {};

    if(timeLeft > 0){
      totalTime = {
        days: Math.floor(timeLeft/(1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft/(1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeLeft / 1000/60) % 60)
      };
    }
    return totalTime;
  }

  const [countdown, setCountdown] = useState(calculateTime());

useEffect(()=> {
  setTimeout(()=>{
    setCountdown(calculateTime());}, 1000);
});

const countdownClock = [<span>Deal available for </span>];

Object.keys(countdown).forEach(time => {
  if(!countdown[time]){
    return;
  }

  countdownClock.push(
    <span>
       {countdown[time]} {time} {" "}
    </span>
  );
})

return(
  <div className="countdown__clock">
    {countdownClock.length ? countdownClock : <span>Deal expired</span>}
  </div>
);
}

export default Countdown;