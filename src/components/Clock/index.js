import { useEffect, useState } from 'react';

import './style.css';

function Clock() {
  let countdownTimeout;

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function pauseCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
    }
  }, [isActive, time]);

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <div
      className='counter'
      onClick={isActive ? pauseCountdown : startCountdown}
    >
      <div className='inner'>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      <p>{isActive ? 'RUNNING' : 'PAUSED'}</p>
    </div>
  );
}

export default Clock;
