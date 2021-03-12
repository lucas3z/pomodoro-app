import { useEffect, useState } from 'react';
import Header from './components/Header';
import DefineCounter from './components/DefineCounter';
import Clock from './components/Clock';
import ResetButton from './components/ResetButton';

import './global.css';

function App() {
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

  function reset() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  function changeOption(value) {
    reset();
    setTime(value * 60);
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

  return (
    <>
      <Header title='pomodoro' />
      <DefineCounter change={changeOption} />
      <Clock
        isActive={isActive}
        minutes={minutes}
        seconds={seconds}
        startCountdown={startCountdown}
        pauseCountdown={pauseCountdown}
      />
      <ResetButton text='Reset' reset={reset} />
    </>
  );
}

export default App;
