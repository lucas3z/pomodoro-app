import { BrowserRouter as Router } from 'react-router-dom';

import NavButton from '../NavButton';

import './style.css';

function DefineCounter({ change }) {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavButton text='pomodoro' change={() => change(0.1)} />
          </li>
          <li>
            <NavButton text='short break' change={() => change(5)} />
          </li>
          <li>
            <NavButton text='long break' change={() => change(10)} />
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default DefineCounter;
