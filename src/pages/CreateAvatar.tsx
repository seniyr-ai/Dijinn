import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import './CreateAvatar.css';

const genres = [
  "",
  "Fashion & Beauty",
  "Comedy & Sketches",
  "Tech & Gadgets",
  "Gaming",
  "Fitness & Health",
  "Lifestyle",
  "Education",
  "Finance & Business",
  "Others"
];

const viewTiers = [
  "",
  "Under 10k",
  "10k - 50k",
  "50k - 250k",
  "250k - 1M",
  "Over 1M"
];



const CreateAvatar = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    instagramUsername: '',
    genre: '',
    topVideosViews: '',
    followerCount: '',
    topVideosEngagement: '5'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzRiG2diQkkfBxKQUfPobN6h34ktwLD1xyXDs6n-HMGOGdFgckQTDNbVH1NhZ8lp51n/exec"

      if (!scriptURL) {
        // If not set up yet, simulate success for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        return;
      }

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <main className="create-page">
      <div className="container">
        <motion.div
          className="create-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="create-header text-center">
            <h1>Create Your <span className="text-gradient">Avatar</span></h1>
            <p>Ready to monetize your likeness? Submit the form below to Approve your digital twin creation process.</p>
          </div>

          <div className="form-container glass-card">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  className="success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key="success"
                >
                  <CheckCircle2 size={64} className="success-icon" />
                  <h2>Application Received!</h2>
                  <p>Our team will review your profile and reach out to outline the next steps in creating your AI persona. Keep an eye on your inbox.</p>
                  <button className="btn btn-secondary mt-4" onClick={() => setStatus('idle')}>
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="avatar-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="form"
                >
                  <div className="form-group grid-cols-2">
                    <div className="form-field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Creator Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 1234567890"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="form-group grid-cols-2">
                    <div className="form-field">
                      <label htmlFor="genre">Creator Genre</label>
                      <div className="select-wrapper">
                        <select
                          id="genre"
                          name="genre"
                          required
                          value={formData.genre}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                        >
                          <option value="" disabled>Select your niche...</option>
                          {genres.slice(1).map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="instagramUsername">Instagram Username</label>
                      <input
                        type="text"
                        id="instagramUsername"
                        name="instagramUsername"
                        placeholder="@yourhandle"
                        required
                        value={formData.instagramUsername}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="form-group grid-cols-2">
                    <div className="form-field">
                      <label htmlFor="topVideosViews">Avg. Views (Top 3 Videos)</label>
                      <div className="select-wrapper">
                        <select
                          id="topVideosViews"
                          name="topVideosViews"
                          required
                          value={formData.topVideosViews}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                        >
                          <option value="" disabled>Select range...</option>
                          {viewTiers.slice(1).map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="followerCount">Total Follower Count</label>
                      <input
                        type="text"
                        id="followerCount"
                        name="followerCount"
                        placeholder="e.g. 50k, 1M"
                        required
                        value={formData.followerCount}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-field full-width">
                      <label htmlFor="topVideosEngagement">
                        Avg. Engagement Rate ({formData.topVideosEngagement}%)
                      </label>
                      <input
                        type="range"
                        id="topVideosEngagement"
                        name="topVideosEngagement"
                        min="0"
                        max="15"
                        step="0.1"
                        required
                        value={formData.topVideosEngagement}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="engagement-slider"
                      />
                    </div>
                  </div>



                  {status === 'error' && (
                    <div className="error-message">
                      <AlertCircle size={18} />
                      <span>There was a problem submitting your request. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-primary submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Processing...' : 'Submit Profile'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CreateAvatar;
