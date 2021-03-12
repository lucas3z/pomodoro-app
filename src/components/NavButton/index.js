import './style.css';

function NavButton({ text, change }) {
  return (
    <button className='nav-btn' onClick={change}>
      {text}
    </button>
  );
}

export default NavButton;
