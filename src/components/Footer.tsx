import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="text-gradient">PersonaAI</h2>
            <p className="max-w-xs">
              The premier agency for digital creators. Scale your influence to infinity.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Agency</h4>
              <a href="#about">About</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#creators">For Creators</a>
              <a href="#brands">For Brands</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#consent">Consent Architecture</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PersonaAI Agency. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
