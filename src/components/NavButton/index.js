import { Link, useLocation } from 'react-router-dom';

import './style.css';

function NavButton({ text, change }) {
  const location = useLocation();

  return (
    <Link
      to={text.split(' ')[0]}
      className={
        location.pathname === '/' + text.split(' ')[0]
          ? 'nav-btn active'
          : 'nav-btn'
      }
      onClick={change}
    >
      {text}
    </Link>
  );
}

export default NavButton;
