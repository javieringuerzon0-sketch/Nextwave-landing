import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';

// Scroll manager to handle hash navigation at router level
const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // CRITICAL: Prevent default scroll restoration
    window.history.scrollRestoration = 'manual';

    if (location.hash) {
      // Don't scroll to top, let the hash handle it
      return;
    }

    // Only scroll to top if no hash and going to home
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo(0, 0);
    }

    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, [location.pathname, location.hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollManager />
      <div className="bg-black text-white min-h-screen font-manrope selection:bg-white/30">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
