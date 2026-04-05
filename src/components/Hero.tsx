import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import brushingVideo from '../assets/brushing.mp4';
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
            <span>Platform by creators for creators</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Monetize Your Influence, <br />
            <span className="text-gradient">Zero Cost, No Extra Effort.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We create a photorealistic AI avatar of you <strong>for FREE</strong>. You grant consent. We secure brand deals, generate the promotional content. Welcome to effortless scaling.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/create" className="btn btn-primary">
              Create your avatar <ArrowRight size={20} />
            </Link>
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
              <video 
                src={brushingVideo} 
                className="avatar-video"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="scan-line"></div>
              <div className="avatar-image generated"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
