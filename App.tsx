import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-manrope selection:bg-white/30">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
