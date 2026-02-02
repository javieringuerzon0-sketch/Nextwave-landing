import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import TechStack from '../components/sections/TechStack';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import ProjectInquiry from '../components/sections/ProjectInquiry';

const HomePage: React.FC = () => {
  const location = useLocation();

  // Handle hash navigation - scroll to section BEFORE paint
  useLayoutEffect(() => {
    if (location.hash) {
      window.history.scrollRestoration = 'manual';

      const element = document.querySelector(location.hash);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        // Immediate scroll
        window.scrollTo(0, offsetPosition);
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
        <Portfolio />
        <Testimonials />
        <Pricing />
        <TechStack />
        <ProjectInquiry />
      </div>
    </main>
  );
};

export default HomePage;
