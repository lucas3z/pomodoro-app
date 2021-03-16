import { useEffect, useState } from 'react';
import Header from './components/Header';
import DefineCounter from './components/DefineCounter';
import Clock from './components/Clock';

import notification from './assets/notification.mp3';

import './global.css';

function App() {
  let countdownTimeout;

  const [time, setTime] = useState(0 * 60);
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
  }

  function changeOption(value) {
    reset();
    setTime(value * 60);
  }

  function notify() {
    let audio = new Audio(notification);
    audio.play();

    if (Notification.permission === 'granted') {
      new Notification('COUNTER REACHED ZERO.', {
        body: 'Start a new one. ;)',
      });
    }
  }

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      notify();
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
    </>
  );
}

export default App;
