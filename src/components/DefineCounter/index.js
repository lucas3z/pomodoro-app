import NavButton from '../NavButton';

import './style.css';

function DefineCounter({ change }) {
  return (
    <nav>
      <ul>
        <li className='active'>
          <NavButton text='pomodoro' change={() => change(25)} />
        </li>
        <li>
          <NavButton text='short break' change={() => change(5)} />
        </li>
        <li>
          <NavButton text='long break' change={() => change(10)} />
        </li>
      </ul>
    </nav>
  );
}

export default DefineCounter;
