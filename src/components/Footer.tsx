import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="navbar-brand footer-logo">
              <svg width="32" height="32" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 14,8 L 38,8 C 94,8 102,26 102,55 C 102,84 94,102 38,102 L 14,102 Z M 38,23 C 80,23 87,36 87,55 C 87,74 80,87 38,87 Z M 57,30 L 68,30 L 68,80 L 57,80 Z" fill="#7C3AED" fill-rule="evenodd"/>
              </svg>
              <div className="wordmark">
                <span className="di">Di</span><span className="jinn">jinn</span>
              </div>
            </Link>
            <p className="max-w-xs mt-4">
              The premier agency for digital creators. Scale your influence to infinity.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Agency</h4>
              <Link to="/create">About</Link>
              <Link to="/create">How It Works</Link>
              <Link to="/create">For Creators</Link>
              <Link to="/create">For Brands</Link>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <Link to="/create">Privacy Policy</Link>
              <Link to="/create">Terms of Service</Link>
              <Link to="/create">Consent Architecture</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dijinn. All rights reserved.</p>
          <div className="social-links">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
