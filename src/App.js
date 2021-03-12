import Header from './components/Header';
import DefineCounter from './components/DefineCounter';
import Clock from './components/Clock';
import Button from './components/Button';

import './global.css';

function App() {
  return (
    <>
      <Header title='pomodoro' />
      <DefineCounter />
      <Clock />
      <Button text='Reset' />
    </>
  );
}

export default App;
