import './style.css';

function Button({ text, reset }) {
  return (
    <button className='btn' onClick={reset}>
      {text}
    </button>
  );
}

export default Button;
