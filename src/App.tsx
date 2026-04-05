import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateAvatar from './pages/CreateAvatar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="glow-bg glow-top-left"></div>
        <div className="glow-bg glow-bottom-right"></div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateAvatar />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
