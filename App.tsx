import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./src/pages/HomePage'));
const AboutPage = lazy(() => import('./src/pages/AboutPage'));
const PlanesPage = lazy(() => import('./src/pages/PlanesPage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
      <p className="text-sm text-white/40">Cargando...</p>
    </div>
  </div>
);

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

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/planes" element={<PlanesPage />} />
          </Routes>
        </Suspense>

        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
