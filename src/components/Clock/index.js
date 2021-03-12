import { useEffect, useState } from 'react';

import './style.css';

function Clock({ isActive, minutes, seconds, startCountdown, pauseCountdown }) {
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
