import { motion } from 'framer-motion';
import { Fingerprint, Cpu, Video, DollarSign } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: <Fingerprint size={32} />,
    title: 'Grant Consent',
    description: 'You give us secure, revocable permission to train an AI model on your likeness and voice.'
  },
  {
    icon: <Cpu size={32} />,
    title: 'We Train the AI',
    description: 'Our agency builds a photorealistic, instantly-animatable 3D avatar that looks and sounds exactly like you.'
  },
  {
    icon: <Video size={32} />,
    title: 'Auto-Generate Promos',
    description: 'Brands request endorsements. We review them, generate the video using your AI persona, and you approve it natively.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Earn Passively',
    description: 'You get paid for brand deals without ever setting foot on a set or filming a single second of footage.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HowItWorks: React.FC = () => {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2>How It <span className="text-gradient">Works</span></h2>
          <p className="max-w-2xl mx-auto">
            We handle the heavy lifting of production and brand outreach. 
            Your only job is to be yourself, and let your digital twin do the rest.
          </p>
        </div>

        <motion.div 
          className="steps-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="step-card glass-card" variants={itemVariants}>
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
