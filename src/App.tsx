import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="glow-bg glow-top-left"></div>
      <div className="glow-bg glow-bottom-right"></div>
      
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
