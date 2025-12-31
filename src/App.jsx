import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import Advertise from './pages/Advertise';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SubscribePopup from './components/SubscribePopup';

// Create context for subscribe popup
export const SubscribeContext = createContext();

function App() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenSubscribePopup');

    if (!hasSeenPopup) {
      // Show popup after 15 seconds
      const timer = setTimeout(() => {
        setIsSubscribeOpen(true);
        sessionStorage.setItem('hasSeenSubscribePopup', 'true');
      }, 15000); // 15 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const openSubscribePopup = () => {
    setIsSubscribeOpen(true);
  };

  const closeSubscribePopup = () => {
    setIsSubscribeOpen(false);
  };

  return (
    <SubscribeContext.Provider value={{ openSubscribePopup }}>
      <Router>
        <SubscribePopup isOpen={isSubscribeOpen} onClose={closeSubscribePopup} />

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticlePage />} />

          {/* Info Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advertise" element={<Advertise />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Category Pages */}
          <Route path="/markets" element={<Articles />} />
          <Route path="/strategy" element={<Articles />} />
          <Route path="/opinion" element={<Articles />} />
        </Routes>
      </Router>
    </SubscribeContext.Provider>
  );
}

export default App;