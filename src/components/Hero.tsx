import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="badge inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={16} className="text-gradient" style={{ marginRight: '8px' }} />
            <span>The Future of Creator Endorsements</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Monetize Your Influence, <br />
            <span className="text-gradient">Zero Screen Time Required.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We create a photorealistic AI avatar of you. You grant consent. We secure brand deals, generate the promotional content, and send you the revenue. Welcome to effortless scaling.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#join" className="btn btn-primary">
              Join the Waitlist <ArrowRight size={20} />
            </a>
            <a href="#demo" className="btn btn-secondary">
              Watch Demo
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Conceptual visual representing an AI Avatar transformation */}
          <div className="avatar-showcase">
            <div className="avatar-card glass-card">
              <div className="avatar-image original"></div>
              <div className="scan-line"></div>
              <div className="avatar-image generated"></div>
              <div className="tech-overlay">
                <div className="tech-point" style={{ top: '30%', left: '40%' }}></div>
                <div className="tech-point" style={{ top: '50%', left: '70%' }}></div>
                <div className="tech-point" style={{ top: '70%', left: '30%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
