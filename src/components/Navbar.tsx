import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <svg width="32" height="32" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 14,8 L 38,8 C 94,8 102,26 102,55 C 102,84 94,102 38,102 L 14,102 Z M 38,23 C 80,23 87,36 87,55 C 87,74 80,87 38,87 Z M 57,30 L 68,30 L 68,80 L 57,80 Z" fill="#7C3AED" fill-rule="evenodd"/>
          </svg>
          <div className="wordmark">
            <span className="di">Di</span><span className="jinn">jinn</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
