import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';
import Hero from './src/components/sections/Hero';
import About from './src/components/sections/About';

// Lazy load sections below the fold for better performance
const Portfolio = lazy(() => import('./src/components/sections/Portfolio'));
const TechStack = lazy(() => import('./src/components/sections/TechStack'));
const Testimonials = lazy(() => import('./src/components/sections/Testimonials'));
const Pricing = lazy(() => import('./src/components/sections/Pricing'));
const ProjectInquiry = lazy(() => import('./src/components/sections/ProjectInquiry'));

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Remove will-change after animation completes to save memory
            setTimeout(() => {
              (entry.target as HTMLElement).style.willChange = 'auto';
            }, 1000);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px', // Load earlier for smoother mobile
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      // Clean up will-change
      elements.forEach(el => {
        (el as HTMLElement).style.willChange = 'auto';
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-manrope selection:bg-white/30">
      <Navbar />

      <main className="relative">
        <Hero />

        {/* FONDO UNICORN - Optimizado */}
        <div
          data-us-project="p7Ff6pfTrb5Gs59C7nLC"
          className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#010a09]"
          style={{
            opacity: 0.7,
            transform: 'translateZ(0)', // Forzamos aceleración hardware
          }}
        ></div>

        <div className="relative z-10 w-full">
          <About />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Portfolio />
            <Testimonials />
            <Pricing />
            <TechStack />
            <ProjectInquiry />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
