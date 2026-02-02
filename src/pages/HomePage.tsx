import React, { useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';

// Lazy load sections below the fold for better performance
const Portfolio = lazy(() => import('../components/sections/Portfolio'));
const TechStack = lazy(() => import('../components/sections/TechStack'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const Pricing = lazy(() => import('../components/sections/Pricing'));
const ProjectInquiry = lazy(() => import('../components/sections/ProjectInquiry'));

const HomePage: React.FC = () => {
  const location = useLocation();

  // CRITICAL: Use useLayoutEffect to run BEFORE browser paints
  useLayoutEffect(() => {
    if (location.hash) {
      // Prevent ANY automatic scrolling
      window.history.scrollRestoration = 'manual';

      const scrollToSection = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          // Immediate scroll with NO animation
          window.scrollTo(0, offsetPosition);
          return true;
        }
        return false;
      };

      // Try to scroll immediately (synchronously)
      if (!scrollToSection()) {
        // If section not found yet (lazy loaded), keep trying
        let attempts = 0;
        const maxAttempts = 20; // 1 second total
        const interval = setInterval(() => {
          if (scrollToSection() || attempts >= maxAttempts) {
            clearInterval(interval);
          }
          attempts++;
        }, 50);
      }
    } else {
      window.history.scrollRestoration = 'auto';
    }

    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, [location.hash, location.pathname]);

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
  );
};

export default HomePage;
