import { motion } from 'framer-motion';
import { Globe, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import './Benefits.css';

const benefitsList = [
  {
    icon: <Clock size={24} />,
    title: 'Zero Time Commitment',
    description: 'Stop spending hours on brand shoots. Your avatar works 24/7, across multiple campaigns simultaneously.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Reach',
    description: 'We can localize your avatar to speak any language fluently, opening up international sponsorship deals.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Full Creative Control',
    description: 'Nothing goes live without your final approval. You own your likeness; we just help you monetize it.'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Infinite Scalability',
    description: 'Endorse a coffee brand in Tokyo and a fashion label in Paris on the exact same day.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <div className="benefits-wrapper glass-panel">
          <div className="benefits-content">
            <h2>Why Go <span className="text-gradient">Digital?</span></h2>
            <p>
              The creator economy is evolving. Being a creator shouldn't mean trading all your time for money. 
              By partnering with our agency, you leverage your most valuable asset—your identity—without the burnout.
            </p>
            
            <ul className="benefits-list">
              {benefitsList.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="benefit-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="benefits-image-container">
            <motion.div 
              className="glass-card stat-card stat-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="stat-value text-gradient">+300%</div>
              <div className="stat-label">Deal Capacity</div>
            </motion.div>
            
            <motion.div 
              className="glass-card stat-card stat-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="stat-value">0 hrs</div>
              <div className="stat-label">Time Spent Shooting</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
